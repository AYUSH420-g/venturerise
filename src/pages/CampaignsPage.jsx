import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Target, Users, BarChart2 } from 'lucide-react';
import { campaignShowcase } from '../data/websiteData';

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
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      
      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 border-b border-slate-200/80 bg-white overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1EEF8] border border-[#C2DCF1] text-[#005A9C] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#005A9C]"></span>
            <span>GROWTH CAMPAIGNS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Campaigns Built <br />
            <span className="bg-gradient-to-r from-[#005A9C] via-[#0072C6] to-[#004A82] bg-clip-text text-transparent">
              For Real Business Growth.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            We create targeted digital campaigns designed around your audience, business goals and revenue opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => nav('/contact')}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Start a Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('case-studies');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-700 hover:text-slate-900 bg-[#F1F5F9] hover:bg-slate-200 border border-slate-200 transition"
            >
              Explore Campaigns
            </button>
          </div>
        </div>
      </section>

      {/* OVERALL PERFORMANCE METRICS */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200/90 shadow-sm">
              <p className="text-3xl sm:text-4xl font-black text-slate-900">50+</p>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Live Campaigns</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200/90 shadow-sm">
              <p className="text-3xl sm:text-4xl font-black text-[#005A9C]">10K+</p>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Leads Delivered</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200/90 shadow-sm">
              <p className="text-3xl sm:text-4xl font-black text-emerald-600">3.8x</p>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Average ROI</p>
            </div>
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200/90 shadow-sm">
              <p className="text-3xl sm:text-4xl font-black text-slate-900">95%</p>
              <p className="text-xs text-slate-500 mt-1 uppercase font-bold tracking-wider">Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES / CAMPAIGNS */}
      <section id="case-studies" className="py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              CAMPAIGN TYPES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The Right Campaign for Every Goal.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
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
                    ? 'bg-[#005A9C] text-white shadow-md shadow-[#005A9C]/25'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-sm'
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
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#005A9C] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E1EEF8] text-[#005A9C] border border-[#C2DCF1]">
                      {item.category}
                    </span>
                    <span className="text-xs font-black text-emerald-600 font-mono">
                      {item.growth}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#005A9C] transition">
                    {item.title}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-200 my-4 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-semibold">Outcome:</span>
                    <span className="text-sm font-black text-slate-900">{item.metric}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#F8F9FA] border border-slate-200 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => nav('/contact')}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-[#005A9C] hover:text-white bg-[#E1EEF8]/60 hover:bg-[#005A9C] border border-[#C2DCF1]/60 hover:border-[#005A9C] transition flex items-center justify-center gap-1.5"
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
      <section className="py-16 bg-white border-t border-slate-200 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Want Similar Results for Your Business?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Our growth team will review your target audience and design an actionable multi-channel acquisition strategy.
        </p>
        <button
          onClick={() => nav('/contact')}
          className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 transition inline-flex items-center gap-2"
        >
          <span>Plan Your Campaign</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}
