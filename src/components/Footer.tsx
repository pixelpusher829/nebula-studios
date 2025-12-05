import React from 'react';
import { Globe, Twitter, Youtube, Facebook, Linkedin, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-studio-black pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo />
              <span className="font-display font-bold text-4xl tracking-widest text-white uppercase">
                NEBULA
              </span>              
            </div>
            <p className="text-studio-light text-sm mb-6 leading-relaxed">
              Pushing the boundaries of interactive entertainment since 2010. We create worlds you'll never want to leave.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-studio-accent transition-colors">
                 <Twitter className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-studio-accent transition-colors">
                 <Linkedin className="w-4 h-4" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-studio-accent transition-colors">
                 <Youtube className="w-4 h-4" />
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider">Games</h4>
            <ul className="space-y-3 font-sans text-sm text-studio-light">
              <li className="hover:text-studio-accent cursor-pointer transition-colors">Echoes of Eternity</li>
              <li className="hover:text-studio-accent cursor-pointer transition-colors">Cyber Strike</li>
              <li className="hover:text-studio-accent cursor-pointer transition-colors">Starlight Drift</li>
              <li className="hover:text-studio-accent cursor-pointer transition-colors">Void Walker</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 font-sans text-sm text-studio-light">
              <li className="hover:text-studio-accent cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-studio-accent cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-studio-accent cursor-pointer transition-colors">News & Blog</li>
              <li className="hover:text-studio-accent cursor-pointer transition-colors">Press Kit</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-studio-light text-sm mb-4">Subscribe for beta access and studio news.</p>
            <div className="flex">
               <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-l px-4 py-2 w-full text-white text-sm focus:outline-none focus:border-studio-accent" />
               <button className="bg-studio-accent text-white px-4 py-2 rounded-r hover:bg-orange-600 transition-colors">
                 <Mail className="w-4 h-4" />
               </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-studio-light font-sans">
          <p>&copy; 2024 NEBULA STUDIOS INC. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">COOKIE SETTINGS</a>
          </div>
        </div>
      </div>
    </footer>
  );
};