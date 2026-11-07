"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  ExternalLink,
  Trophy,
  Code2,
  BookOpen,
  Zap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function EducationAchievements() {
  const { education, achievements } = PORTFOLIO_DATA;

  return (
    <section id="education" className="w-full bg-[#f7f3f0] py-16 border-t border-[#e6e2df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between pb-2 mb-8 text-[#434655] font-mono text-[11px] border-b border-[#e6e2df] gap-2">
          <span className="text-[#0037b0] font-semibold">
            § 06 // HISTORICAL RECORD &amp; ACADEMICS
          </span>
          <span>INSTITUTIONAL METRICS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Academic Track (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl text-[#1c1b1a] tracking-tight font-semibold flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#0037b0]" />
              <span>Academic Track</span>
            </h2>

            {/* IIIT Bhagalpur Card */}
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow border border-[#e6e2df]">
              <div className="flex items-center justify-between pb-2 mb-2 font-mono text-[11px] text-[#434655]">
                <span className="text-[#0037b0] font-bold">2024 — 2028</span>
                <span className="px-2 py-0.5 rounded bg-[#dce1ff] text-[#001551] font-semibold">
                  {education[0].status}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1c1b1a]">
                {education[0].institution}
              </h3>
              <div className="text-xs text-[#434655] mt-1 font-medium">
                {education[0].degree}
              </div>
              <div className="font-mono text-xs text-[#a73a00] mt-1 font-semibold">
                {education[0].minor}
              </div>
              <p className="text-xs text-[#434655] mt-3 leading-relaxed">
                {education[0].details}
              </p>
              <div className="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
                <span>CUMULATIVE GRADE POINT AVERAGE:</span>
                <span className="font-bold text-[#1c1b1a] bg-[#f2edeb] px-2.5 py-1 rounded border border-[#e6e2df]">
                  {education[0].cgpa}
                </span>
              </div>
            </div>

            {/* Schooling Card (Class XII) */}
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow border border-[#e6e2df]">
              <div className="flex items-center justify-between pb-2 mb-2 font-mono text-[11px] text-[#434655]">
                <span>SENIOR SECONDARY</span>
                <span className="px-2 py-0.5 rounded bg-[#ece7e5] text-[#1c1b1a] font-semibold">
                  {education[1].status}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1c1b1a]">
                {education[1].institution}
              </h3>
              <div className="text-xs text-[#434655] mt-1">
                {education[1].degree}
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
                <span>STANDARDIZED AGGREGATE:</span>
                <span className="font-bold text-[#1c1b1a] bg-[#f2edeb] px-2.5 py-1 rounded border border-[#e6e2df]">
                  {education[1].cgpa}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Honors & Achievements (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <h2 className="text-2xl text-[#1c1b1a] tracking-tight font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#a73a00]" />
                <span>Achievements and Certification</span>
              </h2>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#0037b0] hover:underline inline-flex items-center gap-1 font-semibold bg-[#f2edeb] px-2.5 py-1 rounded border border-[#e6e2df]"
                title="View verified certificates in Resume PDF"
              >
                <span>View Certificates</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Achievements List */}
            {achievements.map((item) => {
              const isSynapse = item.id === "synapse-arena";
              const isAiVerse = item.id === "ai-verse";
              const isSih = item.id === "sih-2026";
              const isDsa = item.id === "dsa-codolio";
              const isIbm = item.id === "ibm-llm";

              let icon = <Award className="w-5 h-5" />;
              let iconBoxBg = "bg-[#dce1ff] text-[#001551]";
              let badgeColor = "text-[#0037b0]";

              if (isSynapse) {
                icon = <Zap className="w-5 h-5" />;
                iconBoxBg = "bg-[#ffe082] text-[#5d4037]";
                badgeColor = "text-[#b26a00]";
              } else if (isAiVerse) {
                icon = <Award className="w-5 h-5" />;
                iconBoxBg = "bg-[#dce1ff] text-[#001551]";
                badgeColor = "text-[#0037b0]";
              } else if (isSih) {
                icon = <Trophy className="w-5 h-5" />;
                iconBoxBg = "bg-[#ffdbce] text-[#370e00]";
                badgeColor = "text-[#a73a00]";
              } else if (isDsa) {
                icon = <Code2 className="w-5 h-5" />;
                iconBoxBg = "bg-[#ece7e5] text-[#1c1b1a]";
                badgeColor = "text-[#1c1b1a]";
              } else if (isIbm) {
                icon = <BookOpen className="w-5 h-5" />;
                iconBoxBg = "bg-[#d5e3fc] text-[#0d1c2e]";
                badgeColor = "text-[#434655]";
              }

              return (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 border border-[#e6e2df]"
                >
                  <div
                    className={`w-10 h-10 rounded ${iconBoxBg} flex items-center justify-center shrink-0`}
                  >
                    {icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-[#1c1b1a]">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a
                          href={item.link.url}
                          target={item.link.url.startsWith("http") ? "_blank" : undefined}
                          rel={item.link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-mono text-[11px] text-[#0037b0] hover:underline inline-flex items-center gap-1 font-semibold shrink-0"
                        >
                          <span>{item.badge}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span
                          className={`font-mono text-[11px] font-semibold shrink-0 ${badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#434655] mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
