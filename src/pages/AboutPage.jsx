import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Globe, Sparkles, Layers } from 'lucide-react';
import { siteConfig, factualCapabilities, processStepsSummary } from '../data/websiteData';

export default function AboutPage({ setCurrentRoute }) {
  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#526175]">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 border-b border-[#E3DFD5] bg-[#F7F4EC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1FC] border border-[#D5E4F9] text-[#1554B8] text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#1554B8]"></span>
                <span>ABOUT VENTURERISE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14243B] tracking-tight leading-[1.15]">
                Your Ambition. <br />
                <span className="text-[#1554B8]">Our Digital Expertise.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#526175] max-w-xl leading-relaxed">
                venturerise helps small businesses build their online presence, reach relevant customers, and simplify everyday work through marketing, websites, and technology.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => nav('/contact')}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => nav('/services')}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-[#14243B] hover:text-[#1554B8] bg-white hover:bg-[#EAF1FC]/40 border border-[#E3DFD5] shadow-xs transition"
                >
                  Explore Services
                </button>
              </div>
            </div>

            {/* Right Card: Practical Partner Container */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white border border-[#E3DFD5] p-8 shadow-xs">
                <div className="w-14 h-14 rounded-2xl bg-[#1554B8] text-white flex items-center justify-center font-extrabold text-xl shadow-xs mb-6">
                  vr
                </div>
                <h3 className="text-2xl font-black text-[#14243B] mb-1">
                  Practical Digital Partner
                </h3>
                <p className="text-sm font-semibold text-[#1554B8] mb-6">
                  Marketing • Websites • AI Automation • Tech
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#E3DFD5]">
                    <span className="text-xs text-[#526175] font-semibold block">Focus</span>
                    <span className="text-xl font-black text-[#14243B] mt-1 block">Small Business</span>
                    <span className="text-[11px] text-[#526175] block mt-0.5">Practical, achievable scopes</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#E3DFD5]">
                    <span className="text-xs text-[#526175] font-semibold block">Approach</span>
                    <span className="text-xl font-black text-[#1554B8] mt-1 block">Connected</span>
                    <span className="text-[11px] text-[#526175] block mt-0.5">Tools working together</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E3DFD5] flex items-center justify-between text-xs text-[#526175]">
                  <span>Plain language communication</span>
                  <span className="text-[#14243B] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#1554B8]" /> Honest Scope
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="py-20 lg:py-24 border-b border-[#E3DFD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight leading-tight">
                A Digital Partner for Your Next Step.
              </h2>

              <p className="text-sm sm:text-base text-[#526175] leading-relaxed">
                Running a small business means balancing many priorities. Your digital tools should make that work easier.
              </p>

              <p className="text-sm sm:text-base text-[#526175] leading-relaxed">
                At venturerise, we connect digital marketing, website development, AI automation, and practical tech solutions around your business needs.
              </p>

              <p className="text-sm sm:text-base text-[#526175] leading-relaxed">
                We start by understanding what you want to achieve, then help you choose a clear and manageable way forward.
              </p>

              {/* 4 Values Cards */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#14243B] bg-[#F7F4EC] p-3.5 rounded-xl border border-[#E3DFD5]">
                  <CheckCircle2 className="w-4 h-4 text-[#1554B8] shrink-0" />
                  <span>Practical Thinking</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#14243B] bg-[#F7F4EC] p-3.5 rounded-xl border border-[#E3DFD5]">
                  <CheckCircle2 className="w-4 h-4 text-[#1554B8] shrink-0" />
                  <span>Clear Communication</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#14243B] bg-[#F7F4EC] p-3.5 rounded-xl border border-[#E3DFD5]">
                  <CheckCircle2 className="w-4 h-4 text-[#1554B8] shrink-0" />
                  <span>Thoughtful Execution</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#14243B] bg-[#F7F4EC] p-3.5 rounded-xl border border-[#E3DFD5]">
                  <CheckCircle2 className="w-4 h-4 text-[#1554B8] shrink-0" />
                  <span>Ongoing Improvement</span>
                </div>
              </div>
            </div>

            {/* Right side factual capability matrix (replacing unsupported stats) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {factualCapabilities.map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5] text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#EAF1FC] border border-[#D5E4F9] flex items-center justify-center text-[#1554B8] mb-3">
                      {item.icon === 'Target' && <Target className="w-5 h-5" />}
                      {item.icon === 'Globe' && <Globe className="w-5 h-5" />}
                      {item.icon === 'Sparkles' && <Sparkles className="w-5 h-5" />}
                      {item.icon === 'Layers' && <Layers className="w-5 h-5" />}
                    </div>
                    <h4 className="text-base font-bold text-[#14243B] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#526175] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 bg-[#F7F4EC] border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              PURPOSE & DIRECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-[#E3DFD5] space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF1FC] text-[#1554B8] border border-[#D5E4F9] flex items-center justify-center font-black text-xl">
                01
              </div>
              <h3 className="text-2xl font-black text-[#14243B]">Our Mission</h3>
              <p className="text-sm text-[#526175] leading-relaxed">
                To make useful digital marketing and technology solutions more accessible to small businesses.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E3DFD5] space-y-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF1FC] text-[#1554B8] border border-[#D5E4F9] flex items-center justify-center font-black text-xl">
                02
              </div>
              <h3 className="text-2xl font-black text-[#14243B]">Our Vision</h3>
              <p className="text-sm text-[#526175] leading-relaxed">
                To become a trusted partner for small businesses as they build, improve, and grow their digital capabilities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS SUMMARY (4 PHASES) */}
      <section className="py-20 lg:py-24 border-b border-[#E3DFD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              A Structured, Manageable Approach.
            </h2>
            <p className="text-sm text-[#526175] leading-relaxed">
              We define clear scopes, agree on deliverables, and keep you informed throughout the work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStepsSummary.map((step, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5] shadow-xs">
                <span className="text-3xl font-black text-[#1554B8]/30 font-mono block mb-2">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold text-[#14243B] mb-2">{step.title}</h4>
                <p className="text-xs text-[#526175] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => nav('/how-it-works')}
              className="text-xs font-bold text-[#1554B8] hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore full 6-step workflow & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 bg-[#F7F4EC] text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-[#14243B]">
          Let’s Take Your Next Step Together.
        </h3>
        <p className="text-xs sm:text-sm text-[#526175] max-w-lg mx-auto leading-relaxed">
          Whether you need a new website, help reaching customers, or simpler tools to manage work—we are here to help.
        </p>
        <div className="pt-2">
          <button
            onClick={() => nav('/contact')}
            className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}
