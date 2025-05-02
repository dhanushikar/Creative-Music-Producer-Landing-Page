import React from 'react';
export const AboutSection = () => {
  return <section id="about" className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            About the Producer
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Producer image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl opacity-75 blur-lg"></div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <img src="https://images.unsplash.com/photo-1567596388756-f6d710c8fc07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" alt="Music Producer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          {/* Bio content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">
              Hi, I'm <span className="text-purple-400">Jaliya Sasanka</span>
            </h3>
            <p className="text-lg mb-6 text-gray-300">
              With over 10 years of experience in the music industry, I've
              helped hundreds of artists bring their musical vision to life. My
              passion is creating rich, dynamic soundscapes that capture the
              essence of your artistic expression.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              I believe that every artist deserves high-quality production that
              elevates their music to its fullest potential. My studio is
              equipped with state-of-the-art technology to ensure your sound is
              nothing short of exceptional.
            </p>
            {/* Genres */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                Genres I work with:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Hip Hop', 'R&B', 'Pop', 'Electronic', 'Rock', 'Jazz', 'Indie', 'Alternative'].map(genre => <span key={genre} className="px-3 py-1 bg-gray-800 rounded-full text-sm border border-purple-500/30">
                    {genre}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};