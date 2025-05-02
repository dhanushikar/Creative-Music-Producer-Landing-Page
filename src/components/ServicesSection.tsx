import React from 'react';
import { Mic2Icon, SlidersIcon, MusicIcon, LayersIcon, FolderIcon } from 'lucide-react';
export const ServicesSection = () => {
  const services = [{
    id: 1,
    title: 'Audio Recording',
    description: 'Professional vocal and instrument recording in a soundproofed studio environment with top-quality microphones and equipment.',
    icon: <Mic2Icon size={40} className="text-purple-400" />
  }, {
    id: 2,
    title: 'Mixing & Mastering',
    description: 'Precision mixing and industry-standard mastering to ensure your tracks sound balanced, clear, and ready for distribution.',
    icon: <SlidersIcon size={40} className="text-cyan-400" />
  }, {
    id: 3,
    title: 'Beat Making',
    description: 'Custom beat production tailored to your style, from trap and hip-hop to electronic and pop-influenced instrumentals.',
    icon: <MusicIcon size={40} className="text-purple-400" />
  }, {
    id: 4,
    title: 'Music Arrangements',
    description: 'Full arrangement services to transform your ideas into complete songs with harmonies, instrumentation, and structure.',
    icon: <LayersIcon size={40} className="text-cyan-400" />
  }, {
    id: 5,
    title: 'Full Music Production',
    description: 'End-to-end music production from concept to final master, including writing, recording, mixing, and mastering.',
    icon: <FolderIcon size={40} className="text-purple-400" />
  }];
  return <section id="services" className="py-20 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
            Services
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => <div key={service.id} className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all group hover:shadow-lg hover:shadow-purple-500/20">
              <div className="mb-6 p-4 bg-gray-800 rounded-lg inline-block group-hover:bg-gradient-to-r from-purple-900/50 to-cyan-900/50 transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>)}
        </div>
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-all transform hover:scale-105">
            Get a Quote
          </a>
        </div>
      </div>
    </section>;
};