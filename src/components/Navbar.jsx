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
        ? 'bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#E3DFD5] shadow-sm' 
        : 'bg-[#F7F4EC] border-b border-[#E3DFD5]/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="venturerise home"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-[#E3DFD5] bg-[#F7F4EC] flex items-center justify-center group-hover:border-[#1554B8] transition-colors">
              <img src="/favicon.svg" alt="venturerise logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#14243B] lowercase font-sans">
                venturerise
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-semibold text-[#526175]">
                Digital & Tech Partner
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                    isActive 
                      ? 'text-[#1554B8] bg-[#EAF1FC] font-bold' 
                      : 'text-[#526175] hover:text-[#1554B8] hover:bg-[#EAF1FC]/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1554B8] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('/contact')}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#1554B8] hover:bg-[#104396]"
            >
              Discuss Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#14243B] hover:bg-[#EAF1FC] transition"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F4EC] border-b border-[#E3DFD5] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.path;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive 
                      ? 'bg-[#EAF1FC] text-[#1554B8] font-bold border border-[#D5E4F9]' 
                      : 'text-[#526175] hover:bg-[#EAF1FC]/40 hover:text-[#14243B]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#1554B8]" />}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#E3DFD5] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('/contact');
              }}
              className="w-full py-3 rounded-xl text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
