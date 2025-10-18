export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated circles container */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-cyan-500 animate-spin" />

          {/* Middle rotating ring (slower) */}
          <div
            className="absolute inset-2 rounded-full border-3 border-transparent border-b-cyan-400 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "3s" }}
          />

          {/* Inner rotating ring */}
          <div
            className="absolute inset-4 rounded-full border-2 border-transparent border-t-cyan-300 animate-spin"
            style={{ animationDuration: "2s" }}
          />

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-500/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <p className="text-white text-sm font-medium tracking-widest">LOADING</p>
      </div>
    </div>
  )
}
