import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../data/websiteData';

export default function TopBar() {
  return (
    <div className="bg-[#002F54] border-b border-[#003D6B] text-xs text-blue-100 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Welcome indicator */}
        <div className="flex items-center gap-2 font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300"></span>
          </span>
          <span className="text-white font-semibold">Welcome to {siteConfig.name}</span>
          <span className="text-blue-300/60 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-blue-200 font-medium">Your Trusted Growth Partner</span>
        </div>

        {/* Contact info items */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-blue-100">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-white transition"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-300" />
            <span className="truncate">{siteConfig.email}</span>
          </a>

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-white transition font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-300" />
            <span>{siteConfig.phone}</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 text-blue-200">
            <MapPin className="w-3.5 h-3.5 text-cyan-300" />
            <span>{siteConfig.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
