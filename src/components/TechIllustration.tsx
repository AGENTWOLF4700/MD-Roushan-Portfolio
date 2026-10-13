import React from 'react';
import { Cpu, Terminal, Zap, Compass, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const TechIllustration: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-2 sm:p-4">
      {/* Decorative backdrop glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 dark:opacity-50 pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden">
        
        {/* Subtle SVG Circuit & Grid Matrix */}
        <div className="absolute inset-0 opacity-15 dark:opacity-20 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.7" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
            {/* Circuit traces */}
            <path d="M 20 80 H 90 V 160 H 180" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M 320 60 H 260 V 130 H 210" fill="none" stroke="#4f46e5" strokeWidth="1.5" strokeDasharray="3 3" />
            <circle cx="180" cy="160" r="4" fill="#2563eb" />
            <circle cx="210" cy="130" r="4" fill="#4f46e5" />
          </svg>
        </div>

        {/* Top Header of the Visual Card */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 dark:text-slate-500">ece_software.ts</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Active Learner
          </span>
        </div>

        {/* Center Profile Visual & Identity Badge */}
        <div className="flex flex-col sm:flex-row items-center gap-5 my-4">
          {/* Stylized Identity Monogram / Custom Photo Placeholder */}
          <div className="relative group shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-0.5 shadow-md shadow-blue-500/20">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[14px] flex flex-col items-center justify-center p-2 text-center">
                <span className="text-3xl font-black bg-gradient-to-tr from-blue-600 to-indigo-500 bg-clip-text text-transparent tracking-tighter">
                  MR
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                  ECE • JECRCU
                </span>
              </div>
            </div>
            {/* Tech badge icon overlay */}
            <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-lg shadow-sm border-2 border-white dark:border-slate-900">
              <Cpu className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Quick info snippet */}
          <div className="flex-1 text-center sm:text-left space-y-1.5">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <Zap className="w-3.5 h-3.5" />
              <span>{personalInfo.statusBadge}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              {personalInfo.fullName}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
              B.Tech ECE (1st Year) • Programming, Hardware Logic & Problem Solving
            </p>
            <div className="pt-1 flex flex-wrap gap-1.5 justify-center sm:justify-start">
              <span className="px-2 py-0.5 rounded-md text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                Jaipur, India
              </span>
              <span className="px-2 py-0.5 rounded-md text-[11px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {personalInfo.openToBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Code / Circuit Logic Visual Snippet */}
        <div className="mt-4 rounded-xl bg-slate-900 text-slate-200 p-3.5 font-mono text-xs border border-slate-800 shadow-inner overflow-x-auto">
          <div className="text-slate-400 text-[10px] mb-1 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span>// Core Focus Architecture</span>
          </div>
          <div className="space-y-0.5 text-[11px] leading-5">
            <div>
              <span className="text-pink-400">const</span>{' '}
              <span className="text-blue-300">studentProfile</span> = &#123;
            </div>
            <div className="pl-4">
              <span className="text-slate-400">discipline:</span>{' '}
              <span className="text-amber-300">"Electronics & Communication"</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">interests:</span>{' '}
              <span className="text-sky-300">[</span>
              <span className="text-emerald-300">"Algorithms"</span>,{' '}
              <span className="text-emerald-300">"Embedded"</span>,{' '}
              <span className="text-emerald-300">"Web"</span>
              <span className="text-sky-300">]</span>,
            </div>
            <div className="pl-4">
              <span className="text-slate-400">status:</span>{' '}
              <span className="text-emerald-300">"Active Learner & Builder"</span>
            </div>
            <div>&#125;;</div>
          </div>
        </div>

        {/* Bottom subtle hardware & software pillars */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3 text-blue-500" />
            Digital Logic & Circuits
          </span>
          <span className="flex items-center gap-1">
            <Compass className="w-3 h-3 text-indigo-500" />
            Software Development
          </span>
        </div>
      </div>
    </div>
  );
};
