import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src="/475372778_583728951301744_3888486174212790513_n.jpg" alt="Jaliya Sasanka Studio Logo" className="h-12 w-auto" />
          <div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
              JALIYA SASANKA
            </div>
            <div className="text-sm text-gray-400">Music Production Studio</div>
          </div>
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-purple-400 transition-colors">
            Services
          </a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors">
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-4 py-2 rounded-md transition-all">
            Book a Session
          </a>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile navigation */}
      {isMenuOpen && <div className="md:hidden bg-black/95 absolute top-full left-0 w-full p-5 flex flex-col space-y-4 border-t border-gray-800">
          <a href="#about" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#services" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#portfolio" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#testimonials" className="hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
            Testimonials
          </a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-4 py-2 rounded-md transition-all text-center" onClick={() => setIsMenuOpen(false)}>
            Book a Session
          </a>
        </div>}
    </nav>;
};