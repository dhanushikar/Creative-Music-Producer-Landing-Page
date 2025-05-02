import React from 'react';
export const HeroSection = () => {
  return <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Music studio" className="w-full h-full object-cover" />
      </div>
      {/* Animated waveform overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,800 C300,680 400,580 600,650 C800,720 1000,550 1200,800 L1200,800 L0,800 Z" className="fill-cyan-500 animate-pulse" style={{
          animationDuration: '8s'
        }} />
          <path d="M0,800 C200,700 600,600 800,700 C1000,800 1200,750 1200,800 L1200,800 L0,800 Z" className="fill-purple-600 animate-pulse opacity-70" style={{
          animationDuration: '10s'
        }} />
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Bring Your Sound to Life
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Professional music production services tailored to your unique sound.
          From recording to mastering, turn your musical vision into reality.
        </p>
        <a href="#contact" className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-all transform hover:scale-105">
          Book a Session
        </a>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>;
};