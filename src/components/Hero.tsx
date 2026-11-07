"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ArrowDown,
  FileText,
  Code2,
  Share2,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Hero() {
  const [coords, setCoords] = useState("POS: CALIBRATED");
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const specimenRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!specimenRef.current) return;
    const rect = specimenRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`,
    });
    setCoords(`POS: ${Math.round(x).toString().padStart(3, "0")} // ${Math.round(y).toString().padStart(3, "0")}`);
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    });
    setCoords("POS: CALIBRATED");
  };

  return (
    <section id="about" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
      {/* Dossier Header Strip */}
      <div className="flex flex-wrap items-center justify-between pb-2 mb-8 text-[#434655] font-mono text-[11px] border-b border-[#e6e2df] gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#0037b0] uppercase font-bold tracking-wider">
            DOSSIER REF // HR-2428
          </span>
          <span aria-hidden="true">/</span>
          <span>IIIT BHAGALPUR · MECHATRONICS &amp; AUTOMATION</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="uppercase tracking-widest text-[#1c1b1a] font-semibold">
            STATUS: ACTIVE · RESEARCH &amp; BUILDS
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Hero Editorial Content (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2.5 self-start px-3 py-1.5 rounded-full bg-[#ece7e5] text-[#1c1b1a] border border-[#e6e2df] transition-colors cursor-default">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-[#1c1b1a]">
              B.TECH MECHATRONICS &amp; AUTOMATION // MINOR IN CSE — IIIT BHAGALPUR
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl text-[#1c1b1a] tracking-tight leading-[1.12] font-semibold">
            {PORTFOLIO_DATA.profile.headlineIntro}
            <br />
            <span className="italic font-serif shimmer-headline font-normal block mt-1">
              {PORTFOLIO_DATA.profile.headlineShimmer}
            </span>
          </h1>

          {/* Paragraphs */}
          <p className="text-base text-[#434655] max-w-2xl leading-relaxed">
            Mechatronics and Automation Engineering scholar at{" "}
            <strong className="text-[#1c1b1a] font-semibold">
              {PORTFOLIO_DATA.profile.shortInstitution}
            </strong>{" "}
            (2024–2028 · CGPA {PORTFOLIO_DATA.profile.cgpa}), with a{" "}
            <strong className="text-[#1c1b1a] font-semibold">
              Minor in Computer Science and Engineering (CSE)
            </strong>
            . Advancing at the intersection of mathematical machine learning, generative orchestration, and physical automation loops.
          </p>

          <p className="text-sm text-[#434655] max-w-xl leading-relaxed">
            {PORTFOLIO_DATA.profile.summaryParagraph2}
          </p>

          {/* Credential Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="px-2.5 py-1 rounded bg-[#0037b0] text-white font-mono text-[11px] font-semibold shadow-xs">
              {PORTFOLIO_DATA.profile.title}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#f2edeb] font-mono text-[11px] text-[#1c1b1a] font-medium border border-[#e6e2df]">
              {PORTFOLIO_DATA.profile.shortInstitution}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#f2edeb] font-mono text-[11px] text-[#1c1b1a] font-medium border border-[#e6e2df]">
              B.Tech {PORTFOLIO_DATA.profile.batch}
            </span>
            <span className="px-2.5 py-1 rounded bg-[#dce1ff] text-[#001551] font-mono text-[11px] font-semibold">
              Minor in CSE
            </span>
            <span className="px-2.5 py-1 rounded bg-[#ffdbce] text-[#370e00] font-mono text-[11px] font-semibold">
              CGPA {PORTFOLIO_DATA.profile.cgpa}
            </span>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded bg-[#1d4ed8] text-white font-medium hover:bg-[#0037b0] active:scale-95 transition-all shadow-[2px_2px_0px_#001551] hover:shadow-[4px_4px_0px_#001551]"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href={PORTFOLIO_DATA.profile.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-3 rounded bg-[#f2edeb] hover:bg-[#ece7e5] active:scale-95 text-[#1c1b1a] font-mono text-xs uppercase transition-all border border-[#e6e2df] hover:border-[#747686]"
            >
              <FileText className="w-4 h-4 text-[#0037b0] group-hover:rotate-12 transition-transform" />
              <span>Download Resume</span>
              <span className="px-1.5 py-0.5 rounded bg-[#e6e2df] text-[#434655] text-[10px] font-mono font-medium">
                PDF
              </span>
            </a>
          </div>

          {/* Social Quicklinks */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <span className="font-mono text-[11px] text-[#434655] font-semibold uppercase tracking-wider">
              CHANNELS:
            </span>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#f7f3f0] hover:bg-[#f2edeb] hover:-translate-y-0.5 text-[#1c1b1a] font-mono text-xs transition-all border border-[#e6e2df]"
            >
              <Code2 className="w-3.5 h-3.5 text-[#0037b0]" />
              <span>GitHub</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#f7f3f0] hover:bg-[#f2edeb] hover:-translate-y-0.5 text-[#1c1b1a] font-mono text-xs transition-all border border-[#e6e2df]"
            >
              <Share2 className="w-3.5 h-3.5 text-[#0037b0]" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PORTFOLIO_DATA.profile.codolio}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#f7f3f0] hover:bg-[#f2edeb] hover:-translate-y-0.5 text-[#1c1b1a] font-mono text-xs transition-all border border-[#e6e2df]"
            >
              <Terminal className="w-3.5 h-3.5 text-[#0037b0]" />
              <span>Codolio (200+ DSA)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Blueprint Specimen (5 Cols) */}
        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
          {/* Subtle Shadow backing */}
          <div className="absolute inset-0 bg-[#ece7e5] rounded translate-x-3 translate-y-3 -z-10 shadow-sm" />

          <div
            ref={specimenRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={tiltStyle}
            className="bg-white p-5 sm:p-6 rounded relative shadow-md border border-[#e6e2df] transition-transform duration-150 ease-out"
          >
            {/* Technical Crosshairs */}
            <div className="absolute top-2 left-2 font-mono text-[10px] text-[#c4c5d7] select-none">
              + [0, 0]
            </div>
            <div className="absolute top-2 right-2 font-mono text-[10px] text-[#c4c5d7] select-none">
              [w, 0] +
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[10px] text-[#c4c5d7] select-none">
              + [0, h]
            </div>
            <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#c4c5d7] select-none">
              [w, h] +
            </div>

            {/* Specimen Header */}
            <div className="flex items-center justify-between mb-4 pb-2 bg-[#f7f3f0] px-3 py-1.5 rounded border border-[#e6e2df]">
              <span className="font-mono text-xs font-bold text-[#0037b0] uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0037b0] animate-ping" />
                PLATE_SPECIMEN // 001
              </span>
              <span className="font-mono text-[11px] text-[#434655]">
                ASPECT: 4:5 · MONOGRAPH
              </span>
            </div>

            {/* Specimen Portrait Container (4:5 Ratio) */}
            <div className="relative w-full aspect-[4/5] rounded overflow-hidden bg-[#f7f3f0] flex flex-col justify-between border border-[#e6e2df] group">
              {/* Technical SVG Grid Overlay */}
              <svg
                className="absolute inset-0 w-full h-full text-[#ece7e5] opacity-60 pointer-events-none z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="grid-pattern-hero"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 24 0 L 0 0 0 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                    />
                    <circle cx="0" cy="0" r="1.5" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern-hero)" />
              </svg>

              {/* Radar Scanline Animation */}
              <div
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0037b0] to-transparent animate-scan pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Portrait Image */}
              <div className="relative w-full h-full">
                <Image
                  src={PORTFOLIO_DATA.profile.portraitPath}
                  alt="Portrait photograph of Harsh Raj"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top select-none group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>

              {/* Identity Overlay Pill at Bottom of Photo */}
              <div className="absolute bottom-10 left-3 right-3 z-20 flex justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1c1b1a]/85 backdrop-blur-md text-white font-mono text-[11px] border border-white/20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>HARSH RAJ // IIIT BHAGALPUR</span>
                </div>
              </div>

              {/* Technical Telemetry Footer Strip */}
              <div className="relative z-20 w-full flex items-center justify-between font-mono text-[10px] sm:text-[11px] text-[#434655] bg-white/95 backdrop-blur-sm px-3 py-1.5 border-t border-[#e6e2df]">
                <span className="text-[#1c1b1a] font-medium">{coords}</span>
                <span>IIIT-BGP // MECHATRONICS</span>
              </div>
            </div>

            {/* Specimen Outer Footer */}
            <div className="mt-4 pt-3 flex items-center justify-between font-mono text-[11px] text-[#434655] border-t border-[#e6e2df]">
              <span>RESEARCH: MULTI-AGENT / RL / ML</span>
              <span className="text-[#a73a00] font-semibold">2024–2028 BATCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
