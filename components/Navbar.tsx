import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, SunIcon, MoonIcon, LogoIcon } from './Icons';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const location = useLocation();
  const { lang, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  const navLinks = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.portfolio, path: '/portfolio' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <LogoIcon className="w-8 h-8 text-brand-text drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-brand-text">Automora</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-brand-highlight ${
                  isActive ? 'text-brand-highlight' : 'text-brand-text/80'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          
          <div className="flex items-center gap-3 border-l border-brand-text/10 pl-6 ml-2 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-6 rtl:ml-0 rtl:mr-2">
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg bg-brand-text/5 hover:bg-brand-text/10 text-xs font-bold text-brand-text/80 hover:text-brand-text transition-colors border border-brand-text/10"
              aria-label="Switch language"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-brand-text/5 hover:bg-brand-text/10 text-brand-text/80 hover:text-brand-text transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
            <NavLink
              to="/contact"
              className="px-5 py-2.5 rounded-xl bg-brand-text/10 hover:bg-brand-text/20 border border-brand-text/10 text-sm font-medium transition-all hover:scale-105"
            >
              {t.nav.getStarted}
            </NavLink>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 rounded-lg text-xs font-bold text-brand-text/80"
          >
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-brand-text/80 hover:text-brand-text transition-colors"
          >
            {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
          <button 
            className="p-2 text-brand-text/80 hover:text-brand-text transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t-0 rounded-b-2xl shadow-2xl p-6 flex flex-col gap-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-lg font-medium p-2 rounded-lg transition-colors ${
                  isActive ? 'bg-brand-accent/20 text-brand-highlight' : 'text-brand-text/80 hover:bg-brand-text/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;