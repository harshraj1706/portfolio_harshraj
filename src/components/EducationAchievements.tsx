"use client";

import React from "react";
import { GraduationCap, Award, ExternalLink, Trophy, Code2, BookOpen } from "lucide-react";

export function EducationAchievements() {
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
                  CURRENT UNDERGRADUATE
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1c1b1a]">
                Indian Institute of Information Technology (IIIT) Bhagalpur
              </h3>
              <div className="text-xs text-[#434655] mt-1 font-medium">
                B.Tech in Mechatronics and Automation Engineering
              </div>
              <div className="font-mono text-xs text-[#a73a00] mt-1 font-semibold">
                Minor in Computer Science and Engineering (CSE), IIIT Bhagalpur
              </div>
              <p className="text-xs text-[#434655] mt-3 leading-relaxed">
                Interdisciplinary engineering curriculum combining classical kinematics, sensor systems, control feedback loops, with data structures, algorithms, operating systems, and deep learning.
              </p>
              <div className="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
                <span>CUMULATIVE GRADE POINT AVERAGE:</span>
                <span className="font-bold text-[#1c1b1a] bg-[#f2edeb] px-2.5 py-1 rounded border border-[#e6e2df]">
                  7.81 / 10.0
                </span>
              </div>
            </div>

            {/* Schooling Card (Class XII only, No Class X) */}
            <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow border border-[#e6e2df]">
              <div className="flex items-center justify-between pb-2 mb-2 font-mono text-[11px] text-[#434655]">
                <span>SENIOR SECONDARY</span>
                <span className="px-2 py-0.5 rounded bg-[#ece7e5] text-[#1c1b1a] font-semibold">
                  CBSE BOARD
                </span>
              </div>
              <h3 className="text-base font-bold text-[#1c1b1a]">
                New Holy Ganges Public School, Khagaria, Bihar
              </h3>
              <div className="text-xs text-[#434655] mt-1">
                Class XII Board Examination (CBSE)
              </div>
              <div className="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
                <span>STANDARDIZED AGGREGATE:</span>
                <span className="font-bold text-[#1c1b1a] bg-[#f2edeb] px-2.5 py-1 rounded border border-[#e6e2df]">
                  84.0%
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Honors & Achievements (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <h2 className="text-2xl text-[#1c1b1a] tracking-tight font-semibold flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#a73a00]" />
                <span>Honors &amp; Achievements</span>
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

            {/* Achievement 1: AI-Verse 2026 */}
            <div className="bg-white p-5 rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 border border-[#e6e2df]">
              <div className="w-10 h-10 rounded bg-[#dce1ff] flex items-center justify-center shrink-0 text-[#001551]">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#1c1b1a]">
                    3rd Place — AI-Verse 2026 Machine Learning Challenge
                  </h3>
                  <span className="font-mono text-[11px] text-[#0037b0] font-semibold">
                    COMPETITION
                  </span>
                </div>
                <p className="text-xs text-[#434655] mt-1 leading-relaxed">
                  Machine Learning Challenge held at IIIT Bhagalpur (2026); formulated statistical learning models with tailored feature engineering and cross-validation rigor.
                </p>
              </div>
            </div>

            {/* Achievement 2: SIH 2026 Internal */}
            <div className="bg-white p-5 rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 border border-[#e6e2df]">
              <div className="w-10 h-10 rounded bg-[#ffdbce] flex items-center justify-center shrink-0 text-[#370e00]">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#1c1b1a]">
                    2nd Place — SIH &apos;26 Internal Hackathon (Team Reflexes)
                  </h3>
                  <span className="font-mono text-[11px] text-[#a73a00] font-semibold">
                    TEAM AWARD
                  </span>
                </div>
                <p className="text-xs text-[#434655] mt-1 leading-relaxed">
                  Recognized with Team Reflexes at IIIT Bhagalpur for MediReach, implementing LLM patient-intake workflows, protocol review, prescription OCR, and voice assistance.
                </p>
              </div>
            </div>

            {/* Achievement 3: 200+ DSA Codolio */}
            <div className="bg-white p-5 rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 border border-[#e6e2df]">
              <div className="w-10 h-10 rounded bg-[#ece7e5] flex items-center justify-center shrink-0 text-[#1c1b1a]">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#1c1b1a]">
                    200+ DSA Problems Solved
                  </h3>
                  <a
                    href="https://codolio.com/profile/harsh1706"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-[#0037b0] hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    <span>Codolio Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-xs text-[#434655] mt-1 leading-relaxed">
                  Active algorithmic problem solving in C++ and Python covering graph theory, dynamic programming, trees, and computational complexity.
                </p>
              </div>
            </div>

            {/* Achievement 4: IBM LLM Certification */}
            <div className="bg-white p-5 rounded shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex items-start gap-4 border border-[#e6e2df]">
              <div className="w-10 h-10 rounded bg-[#d5e3fc] flex items-center justify-center shrink-0 text-[#0d1c2e]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#1c1b1a]">
                    Introduction to Large Language Models
                  </h3>
                  <span className="font-mono text-[11px] text-[#434655]">
                    CERTIFICATION
                  </span>
                </div>
                <p className="text-xs text-[#434655] mt-1 leading-relaxed">
                  IBM SkillsBuild (Jan 2026, 1.5-hour course); core mechanisms of generative transformers, attention architectures, and prompting strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
