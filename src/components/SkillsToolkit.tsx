"use client";

import React, { useState, useMemo } from "react";
import { Search, X, Filter } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

type CategoryFilter = "all" | "ml_data" | "genai" | "backend" | "core";

export function SkillsToolkit() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filterButtons: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "ALL SKILLS (8 DOMAINS)" },
    { id: "ml_data", label: "DATA SCIENCE, ML & DL" },
    { id: "genai", label: "GENERATIVE & AGENTIC AI" },
    { id: "backend", label: "BACKEND & FRONTEND" },
    { id: "core", label: "LANGUAGES, TESTING & CS" },
  ];

  // Total skill count
  const totalSkillsCount = useMemo(() => {
    return PORTFOLIO_DATA.skillGroups.reduce((acc, g) => acc + g.skills.length, 0);
  }, []);

  const filteredGroups = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return PORTFOLIO_DATA.skillGroups
      .filter((group) => {
        if (selectedCategory === "all") return true;
        if (selectedCategory === "ml_data") return group.category === "ml" || group.category === "data";
        if (selectedCategory === "genai") return group.category === "genai";
        if (selectedCategory === "backend") return group.category === "backend";
        if (selectedCategory === "core") return group.category === "core";
        return true;
      })
      .map((group) => {
        if (!q) return { ...group, matchedSkills: group.skills };
        const matchingSkills = group.skills.filter((s) => s.toLowerCase().includes(q));
        const groupMatches =
          matchingSkills.length > 0 ||
          group.title.toLowerCase().includes(q) ||
          group.description.toLowerCase().includes(q);

        if (!groupMatches) return null;
        return {
          ...group,
          matchedSkills: matchingSkills.length > 0 ? matchingSkills : group.skills,
        };
      })
      .filter(Boolean) as (typeof PORTFOLIO_DATA.skillGroups[number] & {
        matchedSkills: string[];
      })[];
  }, [selectedCategory, searchQuery]);

  const displayedSkillsCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.matchedSkills.length, 0);
  }, [filteredGroups]);

  return (
    <section id="toolkit" className="w-full bg-[#f7f3f0] py-16 border-b border-[#e6e2df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-[#0037b0] font-semibold">
                § 04 // TECHNICAL APPARATUS &amp; RUNTIME
              </span>
              <span className="font-mono text-[10px] bg-[#f2edeb] px-2 py-0.5 rounded text-[#434655] border border-[#e6e2df]">
                {totalSkillsCount} VERIFIED COMPETENCIES
              </span>
            </div>
            <h2 className="text-3xl text-[#1c1b1a] tracking-tight font-semibold">
              Technical Skills &amp; Stack
            </h2>
            <p className="text-sm text-[#434655] max-w-2xl mt-1 leading-relaxed">
              Curated inventory of verified programming languages, data science libraries, machine learning &amp; reinforcement learning techniques, generative agent orchestrators, and testing fundamentals.
            </p>
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#434655] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. LangGraph, RL, PyTorch)..."
              className="w-full pl-9 pr-8 py-2 rounded bg-white text-xs font-mono text-[#1c1b1a] placeholder:text-[#434655] border border-[#e6e2df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0037b0] transition-all shadow-xs"
              aria-label="Filter skills by keyword"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#434655] hover:text-[#1c1b1a] p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e6e2df]">
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
                  className={`px-3 py-1.5 rounded-full transition-all duration-150 active:scale-95 text-xs font-mono font-medium focus-visible:ring-2 focus-visible:ring-[#0037b0] focus-visible:outline-none ${
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

          <div className="font-mono text-[11px] text-[#434655] flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-[#0037b0]" />
            <span>
              SHOWING <strong className="text-[#1c1b1a] font-bold">{displayedSkillsCount}</strong> SKILLS IN{" "}
              <strong className="text-[#1c1b1a] font-bold">{filteredGroups.length}</strong> DOMAINS
            </span>
          </div>
        </div>

        {/* Skill Groups Grid */}
        {filteredGroups.length === 0 ? (
          <div className="p-10 text-center bg-white rounded border border-[#e6e2df] font-mono">
            <p className="text-sm font-semibold text-[#1c1b1a]">No matching skills found for &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-[#434655] mt-1">Try searching for &quot;Python&quot;, &quot;LangGraph&quot;, &quot;FastAPI&quot;, or &quot;Reinforcement Learning&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-4 px-4 py-2 rounded bg-[#0037b0] text-white text-xs font-semibold uppercase hover:bg-[#1d4ed8]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredGroups.map((group) => (
              <div
                key={group.id}
                className="bg-white p-5 rounded shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between border border-[#e6e2df] group hover:border-[#747686] interactive-card"
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
                    {group.skills.map((skill) => {
                      const isHighlighted =
                        searchQuery && skill.toLowerCase().includes(searchQuery.toLowerCase().trim());
                      return (
                        <span
                          key={skill}
                          className={`px-2 py-0.5 rounded transition-all duration-150 cursor-default select-none border text-[11px] ${
                            isHighlighted
                              ? "bg-[#0037b0] text-white font-bold border-[#001551] shadow-xs scale-105"
                              : "bg-[#f2edeb] text-[#1c1b1a] hover:bg-[#dce1ff] hover:text-[#001551] hover:-translate-y-0.5 border-[#e6e2df]"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <p className="font-mono text-[10.5px] text-[#434655] mt-3.5 pt-2.5 border-t border-[#e6e2df] leading-snug">
                  {group.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
