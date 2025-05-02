import React from 'react';
import { InstagramIcon, YoutubeIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-black py-12 px-6 md:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo and branding */}
          <div className="mb-6 md:mb-0 flex items-center space-x-4">
            <img src="/475372778_583728951301744_3888486174212790513_n.jpg" alt="Jaliya Sasanka Studio Logo" className="h-12 w-auto" />
            <div>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-400">
                JALIYA SASANKA
              </div>
              <p className="text-gray-400 mt-2">Music Production Studio</p>
            </div>
          </div>
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-purple-900 transition-colors">
              <InstagramIcon size={20} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-purple-900 transition-colors">
              <YoutubeIcon size={20} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-purple-900 transition-colors">
              <FacebookIcon size={20} className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-purple-900 transition-colors">
              <TwitterIcon size={20} className="text-white" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Jaliya Sasanka Music Production
              Studio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                Studio Policies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};