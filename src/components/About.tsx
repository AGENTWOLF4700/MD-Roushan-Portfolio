import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  GraduationCap, 
  Code, 
  Cpu, 
  Lightbulb, 
  TrendingUp, 
  MapPin, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "B.Tech ECE at JECRC University",
      description: "Currently pursuing a Bachelor of Technology in Electronics and Communication Engineering at JECRC University, Jaipur.",
      accent: "blue",
    },
    {
      icon: Code,
      title: "Software Engineering & Programming",
      description: "Passionate about programming, software development, algorithms, and clean modern code architectures.",
      accent: "indigo",
    },
    {
      icon: Cpu,
      title: "Electronics & Communication",
      description: "Exploring foundational hardware concepts, circuit analysis, digital logic, and signal communication systems.",
      accent: "violet",
    },
    {
      icon: Lightbulb,
      title: "Practical Coding & Projects",
      description: "Reinforcing academic and technical theory through structured coding practice, labs, and personal builds.",
      accent: "amber",
    },
    {
      icon: TrendingUp,
      title: "Problem Solving & Continuous Growth",
      description: "Dedicated to continuous skill development, algorithmic logic refinement, and evolving into a well-rounded engineer.",
      accent: "emerald",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            A Little About Me
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A grounded overview of my academic foundation, technical curiosities, and engineering journey.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Biography Card */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              Engineering Journey
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg mb-6">
              {personalInfo.aboutBio}
            </p>

            {/* Quick Context Details Box */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                  Academic Status
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  First-Year B.Tech (ECE)
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {personalInfo.institution}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  Location
                </div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Rajasthan, India
                </div>
              </div>
            </div>

            {/* Core Values Tag List */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Core Principles
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Strong Fundamentals",
                  "Honest Self-Assessment",
                  "Hands-on Prototyping",
                  "Iterative Learning",
                  "Logic-Driven Design",
                ].map((principle) => (
                  <span
                    key={principle}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-500" />
                    {principle}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Areas Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-blue-800/80 rounded-2xl p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
