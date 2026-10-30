"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function EngineeringFocus() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " IST"
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const focusDomains = PORTFOLIO_DATA.disciplines;

  return (
    <section id="focus" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between pb-2 mb-8 text-[#434655] font-mono text-[11px] border-b border-[#e6e2df] gap-2">
        <span className="text-[#0037b0] font-semibold">§ 03 // CORE CAPABILITIES</span>
        <span className="text-[#1c1b1a]">
          ACTIVE DOMAIN: {focusDomains[activeAccordion]?.title.toUpperCase()}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Accordion (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-3xl text-[#1c1b1a] tracking-tight font-semibold mb-2">
            Disciplines of Focus
          </h2>
          <p className="text-sm text-[#434655] mb-4 leading-relaxed">
            Select a system pillar to inspect active implementations, architectural toolsets, and validation methodologies.
          </p>

          <div className="space-y-3">
            {focusDomains.map((domain, index) => {
              const isOpen = activeAccordion === index;
              const contentId = `focus-content-${domain.id}`;
              const buttonId = `focus-btn-${domain.id}`;

              return (
                <div
                  key={domain.id}
                  className={`rounded border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#f2edeb] shadow-md border-[#0037b0]/30"
                      : "bg-[#f7f3f0] hover:bg-[#f2edeb] border-transparent"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => setActiveAccordion(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between focus-visible:ring-2 focus-visible:ring-[#0037b0] focus-visible:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-xs font-bold ${
                          domain.color === "primary"
                            ? "text-[#0037b0]"
                            : domain.color === "secondary"
                            ? "text-[#a73a00]"
                            : "text-[#374559]"
                        }`}
                      >
                        {domain.id}
                      </span>
                      <div>
                        <h3 className="text-base font-semibold text-[#1c1b1a]">
                          {domain.title}
                        </h3>
                        <div className="text-xs text-[#434655] font-mono mt-0.5">
                          {domain.subtitle}
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#434655] transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#0037b0]" : ""
                      }`}
                    />
                  </button>

                  {/* Accordion Content */}
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`transition-all duration-300 px-5 sm:px-6 overflow-hidden ${
                      isOpen ? "max-h-96 pb-6 pt-1 opacity-100" : "max-h-0 py-0 opacity-0"
                    }`}
                  >
                    <p className="text-xs text-[#434655] leading-relaxed">
                      {domain.description}
                    </p>
                    <div className="mt-4 pt-3 flex flex-wrap gap-2 font-mono text-[11px] border-t border-[#e6e2df]">
                      {domain.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-[#ece7e5] text-[#1c1b1a] border border-[#e6e2df]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Laboratory Log & Active Builds (5 Cols) */}
        <div className="lg:col-span-5 bg-[#f7f3f0] p-5 sm:p-6 rounded shadow-sm border border-[#e6e2df]">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-4 bg-[#ece7e5] px-3 py-1.5 rounded border border-[#e6e2df]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd651e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fd651e]"></span>
              </span>
              <span className="font-mono text-xs font-bold text-[#1c1b1a] uppercase">
                LABORATORY LOG // ACTIVE BUILDS
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#434655]">
              {currentTime || "IST RECORD"}
            </span>
          </div>

          {/* Build Card A: CogniSynth */}
          <div className="bg-white p-5 rounded mb-4 shadow-sm hover:shadow-md transition-all border border-[#e6e2df] hover:border-[#0037b0] group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] font-semibold text-[#0037b0]">
                BUILD // COGNISYNTH
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#dce1ff] text-[#001551] font-mono text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0037b0] animate-pulse" />
                HF SPACES LIVE
              </span>
            </div>
            <h4 className="text-sm font-semibold text-[#1c1b1a] mb-1 group-hover:text-[#0037b0] transition-colors">
              Multi-Agent Research System
            </h4>
            <p className="text-xs text-[#434655] leading-normal mb-3">
              Autonomous LangGraph research workflow coordinating dynamic task decomposition, multi-source Tavily harvesting, evidence proposition extraction, and contradiction checks.
            </p>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#434655] border-t border-[#e6e2df] pt-2">
              <span>DEPLOYED: Hugging Face</span>
              <a
                href="https://github.com/harshraj1706/multi-agent-system"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0037b0] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>inspect source</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Build Card B: Auditing Tool */}
          <div className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-all border border-[#e6e2df] hover:border-[#a73a00] group">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[11px] font-semibold text-[#a73a00]">
                BUILD // WAR-AUDIT
              </span>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#ffdbce] text-[#370e00] font-mono text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fd651e] animate-ping" />
                HTTP PROTOTYPE
              </span>
            </div>
            <h4 className="text-sm font-semibold text-[#1c1b1a] mb-1 group-hover:text-[#a73a00] transition-colors">
              Website AI-Readiness Auditing Tool
            </h4>
            <p className="text-xs text-[#434655] leading-normal mb-3">
              Evaluates target websites for AI crawler access directives, Schema.org semantic metadata, content quotability, and flags blockers limiting AI-agent discoverability.
            </p>
            <div className="flex items-center justify-between font-mono text-[11px] text-[#434655] border-t border-[#e6e2df] pt-2">
              <span>NODE: HTTP Instance</span>
              <a
                href="https://github.com/harshraj1706/auditing_website_agent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a73a00] font-medium hover:underline inline-flex items-center gap-1"
              >
                <span>inspect source</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Truthful Grounded Verification Strip */}
          <div className="mt-4 p-3 bg-[#32302f] text-[#f5f0ee] rounded font-mono text-[11px] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>CODEBASES GROUNDED &amp; VERIFIED</span>
            </div>
            <span className="text-neutral-400">IIIT BHAGALPUR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
