import React from 'react';
import { 
  ArrowRight, ArrowUpRight, CheckCircle2, 
  Target, Globe, Sparkles, Layers, ShieldCheck, 
  HelpCircle, MessageSquare 
} from 'lucide-react';
import { 
  siteConfig, heroContent, factualCapabilities, 
  whatWeDoCards, whyVenturerise, processStepsSummary, 
  howWeHelpExamples 
} from '../data/websiteData';

export default function HomePage({ setCurrentRoute }) {
  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'digital-marketing':
        return <Target className="w-6 h-6 text-[#1554B8]" />;
      case 'website-dev':
        return <Globe className="w-6 h-6 text-[#1554B8]" />;
      case 'ai-automation':
        return <Sparkles className="w-6 h-6 text-[#1554B8]" />;
      case 'tech-solutions':
      default:
        return <Layers className="w-6 h-6 text-[#1554B8]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#526175] overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E3DFD5] bg-[#F7F4EC]">
        {/* Subtle pale ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#EAF1FC]/80 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF1FC] border border-[#D5E4F9] text-[#1554B8] text-xs font-bold uppercase tracking-wider shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#1554B8]"></span>
                <span>{heroContent.eyebrow}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-[#14243B] tracking-tight leading-[1.15]">
                Build Your Presence. <br />
                <span className="text-[#1554B8]">Grow Your Reach.</span> <br />
                Simplify Your Work.
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#526175] max-w-xl leading-relaxed">
                {heroContent.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => nav('/contact')}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm hover:shadow transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                >
                  <span>{heroContent.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => nav('/services')}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-[#14243B] hover:text-[#1554B8] bg-white hover:bg-[#EAF1FC]/50 border border-[#E3DFD5] shadow-xs transition flex items-center gap-2"
                >
                  <span>{heroContent.secondaryCta}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#526175]" />
                </button>
              </div>

              {/* Supporting Line */}
              <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#526175]">
                <CheckCircle2 className="w-4 h-4 text-[#1554B8] shrink-0" />
                <span>{heroContent.supportingLine}</span>
              </div>

            </div>

            {/* Right Column: Connected Digital Solutions Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-white border border-[#E3DFD5] p-6 sm:p-7 shadow-md">
                
                {/* Header bar of card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E3DFD5]/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-[#1554B8]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#6496E8]"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                    <span className="text-xs font-bold text-[#14243B] ml-2 tracking-wide">
                      Connected Digital Solutions
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#EAF1FC] text-[#1554B8] border border-[#D5E4F9] font-semibold">
                    Core Capabilities
                  </span>
                </div>

                {/* 3 Practical Capability Spaces */}
                <div className="grid grid-cols-3 gap-3 my-5">
                  <div className="p-3.5 rounded-2xl bg-[#F7F4EC] border border-[#E3DFD5] text-center">
                    <span className="text-[10px] font-bold text-[#526175] uppercase tracking-wider block mb-1">
                      STEP 01
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#14243B] block">
                      Attract Customers
                    </span>
                    <span className="text-[10px] text-[#1554B8] font-medium block mt-1">
                      Targeted Reach
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#EAF1FC] border border-[#D5E4F9] text-center">
                    <span className="text-[10px] font-bold text-[#1554B8] uppercase tracking-wider block mb-1">
                      STEP 02
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#14243B] block">
                      Capture Enquiries
                    </span>
                    <span className="text-[10px] text-[#1554B8] font-medium block mt-1">
                      Clear Websites
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#F7F4EC] border border-[#E3DFD5] text-center">
                    <span className="text-[10px] font-bold text-[#526175] uppercase tracking-wider block mb-1">
                      STEP 03
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#14243B] block">
                      Simplify Follow-ups
                    </span>
                    <span className="text-[10px] text-[#1554B8] font-medium block mt-1">
                      AI Automation
                    </span>
                  </div>
                </div>

                {/* Illustrative Connected Workflow Chart */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#14243B]">Connected Workflow Progression</span>
                    <span className="text-[11px] font-medium text-[#526175]">Illustrative model</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2 items-end h-24 pt-4 px-2 bg-[#F7F4EC] rounded-xl border border-[#E3DFD5]">
                    <div className="bg-[#D5E4F9] rounded-t h-[35%]"></div>
                    <div className="bg-[#D5E4F9] rounded-t h-[45%]"></div>
                    <div className="bg-[#ABC7F4] rounded-t h-[55%]"></div>
                    <div className="bg-[#ABC7F4] rounded-t h-[65%]"></div>
                    <div className="bg-[#6496E8] rounded-t h-[75%]"></div>
                    <div className="bg-[#2A6FDC] rounded-t h-[85%]"></div>
                    <div className="bg-[#1554B8] rounded-t h-[95%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#526175] px-2">
                    <span>Audit</span>
                    <span>Scope</span>
                    <span>Design</span>
                    <span>Build</span>
                    <span>Connect</span>
                    <span>Launch</span>
                    <span className="font-bold text-[#1554B8]">Review</span>
                  </div>
                </div>

                {/* Quick sub-bar */}
                <div className="mt-5 pt-4 border-t border-[#E3DFD5]/80 flex items-center justify-between text-xs text-[#526175]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1554B8]" />
                    <span>Clear scope & transparent communication</span>
                  </span>
                  <button onClick={() => nav('/services')} className="font-bold text-[#1554B8] hover:underline">
                    View Services →
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FACTUAL CAPABILITY CARDS (REPLACING UNVERIFIED STATS) */}
      <section className="py-12 bg-white border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {factualCapabilities.map((item, i) => (
              <div 
                key={i} 
                className="p-5 rounded-2xl bg-[#F7F4EC] border border-[#E3DFD5] hover:border-[#1554B8]/40 transition text-left"
              >
                <div className="w-9 h-9 rounded-xl bg-[#EAF1FC] border border-[#D5E4F9] flex items-center justify-center text-[#1554B8] mb-3">
                  {item.icon === 'Target' && <Target className="w-4 h-4" />}
                  {item.icon === 'Globe' && <Globe className="w-4 h-4" />}
                  {item.icon === 'Sparkles' && <Sparkles className="w-4 h-4" />}
                  {item.icon === 'Layers' && <Layers className="w-4 h-4" />}
                </div>
                <h3 className="text-base font-bold text-[#14243B] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#526175] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR SERVICE CARDS */}
      <section className="py-20 lg:py-24 relative bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              Practical Solutions for Small Businesses.
            </h2>
            <p className="text-sm sm:text-base text-[#526175] leading-relaxed">
              We connect digital marketing, websites, and technology around your priorities to help your business make progress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoCards.map((card) => (
              <div 
                key={card.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E3DFD5] hover:border-[#1554B8]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF1FC] border border-[#D5E4F9] flex items-center justify-center mb-5">
                    {getServiceIcon(card.id)}
                  </div>

                  <h3 className="text-lg font-bold text-[#14243B] mb-2 leading-snug">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526175] leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#526175] flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1554B8] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => nav('/services')}
                  className="text-xs font-bold text-[#1554B8] hover:text-[#104396] flex items-center gap-1.5 transition pt-4 border-t border-[#E3DFD5]"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY VENTURERISE */}
      <section className="py-20 bg-white border-y border-[#E3DFD5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
                WHY VENTURERISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight leading-tight">
                {whyVenturerise.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#526175] leading-relaxed">
                {whyVenturerise.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {whyVenturerise.cards.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#E3DFD5]">
                    <h4 className="text-sm font-bold text-[#14243B] mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1554B8]"></span>
                      {feat.title}
                    </h4>
                    <p className="text-xs text-[#526175] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => nav('/about')}
                  className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[#1554B8] hover:bg-[#104396] transition shadow-sm flex items-center gap-2"
                >
                  <span>Learn About Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right container: Practical Partner Showcase */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5] p-8 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#1554B8] text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-sm">
                  vr
                </div>
                <h3 className="text-2xl font-black text-[#14243B] mb-2">
                  Built Around Your Real Work
                </h3>
                <p className="text-sm text-[#526175] mb-6">
                  Marketing • Websites • AI Automation • Tech Solutions
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white border border-[#E3DFD5]">
                    <span className="text-xs text-[#1554B8] font-bold block">Plain English</span>
                    <p className="text-xs text-[#526175] mt-1">Clear explanations without confusing jargon or buzzwords.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-[#E3DFD5]">
                    <span className="text-xs text-[#1554B8] font-bold block">Sensible Budgets</span>
                    <p className="text-xs text-[#526175] mt-1">Practical scopes tailored to small business resources.</p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#E3DFD5] flex items-center justify-between text-xs text-[#526175]">
                  <span>Serving Small Businesses Across India</span>
                  <span className="text-[#14243B] font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#1554B8]" /> Practical Delivery
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PROCESS PREVIEW (4 STEPS) */}
      <section className="py-20 lg:py-24 relative bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              A Clear, Step-by-Step Process.
            </h2>
            <p className="text-sm sm:text-base text-[#526175] leading-relaxed">
              We keep the work structured and transparent from the initial conversation to launch and review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStepsSummary.map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-3xl bg-white border border-[#E3DFD5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-[#1554B8]/30 block mb-3 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#14243B] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#526175] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => nav('/how-it-works')}
              className="px-6 py-3 rounded-full text-xs font-bold text-[#14243B] hover:text-[#1554B8] bg-white hover:bg-[#EAF1FC]/40 border border-[#E3DFD5] shadow-xs transition inline-flex items-center gap-2"
            >
              <span>See Full 6-Step Process & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. CONSULTATION SECTION */}
      <section className="py-16 bg-white border-y border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1554B8] uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" /> Consultation
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#14243B]">
                Not Sure Where to Start?
              </h3>
              <p className="text-xs sm:text-sm text-[#526175] max-w-xl">
                Tell us what you want to improve—your online presence, customer enquiries, or everyday operations. We’ll help you identify a practical next step.
              </p>
            </div>

            <button
              onClick={() => nav('/contact')}
              className="px-8 py-4 rounded-full text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm transition transform hover:-translate-y-0.5 shrink-0 flex items-center gap-2"
            >
              <span>Discuss Your Goals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. HOW WE CAN HELP YOUR BUSINESS (EXAMPLES REPLACING FAKE TESTIMONIALS) */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC] border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              PRACTICAL APPLICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              How We Can Help Your Business.
            </h2>
            <p className="text-sm sm:text-base text-[#526175] leading-relaxed">
              Common ways small businesses connect marketing, websites, and technology to simplify work and reach customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howWeHelpExamples.map((item, idx) => (
              <div 
                key={idx} 
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E3DFD5] flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#1554B8] uppercase tracking-wider block mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#14243B] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526175] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#E3DFD5] flex items-center justify-between text-xs font-semibold text-[#1554B8]">
                  <span>Explore this approach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. CLOSING CTA */}
      <section className="py-20 bg-white text-center space-y-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#14243B] tracking-tight">
            Let’s Build Your Business’s Next Step.
          </h2>
          <p className="text-sm sm:text-base text-[#526175] max-w-2xl mx-auto leading-relaxed">
            A stronger website, more focused marketing, or simpler workflows—start with what matters most to your business.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => nav('/contact')}
              className="px-8 py-4 rounded-full text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => nav('/services')}
              className="px-8 py-4 rounded-full text-sm font-bold text-[#14243B] hover:text-[#1554B8] bg-[#F7F4EC] hover:bg-[#EAF1FC]/50 border border-[#E3DFD5] shadow-xs transition"
            >
              Explore Services
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-[#526175]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1554B8]" /> Plain language explanations
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1554B8]" /> Practical project scope
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#1554B8]" /> Direct communication
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
