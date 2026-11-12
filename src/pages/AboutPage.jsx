import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Target, ShieldCheck, TrendingUp, Users, Award, MapPin } from 'lucide-react';
import { siteConfig, statsData, processSteps } from '../data/websiteData';

export default function AboutPage({ setCurrentRoute }) {
  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 border-b border-slate-200/80 bg-white overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[300px] bg-[#005A9C]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1EEF8] border border-[#C2DCF1] text-[#005A9C] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#005A9C]"></span>
                <span>ABOUT DIGITAL RISE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Behind Every Lead <br />
                <span className="bg-gradient-to-r from-[#005A9C] via-[#0284C7] to-[#004A82] bg-clip-text text-transparent">
                  Is A Strategy.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                DIGITAL RISE is a performance-driven digital agency helping businesses attract the right audience, generate quality leads and build sustainable digital growth.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => nav('/contact')}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/30 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>Let's Grow Together</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => nav('/services')}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-700 hover:text-[#005A9C] bg-slate-100 hover:bg-[#E1EEF8] border border-slate-200 transition"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* DR+ Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-[#F8F9FA] border border-slate-200 p-8 shadow-xl">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#005A9C] to-[#0284C7] text-white flex items-center justify-center font-black text-3xl shadow-lg shadow-[#005A9C]/30 mb-6">
                  DR+
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-1">
                  Built Around Growth
                </h3>
                <p className="text-sm font-semibold text-[#005A9C] mb-6">
                  Strategy • Creativity • Performance
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-semibold block">Client Growth</span>
                    <span className="text-3xl font-black text-emerald-600">+84%</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Average ROI improvement</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-xs text-slate-500 font-semibold block">360° Scope</span>
                    <span className="text-3xl font-black text-[#005A9C]">Digital</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Full-funnel digital growth</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#005A9C]" /> Bhopal, Madhya Pradesh
                  </span>
                  <span className="text-slate-800 font-semibold">Serving Pan-India</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-20 lg:py-24 border-b border-slate-200/80 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                More Than An Agency. <br />
                <span className="text-[#005A9C]">Your Growth Partner.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At DIGITAL RISE, we believe digital marketing should do more than create visibility — it should create opportunities.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We bring together strategy, creativity, technology and data to help businesses build stronger digital experiences and generate meaningful results.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From reaching the right audience to converting attention into action, we focus on every important step of your digital growth journey.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#005A9C] shrink-0" />
                  <span>Strategy Driven</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#005A9C] shrink-0" />
                  <span>Performance Focused</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#005A9C] shrink-0" />
                  <span>Transparent Process</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#005A9C] shrink-0" />
                  <span>Long-Term Growth</span>
                </div>
              </div>
            </div>

            {/* Right side stats matrix */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-5">
                {statsData.map((stat, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 text-center hover:border-[#95C2E6] shadow-sm transition">
                    <p className="text-3xl sm:text-4xl font-black text-slate-900">{stat.value}</p>
                    <p className="text-sm font-bold text-slate-700 mt-1">{stat.label}</p>
                    <span className="text-[11px] text-[#005A9C] font-semibold block mt-1">{stat.change}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT DRIVES US - MISSION & VISION */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              WHAT DRIVES US
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Built With Purpose. Driven By Growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E1EEF8] text-[#005A9C] border border-[#C2DCF1] flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Mission</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To help businesses grow smarter, faster and more sustainably through result-driven digital marketing and transparent lead generation frameworks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8F9FA] border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E1EEF8] text-[#005A9C] border border-[#C2DCF1] flex items-center justify-center font-black text-xl">
                02
              </div>
              <h3 className="text-2xl font-black text-slate-900">Our Vision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To become a trusted growth partner for ambitious businesses by combining powerful strategies, creative thinking and measurable performance across India.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* OUR PROCESS (4 PHASES) */}
      <section className="py-20 lg:py-28 border-b border-slate-200/80 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              How We Turn Ideas Into Growth.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              A simple, transparent process designed to turn business goals into practical digital strategies and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.slice(0, 4).map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition">
                <span className="text-3xl font-black text-[#005A9C]/30 font-mono block mb-2">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
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

        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-16 bg-white text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Ready to Write Your Growth Story?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Contact our team today to discuss your business requirements and receive a personalized growth proposal.
        </p>
        <button
          onClick={() => nav('/contact')}
          className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/30 transition transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
        >
          <span>Work With Us</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}
