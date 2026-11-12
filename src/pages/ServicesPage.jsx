import React from 'react';
import { 
  ArrowRight, CheckCircle2, Target, 
  Search, Globe, Share2, Sparkles, Layers 
} from 'lucide-react';
import { servicesDetailed, pricingPlans } from '../data/websiteData';

export default function ServicesPage({ setCurrentRoute }) {
  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'seo-local': return <Search className="w-6 h-6 text-[#1554B8]" />;
      case 'paid-marketing': return <Target className="w-6 h-6 text-[#1554B8]" />;
      case 'social-media': return <Share2 className="w-6 h-6 text-[#1554B8]" />;
      case 'website-dev': return <Globe className="w-6 h-6 text-[#1554B8]" />;
      case 'ai-automation': return <Sparkles className="w-6 h-6 text-[#1554B8]" />;
      case 'tech-solutions':
      default: return <Layers className="w-6 h-6 text-[#1554B8]" />;
    }
  };

  const handleEnquirePlan = (plan) => {
    const textMsg = encodeURIComponent(
      `Hello venturerise, I would like to discuss the ${plan.name} scope (${plan.price}). Please share details on how we can get started.`
    );
    window.open(`https://wa.me/918780788923?text=${textMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#526175]">
      
      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 border-b border-[#E3DFD5] bg-[#F7F4EC] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF1FC] border border-[#D5E4F9] text-[#1554B8] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1554B8]"></span>
            <span>OUR SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14243B] tracking-tight leading-[1.15]">
            Practical Digital Solutions <br />
            <span className="text-[#1554B8]">
              Built Around Your Business.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#526175] mt-4 leading-relaxed max-w-2xl mx-auto">
            From search visibility and focused marketing to modern websites, AI automation, and connected tools—we help small businesses build their digital capabilities step by step.
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
                const el = document.getElementById('services-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-[#14243B] hover:text-[#1554B8] bg-white hover:bg-[#EAF1FC]/40 border border-[#E3DFD5] shadow-xs transition"
            >
              View Service Categories
            </button>
          </div>
        </div>
      </section>

      {/* DETAILED 6-SERVICE GRID */}
      <section id="services-grid" className="py-20 lg:py-24 border-b border-[#E3DFD5] bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              SERVICE CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              Marketing, Websites & Technology Working Together.
            </h2>
            <p className="text-sm text-[#526175] leading-relaxed">
              Choose standalone services or combine them into a cohesive approach that addresses your specific priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetailed.map((svc) => (
              <div
                key={svc.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E3DFD5] hover:border-[#1554B8]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF1FC] border border-[#D5E4F9] flex items-center justify-center">
                      {getServiceIcon(svc.id)}
                    </div>
                    <span className="text-2xl font-black text-[#E3DFD5] font-mono">
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#14243B] mb-2">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1554B8] font-medium leading-relaxed mb-4">
                    {svc.description}
                  </p>

                  <p className="text-xs text-[#526175] leading-relaxed mb-6">
                    {svc.details}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#F7F4EC] border border-[#E3DFD5] text-[#526175] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => nav('/contact')}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-[#1554B8] hover:text-white bg-[#EAF1FC] hover:bg-[#1554B8] border border-[#D5E4F9] hover:border-[#1554B8] transition flex items-center justify-center gap-1.5"
                >
                  <span>Enquire About {svc.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW WE HELP 4-STEP PROCESS */}
      <section className="py-20 bg-white border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              HOW WE HELP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              One Partner. Connected Digital Work.
            </h2>
            <p className="text-sm text-[#526175] leading-relaxed">
              Our process takes your project from understanding to deployment and sensible ongoing improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5]">
              <span className="text-xs font-bold text-[#1554B8] uppercase tracking-wider block mb-1">STEP 01</span>
              <h4 className="text-lg font-bold text-[#14243B] mb-2">Discover</h4>
              <p className="text-xs text-[#526175] leading-relaxed">
                Understand your business, target audience, existing tools, and immediate priorities.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5]">
              <span className="text-xs font-bold text-[#1554B8] uppercase tracking-wider block mb-1">STEP 02</span>
              <h4 className="text-lg font-bold text-[#14243B] mb-2">Plan</h4>
              <p className="text-xs text-[#526175] leading-relaxed">
                Define the right combination of marketing, web work, or automation and agree on project scope.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5]">
              <span className="text-xs font-bold text-[#1554B8] uppercase tracking-wider block mb-1">STEP 03</span>
              <h4 className="text-lg font-bold text-[#14243B] mb-2">Build & Launch</h4>
              <p className="text-xs text-[#526175] leading-relaxed">
                Create, test, and launch the agreed website elements, campaigns, or connected workflows.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5]">
              <span className="text-xs font-bold text-[#1554B8] uppercase tracking-wider block mb-1">STEP 04</span>
              <h4 className="text-lg font-bold text-[#14243B] mb-2">Review & Improve</h4>
              <p className="text-xs text-[#526175] leading-relaxed">
                Assess progress, check key indicators, and plan sensible next adjustments.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PACKAGES & PRICING PLANS */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
              PRICING TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
              Transparent, Structured Packages.
            </h2>
            <p className="text-sm text-[#526175] leading-relaxed">
              Clear scope definitions designed around where your business is today. Direct third-party ad spend and tool subscriptions remain separate and fully under your control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E3DFD5] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1554B8] block mb-1">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-black text-[#14243B]">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-3xl font-black text-[#1554B8]">{plan.price}</span>
                      <span className="text-[11px] text-[#526175]">/{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#526175] mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#526175] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1554B8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleEnquirePlan(plan)}
                  className="w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 bg-[#F7F4EC] hover:bg-[#EAF1FC] text-[#14243B] hover:text-[#1554B8] border border-[#E3DFD5]"
                >
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-xs text-[#526175]">
            <span>Note: Pricing amounts reflect current package scopes pending final owner confirmation.</span>
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-white text-center border-t border-[#E3DFD5] space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-[#14243B]">
          Need a Custom Combination for Your Business?
        </h3>
        <p className="text-xs sm:text-sm text-[#526175] max-w-lg mx-auto leading-relaxed">
          Tell us about your specific goals, existing platforms, and timelines. We will prepare a practical project proposal.
        </p>
        <button
          onClick={() => nav('/contact')}
          className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm transition inline-flex items-center gap-2"
        >
          <span>Request Custom Proposal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}
