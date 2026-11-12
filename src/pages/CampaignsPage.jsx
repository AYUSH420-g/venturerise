import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, TrendingUp, Target, Users, BarChart2, Star, CheckCircle2 } from 'lucide-react';
import { campaignShowcase, siteConfig } from '../data/websiteData';

export default function CampaignsPage({ setCurrentRoute }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['All', 'Real Estate', 'Education', 'Healthcare', 'B2B SaaS', 'E-Commerce', 'Finance'];

  const filtered = activeFilter === 'All'
    ? campaignShowcase
    : campaignShowcase.filter((c) => c.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>DIGITAL CAMPAIGNS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Campaigns Built <br />
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              For Growth.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            We create targeted digital campaigns designed around your audience, business goals and growth opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => nav('/contact')}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-xl shadow-rose-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Start a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('case-studies');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition"
            >
              Explore Campaigns
            </button>
          </div>
        </div>
      </section>

      {/* OVERALL PERFORMANCE METRICS */}
      <section className="py-12 bg-[#080B12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="text-3xl sm:text-4xl font-black text-white">50+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Live Campaigns</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="text-3xl sm:text-4xl font-black text-rose-400">10K+</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Leads Delivered</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="text-3xl sm:text-4xl font-black text-emerald-400">3.8x</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Average ROI</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
              <p className="text-3xl sm:text-4xl font-black text-white">95%</p>
              <p className="text-xs text-slate-400 mt-1 uppercase font-semibold">Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES / CAMPAIGNS */}
      <section id="case-studies" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
              CAMPAIGN TYPES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The Right Campaign for Every Goal.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Every business has a different goal. We build campaigns around your audience, market and desired outcome.
            </p>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                  activeFilter === cat
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-600/10 text-rose-400 border border-rose-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs font-black text-emerald-400 font-mono">
                      {item.growth}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition">
                    {item.title}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 my-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-semibold">Outcome:</span>
                    <span className="text-sm font-black text-white">{item.metric}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => nav('/contact')}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-rose-400 hover:text-white bg-slate-950 hover:bg-rose-600 border border-slate-800 hover:border-rose-600 transition flex items-center justify-center gap-1.5"
                >
                  <span>Launch Similar Campaign</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="py-16 bg-[#080B12] border-t border-slate-800 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Want Similar Results for Your Business?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
          Our growth team will review your target audience and design an actionable multi-channel acquisition strategy.
        </p>
        <button
          onClick={() => nav('/contact')}
          className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 shadow-xl shadow-rose-600/30 transition inline-flex items-center gap-2"
        >
          <span>Plan Your Campaign</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}
