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
    <div className="min-h-screen bg-[#F7F4EC] text-[#526175]">
      
      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 border-b border-[#E3DFD5] bg-[#F7F4EC] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF1FC] border border-[#D5E4F9] text-[#1554B8] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1554B8]"></span>
            <span>HOW IT WORKS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14243B] tracking-tight leading-[1.15]">
            A Clear Process. <br />
            <span className="text-[#1554B8]">
              A Practical Way Forward.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#526175] mt-4 max-w-2xl mx-auto leading-relaxed">
            From the first conversation to launch and improvement, we keep the work focused on your business goals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => nav('/contact')}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('process-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-[#14243B] hover:text-[#1554B8] bg-white hover:bg-[#EAF1FC]/40 border border-[#E3DFD5] shadow-xs transition"
            >
              See Our 6 Steps
            </button>
          </div>
        </div>
      </section>

      {/* OUR APPROACH PHILOSOPHY */}
      <section className="py-16 bg-white border-b border-[#E3DFD5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
            Clear Steps. Manageable Scopes.
          </h2>
          <p className="text-sm sm:text-base text-[#526175] max-w-3xl mx-auto leading-relaxed">
            We avoid unnecessary jargon and overly complex retainers. From day one, you know what we are building, what is required, and what the milestones look like.
          </p>
        </div>
      </section>

      {/* DETAILED 6-STEP PROCESS ROADMAP */}
      <section id="process-section" className="py-20 lg:py-24 border-b border-[#E3DFD5] bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              THE 6 STEPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              From Understanding to Improvement.
            </h2>
            <p className="text-sm text-[#526175] leading-relaxed">
              Every project follows these structured phases to ensure clarity, quality, and consistent progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E3DFD5] hover:border-[#1554B8]/40 shadow-xs hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#EAF1FC] text-[#1554B8] border border-[#D5E4F9] uppercase tracking-wider">
                      {step.label}
                    </span>
                    <span className="text-3xl font-black text-[#E3DFD5] font-mono">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14243B] mb-1">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-semibold text-[#1554B8] mb-3">
                    {step.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#526175] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2 pt-4 border-t border-[#E3DFD5]">
                    {step.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs text-[#526175] flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1554B8] shrink-0" />
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
      <section className="py-20 lg:py-24 bg-white border-b border-[#E3DFD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-sm text-[#526175] leading-relaxed">
              Clear answers about our services, working arrangements, and expectations.
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
                      ? 'bg-[#F7F4EC] border-[#1554B8]/40 shadow-xs' 
                      : 'bg-white border-[#E3DFD5] hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-sm sm:text-base text-[#14243B]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1554B8] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#526175] leading-relaxed border-t border-[#E3DFD5]/60 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center p-8 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5]">
            <h4 className="text-lg font-bold text-[#14243B] mb-2">Have a Question About Your Specific Setup?</h4>
            <p className="text-xs text-[#526175] mb-4">
              We are happy to answer any questions about your current website, tools, or marketing plans.
            </p>
            <button
              onClick={() => nav('/contact')}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#1554B8] hover:bg-[#104396] transition shadow-xs"
            >
              Ask a Question
            </button>
          </div>

        </div>
      </section>

      {/* BOTTOM BANNER */}
      <section className="py-16 bg-[#F7F4EC] text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-[#14243B]">
          Let’s Discuss Your Next Step.
        </h3>
        <p className="text-xs sm:text-sm text-[#526175] max-w-md mx-auto leading-relaxed">
          Tell us where your business is today, and we will help you identify the most practical way forward.
        </p>
        <div className="pt-2">
          <button
            onClick={() => nav('/contact')}
            className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm transition inline-flex items-center gap-2"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

    </div>
  );
}
