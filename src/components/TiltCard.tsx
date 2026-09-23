"use client";

import React, { useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  withAnimatedBorder?: boolean;
}

export default function TiltCard({ children, className = "", withAnimatedBorder = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();

  // Tilt effect is enabled for Cyan Pill (Sammi) theme, but clean 2D hover elevation in Current theme
  const isTiltEnabled = theme === 'cyan-pill';
  const isCurrentTheme = theme === 'current';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isTiltEnabled || !cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Max rotation in degrees
    const maxRotation = 8;
    
    // If mouseX is positive (right side), right side goes IN -> positive rotateY
    // If mouseY is positive (bottom side), bottom side goes IN -> negative rotateX
    const rY = (mouseX / (width / 2)) * maxRotation;
    const rX = -(mouseY / (height / 2)) * maxRotation;
    
    setRotation({ x: rX, y: rY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset back to flat
    setRotation({ x: 0, y: 0 });
  };

  const strokeColor = isCurrentTheme ? '#EF4444' : '#FFFFFF';
  const glowShadow = isCurrentTheme 
    ? 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.75))' 
    : 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))';
  const cardRadius = isCurrentTheme ? '16px' : '24px';
  const rectRx = isCurrentTheme ? '16' : '24';

  return (
    <div 
      ref={cardRef}
      className={`relative tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isTiltEnabled
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(${isHovering ? 1.02 : 1}, ${isHovering ? 1.02 : 1}, 1)`
          : (isHovering ? 'translateY(-4px)' : 'translateY(0)'),
        transition: isHovering 
          ? (isTiltEnabled ? 'transform 0.1s ease-out' : 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)') 
          : (isTiltEnabled ? 'transform 0.5s ease-out' : 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'),
        transformStyle: isTiltEnabled ? 'preserve-3d' : undefined,
        willChange: 'transform'
      }}
    >
      {withAnimatedBorder && (
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible animated-card-svg" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ 
            filter: isHovering ? glowShadow : 'none', 
            borderRadius: cardRadius,
            transition: 'filter 0.3s ease'
          }}
        >
          <rect 
            width="100%" height="100%" rx={rectRx} 
            fill="none" 
            stroke={strokeColor} 
            strokeWidth="1.5" 
            pathLength="100"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: isHovering ? 0 : 100,
              opacity: isHovering ? 1 : 0,
              transition: 'stroke-dashoffset 0.85s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
            }}
          />
        </svg>
      )}
      {children}
    </div>
  );
}
