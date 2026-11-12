import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2, 
  TrendingUp, Users, Target, BarChart3, Headphones, Zap, ShieldCheck, 
  Sparkles, Star, Award, Layers, Clock, PhoneCall 
} from 'lucide-react';
import { 
  siteConfig, statsData, liveDashboardData, heroSlides, 
  whatWeDoCards, whyChooseUsFeatures, processSteps, 
  testimonials, pricingPlans 
} from '../data/websiteData';

export default function HomePage({ setCurrentRoute, onOpenRegister }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80 bg-gradient-to-b from-white via-[#F8F9FA] to-white">
        {/* Soft sapphire ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#005A9C]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy & Dynamic Carousel */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1EEF8] border border-[#C2DCF1] text-[#005A9C] text-xs font-bold uppercase tracking-widest animate-fadeIn shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#005A9C] animate-pulse"></span>
                <span>{slide.badge}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15] min-h-[110px] sm:min-h-[140px]">
                {slide.title.split('. ').map((part, idx) => (
                  <span key={idx} className="block">
                    {idx === 1 ? (
                      <span className="bg-gradient-to-r from-[#005A9C] via-[#0284C7] to-[#004A82] bg-clip-text text-transparent">
                        {part}.
                      </span>
                    ) : (
                      part + (idx === 0 ? '.' : '')
                    )}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                {slide.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setCurrentRoute('/contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-lg shadow-[#005A9C]/30 hover:shadow-[#005A9C]/40 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>{slide.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setCurrentRoute('/services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-700 hover:text-[#005A9C] bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition flex items-center gap-2"
                >
                  <span>{slide.secondaryCta}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Feature highlight line */}
              <div className="pt-3 flex items-center gap-3 text-xs font-semibold text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#005A9C] shrink-0" />
                <span>{slide.highlight}</span>
              </div>

              {/* Carousel navigation controls */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-8 bg-[#005A9C]' : 'w-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1.5 ml-4">
                  <button
                    onClick={handlePrevSlide}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 shadow-sm transition"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-600 hover:text-slate-900 shadow-sm transition"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Live Campaign Performance Mockup Dashboard */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xl shadow-[#005A9C]/10 backdrop-blur-xl">
                
                {/* Header bar of card */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#005A9C]"></div>
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-mono font-bold text-slate-700 ml-2">
                      CAMPAIGN PERFORMANCE
                    </span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    LIVE STREAM
                  </span>
                </div>

                {/* Main 3 Metrics */}
                <div className="grid grid-cols-3 gap-3 my-5">
                  <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-200/80 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      TOTAL LEADS
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900">
                      {liveDashboardData.totalLeads}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                      ↑ {liveDashboardData.totalLeadsChange}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#E1EEF8]/80 border border-[#C2DCF1] text-center shadow-sm">
                    <span className="text-[10px] font-bold text-[#005A9C] uppercase tracking-wider block mb-1">
                      QUALIFIED
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-[#005A9C]">
                      {liveDashboardData.qualifiedLeads}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                      ↑ {liveDashboardData.qualifiedChange}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F8F9FA] border border-slate-200/80 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                      CONVERSION
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900">
                      {liveDashboardData.conversionRate}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                      ↑ {liveDashboardData.conversionChange}
                    </span>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Lead Volume Trajectory</span>
                    <span className="font-black text-[#005A9C]">{liveDashboardData.leadGrowth}</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 items-end h-24 pt-4 px-2 bg-[#F8F9FA] rounded-xl border border-slate-200/80">
                    <div className="bg-slate-300 rounded-t h-[40%] hover:bg-[#005A9C] transition"></div>
                    <div className="bg-slate-300 rounded-t h-[55%] hover:bg-[#005A9C] transition"></div>
                    <div className="bg-slate-300 rounded-t h-[50%] hover:bg-[#005A9C] transition"></div>
                    <div className="bg-slate-300 rounded-t h-[70%] hover:bg-[#005A9C] transition"></div>
                    <div className="bg-slate-300 rounded-t h-[65%] hover:bg-[#005A9C] transition"></div>
                    <div className="bg-slate-300 rounded-t h-[85%] hover:bg-[#005A9C] transition"></div>
                    <div className="bg-gradient-to-t from-[#005A9C] to-[#0284C7] rounded-t h-[98%] shadow-md shadow-[#005A9C]/30"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 px-2">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span className="font-bold text-[#005A9C]">Today</span>
                  </div>
                </div>

                {/* Quick sub-bar */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#005A9C]"></div>
                    <span className="text-slate-600">Active Campaigns:</span>
                    <span className="font-bold text-slate-900">{liveDashboardData.campaignsActive}</span>
                  </div>
                  <span className="text-emerald-600 font-bold">{liveDashboardData.campaignGrowth} Growth</span>
                </div>

              </div>

              {/* Floating review badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xl">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#005A9C] border-2 border-white flex items-center justify-center font-bold text-xs text-white">R</div>
                  <div className="w-8 h-8 rounded-full bg-[#0284C7] border-2 border-white flex items-center justify-center font-bold text-xs text-white">P</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center font-bold text-xs text-white">V</div>
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">500+ Verified Businesses</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER BAR */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {statsData.map((stat, i) => (
              <div key={i} className="text-center p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200/70 hover:border-[#95C2E6] transition">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-slate-700 mt-1">
                  {stat.label}
                </p>
                <span className="inline-block text-[11px] font-semibold text-[#005A9C] mt-0.5">
                  {stat.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-20 lg:py-28 relative bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Everything You Need to Grow Online.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From lead generation to performance marketing, we provide digital solutions designed around your business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoCards.map((card) => (
              <div 
                key={card.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#005A9C]/50 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E1EEF8] border border-[#C2DCF1] flex items-center justify-center text-[#005A9C] mb-5 group-hover:scale-110 group-hover:bg-[#005A9C] group-hover:text-white transition">
                    {card.id === 'lead-generation' && <Target className="w-6 h-6" />}
                    {card.id === 'quality-leads' && <CheckCircle2 className="w-6 h-6" />}
                    {card.id === 'analytics' && <BarChart3 className="w-6 h-6" />}
                    {card.id === 'support' && <Headphones className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#005A9C] transition">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#005A9C] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setCurrentRoute('/services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-[#005A9C] hover:text-[#004A82] flex items-center gap-1.5 transition pt-4 border-t border-slate-100 group-hover:border-slate-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY VENTURERISE SECTION */}
      <section className="py-20 bg-white border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
                WHY VENTURERISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Digital Marketing Built Around Growth.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We combine strategy, creativity and data to help businesses build a stronger digital presence and create meaningful opportunities online.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                {whyChooseUsFeatures.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#005A9C]"></span>
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setCurrentRoute('/about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82] transition shadow-md shadow-[#005A9C]/25 flex items-center gap-2"
                >
                  <span>Why Choose Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right illustration: DR+ Growth Card in Sapphire & Off-white */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl bg-gradient-to-br from-[#F8F9FA] to-white border border-slate-200 p-8 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-[#005A9C] text-white flex items-center justify-center font-black text-3xl shadow-lg shadow-[#005A9C]/30 mb-6">
                  DR+
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Built Around Growth
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Strategy • Creativity • Performance
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-semibold block">Client Growth</span>
                    <span className="text-2xl font-black text-emerald-600">+84%</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Average qualified pipeline</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-semibold block">Omnichannel</span>
                    <span className="text-2xl font-black text-[#005A9C]">360°</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">Full funnel execution</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span>Targeted Lead Delivery Across India</span>
                  <span className="text-slate-900 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Leads
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION PREVIEW */}
      <section className="py-20 lg:py-28 relative bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Simple Process. Focused Results.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We keep the process simple so you can focus on your business while we focus on your digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.slice(0, 4).map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition relative">
                <span className="text-4xl font-black text-[#005A9C]/20 block mb-3 font-mono">
                  {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="text-[11px] text-slate-500 space-y-1">
                  {step.items.slice(0, 3).map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#005A9C]"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => {
                setCurrentRoute('/how-it-works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full text-xs font-bold text-slate-700 hover:text-[#005A9C] bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition inline-flex items-center gap-2"
            >
              <span>See Full Workflow & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* INTERACTIVE LEAD ESTIMATOR TEASER */}
      <section className="py-16 bg-gradient-to-r from-[#E1EEF8]/60 via-white to-[#E1EEF8]/60 border-y border-[#C2DCF1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#005A9C] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Free Growth Estimate
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                How Many Leads Can You Generate This Month?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Connect with our performance marketing strategists to get a customized growth blueprint tailored to your business.
              </p>
            </div>

            <button
              onClick={() => nav('/contact')}
              className="px-8 py-4 rounded-full text-sm font-black text-white bg-[#005A9C] hover:bg-[#004A82] shadow-xl shadow-[#005A9C]/30 transition transform hover:scale-105 shrink-0 flex items-center gap-2"
            >
              <span>Get Free Strategy Call</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Trusted by Ambitious Brands Across India.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Read how businesses scaled their revenue and customer acquisition with VentureRise campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div key={idx} className="p-6 sm:p-7 rounded-3xl bg-[#F8F9FA] border border-slate-200 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-[#005A9C] font-semibold">{item.role}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{item.location}, India</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* READY TO GROW BOTTOM CTA BANNER */}
      <section className="py-20 bg-[#F8F9FA] text-center space-y-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Ready to Grow Your Business?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Let's create a digital strategy that brings your business more visibility, better opportunities and sustainable growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setCurrentRoute('/contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full text-sm font-black text-white bg-[#005A9C] hover:bg-[#004A82] shadow-xl shadow-[#005A9C]/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Start Growing</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentRoute('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-full text-sm font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition"
            >
              Explore Services
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-600">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Growth Strategy Call
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> High Closing Ratio Leads
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant WhatsApp Alerts
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
