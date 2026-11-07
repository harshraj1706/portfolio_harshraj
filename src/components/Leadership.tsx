"use client";

import React from "react";
import { Users, Wrench, Sparkles, Compass, Presentation, Award, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Leadership() {
  const { leadership } = PORTFOLIO_DATA;

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <div className="bg-white p-6 sm:p-8 rounded shadow-sm border border-[#e6e2df]">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-4 border-b border-[#e6e2df] gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#dce1ff] text-[#001551] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-xs text-[#0037b0] font-semibold uppercase">
                LEADERSHIP &amp; COMMUNITY // {leadership.timeline}
              </span>
              <h3 className="text-xl font-bold text-[#1c1b1a]">
                {leadership.role} — {leadership.organization}
              </h3>
            </div>
          </div>
          <span className="px-3 py-1 rounded bg-[#f2edeb] font-mono text-xs text-[#434655] font-semibold self-start md:self-auto border border-[#e6e2df]">
            {leadership.timeline}
          </span>
        </div>

        {/* Quantified Leadership Impact Strip */}
        {leadership.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {leadership.metrics.map((m, idx) => {
              const icons = [
                <Wrench key="w" className="w-4 h-4 text-[#0037b0]" />,
                <Presentation key="p" className="w-4 h-4 text-[#a73a00]" />,
                <BookOpen key="b" className="w-4 h-4 text-emerald-700" />,
                <Award key="a" className="w-4 h-4 text-[#735c0f]" />,
              ];
              return (
                <div
                  key={idx}
                  className="bg-[#f7f3f0] p-3 rounded border border-[#e6e2df] flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#434655] uppercase tracking-wider font-semibold">
                      {m.label}
                    </span>
                    {icons[idx % icons.length]}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#1c1b1a]">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10.5px] text-[#434655] mt-0.5">
                    {m.detail}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {leadership.bullets.map((bullet, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded bg-[#f7f3f0] border border-[#e6e2df]"
            >
              {i === 0 ? (
                <Compass className="w-4 h-4 text-[#0037b0] shrink-0 mt-0.5" />
              ) : (
                <Sparkles className="w-4 h-4 text-[#a73a00] shrink-0 mt-0.5" />
              )}
              <p className="text-xs text-[#434655] leading-relaxed font-sans">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
