import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/websiteData';

export default function Navbar({ currentRoute, setCurrentRoute, onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Campaigns', path: '/campaigns' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    setCurrentRoute(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-900/5' 
        : 'bg-white border-b border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#005A9C] to-[#0284C7] flex items-center justify-center text-white shadow-md shadow-[#005A9C]/30 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tighter">VR</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 flex items-center">
                VENTURE <span className="text-[#005A9C] ml-1.5 font-extrabold">RISE</span>
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-slate-500">
                Growth Partner
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive 
                      ? 'text-[#005A9C] bg-[#E1EEF8]/80 font-bold' 
                      : 'text-slate-600 hover:text-[#005A9C] hover:bg-[#F0F6FB]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#005A9C] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:text-[#005A9C] bg-[#F1F3F5] hover:bg-[#E1EEF8] border border-slate-200 transition flex items-center gap-1.5 shadow-sm"
            >
              Get Free Consultation
            </button>

            <button
              onClick={onOpenRegister}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 hover:shadow-[#005A9C]/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82]"
            >
              Register
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#E1EEF8] text-[#005A9C] font-bold border border-[#C2DCF1]' 
                      : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#005A9C]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('/contact');
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-[#E1EEF8] border border-slate-200 flex items-center justify-center gap-2"
            >
              <span>Get Free Consultation</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] flex items-center justify-center gap-2 shadow-md shadow-[#005A9C]/30"
            >
              <span>Register Now on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
