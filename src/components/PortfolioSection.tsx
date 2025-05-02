import React, { useState } from 'react';
import { PlayIcon, PauseIcon } from 'lucide-react';
export const PortfolioSection = () => {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);
  const portfolioTracks = [{
    id: 1,
    title: 'Summer Feeling',
    artist: 'Sarah Johnson',
    genre: 'Pop',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 2,
    title: 'Midnight Drive',
    artist: 'The Echoes',
    genre: 'Alternative Rock',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 3,
    title: 'Urban Flow',
    artist: 'J-Beats',
    genre: 'Hip Hop',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 4,
    title: 'Electric Dreams',
    artist: 'Neon Pulse',
    genre: 'Electronic',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
  }, {
    id: 5,
    title: 'Soul Therapy',
    artist: 'Melanie Blue',
    genre: 'R&B',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }, {
    id: 6,
    title: 'Acoustic Journey',
    artist: 'The Wanderers',
    genre: 'Indie Folk',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }];
  const togglePlay = (id: number) => {
    if (activeTrack === id) {
      setActiveTrack(null);
    } else {
      setActiveTrack(id);
    }
  };
  return <section id="portfolio" className="py-20 px-6 md:px-12 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Recent Work
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioTracks.map(track => <div key={track.id} className="bg-black rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              <div className="relative aspect-video">
                <img src={track.image} alt={track.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                  <button className="w-16 h-16 bg-purple-600/90 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110" onClick={() => togglePlay(track.id)}>
                    {activeTrack === track.id ? <PauseIcon size={32} className="text-white" /> : <PlayIcon size={32} className="text-white ml-1" />}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{track.title}</h3>
                <p className="text-gray-400 mb-2">{track.artist}</p>
                <span className="inline-block px-3 py-1 bg-gray-800 rounded-full text-xs text-cyan-400 border border-cyan-900/30">
                  {track.genre}
                </span>
              </div>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-lg font-medium text-purple-400 hover:text-cyan-400 transition-colors">
            View Full Portfolio
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>;
};