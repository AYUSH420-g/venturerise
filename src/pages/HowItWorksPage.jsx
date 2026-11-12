import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { processSteps, faqList } from '../data/websiteData';

export default function HowItWorksPage({ setCurrentRoute }) {
  const [openFaq, setOpenFaq] = useState(0); // first item open by default

  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      
      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 border-b border-slate-200/80 bg-white overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1EEF8] border border-[#C2DCF1] text-[#005A9C] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#005A9C]"></span>
            <span>HOW IT WORKS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            How We Turn <br />
            <span className="bg-gradient-to-r from-[#005A9C] via-[#0072C6] to-[#004A82] bg-clip-text text-transparent">
              Ideas Into Growth.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            A simple, transparent and results-driven process designed to take your business from strategy to measurable digital growth.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => nav('/contact')}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('process-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-700 hover:text-slate-900 bg-[#F1F5F9] hover:bg-slate-200 border border-slate-200 transition"
            >
              See Our Process
            </button>
          </div>
        </div>
      </section>

      {/* OUR APPROACH PHILOSOPHY */}
      <section className="py-16 bg-[#F8F9FA] border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Simple Process. Serious Results.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We keep our process simple and transparent. From the first conversation to ongoing optimization, you always know what we're working on and why we're doing it.
          </p>
        </div>
      </section>

      {/* DETAILED 6-STEP PROCESS ROADMAP */}
      <section id="process-section" className="py-20 lg:py-24 border-b border-slate-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              From Discovery to Growth.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every successful project starts with a clear process. Here's how we turn your goals into measurable digital results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 sm:p-8 rounded-3xl bg-[#F8F9FA] border border-slate-200/90 hover:border-[#005A9C] shadow-sm hover:shadow-xl transition flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E1EEF8] text-[#005A9C] border border-[#C2DCF1] uppercase tracking-widest">
                      {step.label}
                    </span>
                    <span className="text-3xl font-black text-slate-300 font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#005A9C] transition">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-[#005A9C] mb-3">
                    {step.subtitle}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-slate-200">
                    {step.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs text-slate-600 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#005A9C] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA] border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear answers to the most common questions about our campaigns and process.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition border ${
                    isOpen 
                      ? 'bg-white border-[#005A9C] shadow-md ring-1 ring-[#005A9C]/20' 
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#005A9C] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Have a Different Question?</h4>
            <p className="text-xs text-slate-600 mb-4">
              We're here to help clarify any details about your upcoming campaign.
            </p>
            <button
              onClick={() => nav('/contact')}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82] transition shadow-md shadow-[#005A9C]/25"
            >
              Contact Our Growth Team
            </button>
          </div>

        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="py-16 bg-white text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Let's Build Your Growth Journey.
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Tell us where your business is today. We'll help you figure out where to go next.
        </p>
        <button
          onClick={() => nav('/contact')}
          className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 transition inline-flex items-center gap-2"
        >
          <span>Get Started Today</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}
