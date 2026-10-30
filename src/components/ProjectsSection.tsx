"use client";

import React, { useState } from "react";
import {
  Code2,
  ExternalLink,
  Layers,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "genai" | "audit" | "applied">("all");
  const [activeWorkflowNode, setActiveWorkflowNode] = useState<number>(1);
  const [activeDossierTab, setActiveDossierTab] = useState<number>(0);

  const heroProject = PORTFOLIO_DATA.projects.find((p) => p.id === "multi-agent-system")!;
  const secondaryProjects = PORTFOLIO_DATA.projects.filter((p) => p.id !== "multi-agent-system");

  const filterButtons = [
    { id: "all", label: "ALL (3)" },
    { id: "genai", label: "GENERATIVE AI" },
    { id: "audit", label: "AI AUDITING" },
    { id: "applied", label: "APPLIED AI / TEAM" },
  ];

  const showHero = selectedFilter === "all" || selectedFilter === "genai";
  const filteredSecondary = secondaryProjects.filter((p) => {
    if (selectedFilter === "all") return true;
    return p.category === selectedFilter;
  });

  const currentNode = heroProject.workflowNodes?.find((n) => n.id === activeWorkflowNode);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Section Header & Filters */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-xs text-[#0037b0] font-semibold">
              § 05 // SYSTEM CASE STUDIES
            </span>
            <span className="font-mono text-[11px] text-[#434655]">
              / VERIFIED CODEBASES
            </span>
          </div>
          <h2 className="text-3xl text-[#1c1b1a] tracking-tight font-semibold">
            Selected Engineering Projects
          </h2>
        </div>

        {/* Project Category Filter */}
        <div
          role="toolbar"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2 font-mono text-xs"
        >
          {filterButtons.map((btn) => {
            const isActive = selectedFilter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                onClick={() => setSelectedFilter(btn.id as "all" | "genai" | "audit" | "applied")}
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

      {/* HERO PROJECT: Multi-Agent Research System (CogniSynth) */}
      {showHero && (
        <article className="bg-white rounded p-6 sm:p-8 mb-8 shadow-md border border-[#e6e2df] transition-all">
          {/* Metadata Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 bg-[#f7f3f0] px-4 py-3 rounded gap-3 border border-[#e6e2df]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-1 rounded bg-[#0037b0] text-white font-mono text-xs font-bold tracking-wider">
                PROJECT_01 // HERO
              </span>
              <span className="font-mono text-[11px] uppercase text-[#434655] font-medium">
                AUTONOMOUS RESEARCH · LANGGRAPH
              </span>
              <span className="font-mono text-[11px] text-[#434655]">
                {heroProject.timeline}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={heroProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#0037b0] font-semibold hover:underline"
              >
                <Code2 className="w-4 h-4" />
                <span>GitHub Repository →</span>
              </a>
              {heroProject.demoUrl && (
                <a
                  href={heroProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#a73a00] font-semibold hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{heroProject.demoLabel}</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Summary & Technical Spec */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-2xl font-bold text-[#1c1b1a]">
                {heroProject.title}
              </h3>
              <p className="text-xs font-mono text-[#0037b0] font-medium">
                {heroProject.subtitle}
              </p>
              <p className="text-sm text-[#434655] leading-relaxed">
                {heroProject.summary}
              </p>
              <ul className="text-xs text-[#434655] space-y-2 list-disc list-inside leading-relaxed pt-1">
                {heroProject.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Spec Box */}
            <div className="lg:col-span-4 bg-[#f7f3f0] p-5 rounded flex flex-col justify-between border border-[#e6e2df]">
              <div className="space-y-2 font-mono text-[11px]">
                <div className="flex justify-between pb-1 border-b border-[#e6e2df]">
                  <span className="text-[#434655]">ORCHESTRATOR:</span>
                  <span className="font-semibold text-[#1c1b1a]">LangGraph + LangChain</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-[#e6e2df]">
                  <span className="text-[#434655]">SEARCH HARVESTER:</span>
                  <span className="font-semibold text-[#1c1b1a]">Tavily Search API</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-[#e6e2df]">
                  <span className="text-[#434655]">MODELS:</span>
                  <span className="font-semibold text-[#1c1b1a]">Gemini 3.8 / 3.6 Flash</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-[#e6e2df]">
                  <span className="text-[#434655]">DEPLOYMENT:</span>
                  <span className="font-semibold text-[#a73a00]">Hugging Face Spaces</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#434655]">STATUS:</span>
                  <span className="text-[#0037b0] font-bold">PRODUCTION LIVE</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e6e2df] flex flex-wrap gap-1.5">
                {heroProject.stack.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-0.5 rounded bg-[#f2edeb] font-mono text-[11px] text-[#1c1b1a] border border-[#e6e2df]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive State Graph Nodes */}
          <div className="bg-[#f7f3f0] p-5 sm:p-6 rounded mb-6 border border-[#e6e2df]">
            <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
              <span className="font-mono text-xs font-bold text-[#1c1b1a] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0037b0]" />
                <span>WORKFLOW ARCHITECTURE SCHEMATIC (STATE GRAPH)</span>
              </span>
              <span className="font-mono text-[11px] text-[#434655] bg-[#f2edeb] px-2 py-0.5 rounded border border-[#e6e2df]">
                SELECT ANY NODE TO INSPECT
              </span>
            </div>

            {/* Nodes Grid */}
            <div
              role="radiogroup"
              aria-label="CogniSynth Workflow Nodes"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3"
            >
              {heroProject.workflowNodes?.map((node) => {
                const isSelected = activeWorkflowNode === node.id;
                return (
                  <div
                    key={node.id}
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onClick={() => setActiveWorkflowNode(node.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveWorkflowNode(node.id);
                      }
                    }}
                    className={`p-3.5 rounded cursor-pointer transition-all shadow-xs hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0037b0] ${
                      isSelected
                        ? "ring-2 ring-[#0037b0] bg-[#f2edeb] border-transparent"
                        : "bg-white border border-[#e6e2df] hover:border-[#747686]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#0037b0] font-bold">
                        NODE 0{node.id}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected ? "bg-[#0037b0] animate-pulse" : "bg-[#c4c5d7]"
                        }`}
                      />
                    </div>
                    <div className="text-sm font-semibold text-[#1c1b1a] mt-1">
                      {node.name}
                    </div>
                    <div className="font-mono text-[10px] text-[#434655] mt-1">
                      {node.stage}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Node Detail Box */}
            {currentNode && (
              <div className="mt-4 p-4 rounded bg-[#ece7e5] border border-[#e6e2df] font-mono text-xs text-[#1c1b1a] animate-in fade-in duration-200">
                <div className="flex flex-wrap items-center justify-between border-b border-[#e6e2df] pb-2 mb-2 gap-2">
                  <strong className="text-[#0037b0] font-mono text-xs">
                    [NODE 0{currentNode.id}: {currentNode.name.toUpperCase()} — {currentNode.role}]
                  </strong>
                  <span className="text-[11px] text-[#434655]">
                    VERIFIED IN COGNISYNTH REPOSITORY
                  </span>
                </div>
                <p className="text-xs text-[#434655] font-sans leading-relaxed">
                  {currentNode.description}
                </p>
              </div>
            )}
          </div>

          {/* 4-Tab Dossier Switcher */}
          <div className="border-t border-[#e6e2df] pt-4">
            <div
              role="tablist"
              aria-label="CogniSynth Technical Dossier"
              className="flex flex-wrap gap-2 mb-3"
            >
              {heroProject.dossierTabs?.map((tab, idx) => {
                const isSelected = activeDossierTab === idx;
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`dossier-tab-${tab.id}`}
                    aria-selected={isSelected}
                    aria-controls={`dossier-panel-${tab.id}`}
                    onClick={() => setActiveDossierTab(idx)}
                    className={`px-3 py-1.5 rounded font-mono text-[11px] transition-all focus-visible:ring-2 focus-visible:ring-[#0037b0] focus-visible:outline-none ${
                      isSelected
                        ? "bg-[#0037b0] text-white font-semibold shadow-xs"
                        : "bg-[#f2edeb] hover:bg-[#ece7e5] text-[#1c1b1a] border border-[#e6e2df]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {heroProject.dossierTabs && heroProject.dossierTabs[activeDossierTab] && (
              <div
                role="tabpanel"
                id={`dossier-panel-${heroProject.dossierTabs[activeDossierTab].id}`}
                aria-labelledby={`dossier-tab-${heroProject.dossierTabs[activeDossierTab].id}`}
                className="bg-[#f7f3f0] p-4 sm:p-5 rounded border border-[#e6e2df] animate-in fade-in duration-200"
              >
                <h4 className="text-sm font-semibold text-[#1c1b1a] mb-1.5">
                  {heroProject.dossierTabs[activeDossierTab].heading}
                </h4>
                <p className="text-xs text-[#434655] leading-relaxed">
                  {heroProject.dossierTabs[activeDossierTab].content}
                </p>
              </div>
            )}
          </div>
        </article>
      )}

      {/* SECONDARY PROJECTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSecondary.map((proj) => (
          <article
            key={proj.id}
            className="bg-white rounded p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between border border-[#e6e2df] group hover:border-[#747686]"
          >
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between pb-3 mb-4 bg-[#f7f3f0] px-3.5 py-2 rounded border border-[#e6e2df] gap-2">
                <span
                  className={`font-mono text-xs font-bold ${
                    proj.id === "auditing-website-agent"
                      ? "text-[#a73a00]"
                      : "text-[#374559]"
                  }`}
                >
                  {proj.id === "auditing-website-agent"
                    ? "PROJECT_02 // AI AUDITING"
                    : "PROJECT_03 // HEALTHCARE"}
                </span>

                <div className="flex items-center gap-3 font-mono text-xs">
                  {proj.isUndeployed && (
                    <span className="px-2 py-0.5 rounded bg-[#ffdbce] text-[#370e00] font-semibold text-[11px]">
                      2ND PLACE SIH &apos;26
                    </span>
                  )}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0037b0] hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>Code →</span>
                  </a>
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#a73a00] hover:underline inline-flex items-center gap-1 font-medium"
                    >
                      <span>{proj.demoLabel}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-[#1c1b1a] mb-1 group-hover:text-[#0037b0] transition-colors">
                {proj.title}
              </h3>
              <div className="text-xs font-mono text-[#434655] mb-3">
                {proj.subtitle} · {proj.timeline}
              </div>
              <p className="text-xs text-[#434655] leading-relaxed mb-4">
                {proj.summary}
              </p>

              {/* Specialized Project Details */}
              {proj.auditCategories && (
                <div className="bg-[#f7f3f0] p-4 rounded mb-4 border border-[#e6e2df]">
                  <div className="flex items-center justify-between pb-2 mb-2 font-mono text-[11px] text-[#434655] border-b border-[#e6e2df]">
                    <span>DIAGNOSTIC AUDIT FAMILIES // ENGINE SPEC</span>
                    <span className="text-[#a73a00] font-semibold">
                      RECOMMEND-ONLY JSON
                    </span>
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px]">
                    {proj.auditCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className="flex items-start justify-between p-2 rounded bg-white hover:bg-[#ece7e5] transition-colors"
                      >
                        <div>
                          <div className="text-[#1c1b1a] font-semibold">
                            {cat.title}
                          </div>
                          <div className="text-[10px] text-[#434655] font-sans">
                            {cat.description}
                          </div>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-[#f2edeb] text-[#0037b0] font-bold text-[10px] shrink-0 ml-2">
                          {cat.family}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {proj.isUndeployed && (
                <div className="bg-[#f7f3f0] p-4 rounded mb-4 space-y-2 border border-[#e6e2df]">
                  <div className="font-mono text-xs text-[#1c1b1a] font-semibold flex items-center justify-between">
                    <span>KEY CONTRIBUTIONS &amp; ARCHITECTURE:</span>
                    <span className="text-[#a73a00] font-mono text-[11px]">
                      TEAM REPO · SIH &apos;26
                    </span>
                  </div>
                  <ul className="text-xs text-[#434655] space-y-1.5 list-disc list-inside leading-relaxed">
                    {proj.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between pt-3 font-mono text-[11px] text-[#434655] border-t border-[#e6e2df] gap-2">
              <span>STACK: {proj.stack.join(" · ")}</span>
              <span
                className={`font-semibold ${
                  proj.statusType === "live"
                    ? "text-[#0037b0]"
                    : proj.statusType === "http"
                    ? "text-[#a73a00]"
                    : "text-[#374559]"
                }`}
              >
                {proj.statusLabel}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
