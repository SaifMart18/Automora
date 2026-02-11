import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-text/10 bg-brand-primary/50 backdrop-blur-sm mt-auto z-10">
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <LogoIcon className="w-6 h-6 text-brand-text" />
              </div>
              <span className="text-lg font-bold tracking-tight text-brand-text">Automora</span>
            </div>
            <p className="text-brand-text/60 text-sm max-w-sm">
              Pioneering the future of business through intelligent automation, predictive analytics, and bespoke AI systems.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-brand-text/60">
              <li><NavLink to="/" className="hover:text-brand-highlight transition-colors">Home</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-highlight transition-colors">Services</NavLink></li>
              <li><NavLink to="/portfolio" className="hover:text-brand-highlight transition-colors">Portfolio</NavLink></li>
              <li><NavLink to="/about" className="hover:text-brand-highlight transition-colors">About</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-text mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-brand-text/60">
              <li><a href="#" className="hover:text-brand-highlight transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-highlight transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-brand-text/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-text/40">
            &copy; {new Date().getFullYear()} Automora Studio. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="w-8 h-8 rounded-full bg-brand-text/5 flex items-center justify-center hover:bg-brand-text/10 cursor-pointer transition-colors">
              <span className="text-xs">X</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-brand-text/5 flex items-center justify-center hover:bg-brand-text/10 cursor-pointer transition-colors">
              <span className="text-xs">IN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;