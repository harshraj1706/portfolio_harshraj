"use client";

import React from "react";
import { BookOpen, Cpu, Network, Bot } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function AboutTrajectory() {
  return (
    <section
      id="trajectory"
      className="w-full bg-[#f7f3f0] py-16 border-y border-[#e6e2df]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <div className="flex items-center gap-2 mb-1 font-mono text-xs text-[#0037b0] font-semibold">
            <span>§ 02 // TRAJECTORY &amp; FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl text-[#1c1b1a] tracking-tight font-semibold">
            From physical systems to intelligent software.
          </h2>
          <p className="text-base text-[#434655] max-w-3xl mt-2 leading-relaxed">
            Connecting physical hardware, sensor telemetry, and automation engineering with modern artificial intelligence, deep neural representations, and multi-agent reasoning loops.
          </p>
        </div>

        {/* 3-Stage Schematic Pipeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Circuit Connection Pulse line across cards on desktop */}
          <div
            className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#a73a00] via-[#0037b0] to-[#fd651e] -translate-y-10 z-0 opacity-40 animate-circuit-pulse pointer-events-none"
            aria-hidden="true"
          />

          {/* Stage 01: Hardware Layer */}
          <div className="relative z-10 bg-white p-6 rounded shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#a73a00] group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 bg-[#f7f3f0] px-3 py-1.5 rounded">
                <span className="font-mono text-xs font-bold text-[#a73a00] flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  STAGE 01
                </span>
                <span className="font-mono text-[11px] text-[#434655]">
                  HARDWARE LAYER
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#1c1b1a] mb-2 group-hover:text-[#a73a00] transition-colors">
                Mechatronics &amp; Automation
              </h3>
              <p className="text-xs text-[#434655] leading-relaxed mb-4">
                Systems thinking, physical kinematics, microcontroller control loops, real-time sensor feedback, and embedded system actuators.
              </p>
            </div>
            <div className="space-y-1.5 pt-3 font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#a73a00] rounded-full" />
                Kinematics &amp; Control Feedback
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#a73a00] rounded-full" />
                Telemetry Acquisition &amp; Sensors
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#a73a00] rounded-full" />
                C++ Embedded Integration
              </div>
            </div>
          </div>

          {/* Stage 02: Statistical Layer */}
          <div className="relative z-10 bg-white p-6 rounded shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#0037b0] group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 bg-[#f7f3f0] px-3 py-1.5 rounded">
                <span className="font-mono text-xs font-bold text-[#0037b0] flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5" />
                  STAGE 02
                </span>
                <span className="font-mono text-[11px] text-[#434655]">
                  STATISTICAL LAYER
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#1c1b1a] mb-2 group-hover:text-[#0037b0] transition-colors">
                Machine Learning &amp; DL
              </h3>
              <p className="text-xs text-[#434655] leading-relaxed mb-4">
                Empirical mathematical modeling, supervised &amp; unsupervised pipelines, neural representation learning, and cross-validation rigor.
              </p>
            </div>
            <div className="space-y-1.5 pt-3 font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#0037b0] rounded-full" />
                PyTorch &amp; Scikit-learn
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#0037b0] rounded-full" />
                CNNs &amp; Transfer Learning
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#0037b0] rounded-full" />
                Cross-Validation &amp; Error Metrics
              </div>
            </div>
          </div>

          {/* Stage 03: Orchestration Layer */}
          <div className="relative z-10 bg-white p-6 rounded shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-[#fd651e] group flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 bg-[#f7f3f0] px-3 py-1.5 rounded">
                <span className="font-mono text-xs font-bold text-[#fd651e] flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  STAGE 03
                </span>
                <span className="font-mono text-[11px] text-[#434655]">
                  ORCHESTRATION
                </span>
              </div>
              <h3 className="text-base font-semibold text-[#1c1b1a] mb-2 group-hover:text-[#fd651e] transition-colors">
                Generative AI &amp; Agents
              </h3>
              <p className="text-xs text-[#434655] leading-relaxed mb-4">
                Graph-driven multi-agent workflows, stateful autonomous supervisors, evidence-grounded RAG retrieval, and structured synthesis.
              </p>
            </div>
            <div className="space-y-1.5 pt-3 font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#fd651e] rounded-full" />
                LangGraph &amp; LangChain
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#fd651e] rounded-full" />
                Context-Augmented RAG
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#fd651e] rounded-full" />
                Evidence-Grounded Verification
              </div>
            </div>
          </div>
        </div>

        {/* Field Notes Bio Quote Box */}
        <div className="bg-[#f2edeb] p-6 lg:p-8 rounded shadow-sm border border-[#e6e2df]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-4xl">
              <div className="font-mono text-xs text-[#0037b0] uppercase font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#0037b0]" />
                <span>FIELD NOTES // INTELLECTUAL GENESIS</span>
              </div>
              <blockquote className="text-lg text-[#1c1b1a] italic font-serif leading-relaxed">
                “{PORTFOLIO_DATA.profile.fieldNotesQuote}”
              </blockquote>
            </div>
            <div className="shrink-0 flex lg:flex-col items-start lg:items-end justify-between font-mono text-[11px] text-[#434655] pt-2 lg:pt-0 border-t lg:border-t-0 border-[#e6e2df]">
              <span className="font-bold text-[#1c1b1a]">
                {PORTFOLIO_DATA.profile.name.toUpperCase()}
              </span>
              <span>{PORTFOLIO_DATA.profile.shortInstitution}</span>
              <span className="text-[#a73a00]">LAB NOTEBOOK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
