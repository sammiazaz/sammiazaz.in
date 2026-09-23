export default function LocationMapPlaceholder() {
  return (
    <div className="w-full relative h-[400px] md:h-[500px] border-t border-b border-zinc-800 bg-black overflow-hidden flex flex-col justify-between py-8">
      {/* Decorative Technical Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Abstract Map Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-64 h-64 border border-[#EF4444] rounded-xl flex items-center justify-center">
          <div className="w-48 h-48 border border-[#EF4444]/50 rounded-xl flex items-center justify-center">
            <div className="w-32 h-32 border border-[#EF4444]/30 rounded-xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        {/* Radar Blip */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-12 h-12 bg-[#EF4444]/20 rounded-xl animate-ping"></div>
          <div className="w-3 h-3 bg-[#EF4444] rounded-xl shadow-[0_0_15px_#EF4444]"></div>
        </div>
        
        {/* Placeholder Label */}
        <div className="text-center font-mono">
          <p className="text-zinc-500 text-xs tracking-[0.2em] mb-1">[ MAP PLACEHOLDER ]</p>
        </div>
      </div>

      {/* Content overlays */}
      <div className="relative z-10 px-4 md:px-12">
        <h3 className="text-[#EF4444] text-xs font-bold tracking-[0.2em] uppercase mb-1">Location</h3>
        <p className="text-white text-xl md:text-3xl font-light tracking-wide">DELHI, INDIA</p>
      </div>

      <div className="relative z-10 px-4 md:px-12 flex justify-end">
        <div className="text-right">
          <p className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase">Coordinates</p>
          <p className="text-zinc-400 font-mono text-xs">28.6139° N, 77.2090° E</p>
        </div>
      </div>
    </div>
  );
}

