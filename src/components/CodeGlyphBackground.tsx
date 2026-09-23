"use client";

import React, { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

const SYMBOLS = [
  '$', ';', ',', '{', '}', '(', ')', '[', ']', '<', '>',
  '/', '\\', '*', '&', '%', '#', '@', '^', '!', '+', '=',
  ':', '~', '0', '1', 'x', 'y', 'z', '?', '|', '{}', '()'
];

// Seeded pseudo-random to keep symbol distribution consistent per cell
function pseudoRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export default function CodeGlyphBackground() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (theme !== 'current') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Mouse coordinates (default offscreen)
    let mouseX = -9999;
    let mouseY = -9999;
    let targetMouseX = -9999;
    let targetMouseY = -9999;
    let isMouseOver = false;

    // Grid configuration
    const cellWidth = 38;
    const cellHeight = 38;
    let cols = 0;
    let rows = 0;

    interface GridCell {
      symbol: string;
      isRed: boolean;
      baseOpacity: number;
      randOffset: number;
    }

    let grid: GridCell[][] = [];

    const setupGrid = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / cellWidth) + 1;
      rows = Math.ceil(height / cellHeight) + 1;

      grid = [];
      for (let r = 0; r < rows; r++) {
        const rowCells: GridCell[] = [];
        for (let c = 0; c < cols; c++) {
          const seed = r * 1337 + c * 7919;
          const rand1 = pseudoRandom(seed);
          const rand2 = pseudoRandom(seed + 1);
          const rand3 = pseudoRandom(seed + 2);

          const symbol = SYMBOLS[Math.floor(rand1 * SYMBOLS.length)];
          // ~12% of characters are red accent, matching the user's reference image
          const isRed = rand2 < 0.12;
          const baseOpacity = isRed ? 0.35 + rand3 * 0.25 : 0.08 + rand3 * 0.08;

          rowCells.push({
            symbol,
            isRed,
            baseOpacity,
            randOffset: rand1 * Math.PI * 2,
          });
        }
        grid.push(rowCells);
      }
    };

    setupGrid();

    const handleResize = () => {
      setupGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
      isMouseOver = true;
    };

    const handleMouseLeave = () => {
      isMouseOver = false;
      targetMouseX = -9999;
      targetMouseY = -9999;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.15;
      mouseY += (targetMouseY - mouseY) * 0.15;

      ctx.clearRect(0, 0, width, height);

      ctx.font = '600 13px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const influenceRadius = 180;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cell = grid[r]?.[c];
          if (!cell) continue;

          const cx = c * cellWidth + cellWidth / 2;
          const cy = r * cellHeight + cellHeight / 2;

          const dx = cx - mouseX;
          const dy = cy - mouseY;
          const dist = Math.hypot(dx, dy);

          let opacity = cell.baseOpacity;
          let angle = 0;
          let offsetX = 0;
          let offsetY = 0;

          if (dist < influenceRadius && isMouseOver) {
            const factor = Math.cos((dist / influenceRadius) * (Math.PI / 2));
            // Highlight nearby symbols
            opacity = Math.min(1, cell.baseOpacity + factor * 0.7);

            // Subtle interactive wiggle / deflection near cursor
            const wiggleAmp = factor * 4;
            offsetX = Math.sin(time * 3 + cell.randOffset) * wiggleAmp;
            offsetY = Math.cos(time * 3 + cell.randOffset) * wiggleAmp;
            angle = Math.sin(time * 2 + cell.randOffset) * factor * 0.35;
          }

          ctx.save();
          ctx.translate(cx + offsetX, cy + offsetY);
          if (angle !== 0) {
            ctx.rotate(angle);
          }

          if (cell.isRed) {
            ctx.fillStyle = `rgba(239, 68, 68, ${opacity})`;
            if (dist < influenceRadius && isMouseOver) {
              ctx.shadowColor = 'rgba(239, 68, 68, 0.7)';
              ctx.shadowBlur = 8;
            }
          } else {
            // White / faint zinc glyphs
            ctx.fillStyle = `rgba(240, 240, 240, ${opacity})`;
            if (dist < influenceRadius * 0.6 && isMouseOver) {
              ctx.shadowColor = 'rgba(255, 255, 255, 0.4)';
              ctx.shadowBlur = 4;
            }
          }

          ctx.fillText(cell.symbol, 0, 0);
          ctx.restore();
        }
      }

      // Draw subtle high-tech reticle around mouse cursor if on screen
      if (isMouseOver && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        ctx.save();
        ctx.translate(mouseX, mouseY);
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.5)';
        ctx.lineWidth = 1.5;

        const reticleSize = 14;
        const cornerLen = 5;

        // Top-Left corner
        ctx.beginPath();
        ctx.moveTo(-reticleSize, -reticleSize + cornerLen);
        ctx.lineTo(-reticleSize, -reticleSize);
        ctx.lineTo(-reticleSize + cornerLen, -reticleSize);
        ctx.stroke();

        // Top-Right corner
        ctx.beginPath();
        ctx.moveTo(reticleSize - cornerLen, -reticleSize);
        ctx.lineTo(reticleSize, -reticleSize);
        ctx.lineTo(reticleSize, -reticleSize + cornerLen);
        ctx.stroke();

        // Bottom-Left corner
        ctx.beginPath();
        ctx.moveTo(-reticleSize, reticleSize - cornerLen);
        ctx.lineTo(-reticleSize, reticleSize);
        ctx.lineTo(-reticleSize + cornerLen, reticleSize);
        ctx.stroke();

        // Bottom-Right corner
        ctx.beginPath();
        ctx.moveTo(reticleSize - cornerLen, reticleSize);
        ctx.lineTo(reticleSize, reticleSize);
        ctx.lineTo(reticleSize, reticleSize - cornerLen);
        ctx.stroke();

        // Center dot
        ctx.fillStyle = '#EF4444';
        ctx.beginPath();
        ctx.arc(0, 0, 1.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  // Only render for current theme
  if (theme !== 'current') {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      style={{
        opacity: 0.9,
      }}
      aria-hidden="true"
    />
  );
}
