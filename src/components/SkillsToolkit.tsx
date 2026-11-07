"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

type CategoryFilter = "all" | "ml_data" | "genai" | "backend" | "core";

export function SkillsToolkit() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");

  const filterButtons: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "ALL SKILLS (8 DOMAINS)" },
    { id: "ml_data", label: "DATA SCIENCE, ML & DL" },
    { id: "genai", label: "GENERATIVE & AGENTIC AI" },
    { id: "backend", label: "BACKEND & FRONTEND" },
    { id: "core", label: "LANGUAGES, TESTING & CS" },
  ];

  const filteredGroups = PORTFOLIO_DATA.skillGroups.filter((group) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "ml_data") return group.category === "ml" || group.category === "data";
    if (selectedCategory === "genai") return group.category === "genai";
    if (selectedCategory === "backend") return group.category === "backend";
    if (selectedCategory === "core") return group.category === "core";
    return true;
  });

  return (
    <section id="toolkit" className="w-full bg-[#f7f3f0] py-16 border-b border-[#e6e2df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="font-mono text-xs text-[#0037b0] font-semibold">
              § 04 // TECHNICAL APPARATUS &amp; RUNTIME
            </span>
            <h2 className="text-3xl text-[#1c1b1a] tracking-tight font-semibold mt-1">
              Technical Skills &amp; Stack
            </h2>
            <p className="text-sm text-[#434655] max-w-2xl mt-1 leading-relaxed">
              Curated inventory of verified programming languages, data science libraries, machine learning &amp; reinforcement learning techniques, generative agent orchestrators, and testing fundamentals.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div
            role="toolbar"
            aria-label="Filter skills by domain"
            className="flex flex-wrap gap-2 font-mono text-xs"
          >
            {filterButtons.map((btn) => {
              const isActive = selectedCategory === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setSelectedCategory(btn.id)}
                  aria-pressed={isActive}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-150 active:scale-95 text-xs font-mono font-medium focus-visible:ring-2 focus-visible:ring-[#0037b0] focus-visible:outline-none ${
                    isActive
                      ? "bg-[#1c1b1a] text-white shadow-sm"
                      : "bg-[#f2edeb] hover:bg-[#ece7e5] text-[#1c1b1a] border border-[#e6e2df]"
                  }`}
                >
                  {btn.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-[#e6e2df] group hover:border-[#747686]"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 bg-[#f7f3f0] px-3 py-1.5 rounded font-mono text-[10px] text-[#434655]">
                  <span>{group.categoryCode}</span>
                  <span
                    className={`font-semibold ${
                      group.category === "genai"
                        ? "text-[#a73a00]"
                        : group.category === "ml" || group.category === "data"
                        ? "text-[#0037b0]"
                        : "text-[#1c1b1a]"
                    }`}
                  >
                    {group.countLabel}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-[#1c1b1a] mb-2.5 group-hover:text-[#0037b0] transition-colors">
                  {group.title}
                </h3>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#f2edeb] text-[#1c1b1a] hover:bg-[#dce1ff] hover:text-[#001551] hover:-translate-y-0.5 transition-all duration-150 cursor-default select-none border border-[#e6e2df] text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="font-mono text-[10.5px] text-[#434655] mt-3.5 pt-2.5 border-t border-[#e6e2df] leading-snug">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
