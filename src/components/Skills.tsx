import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Wrench, 
  CheckCircle, 
  HelpCircle,
  Terminal,
  Layers
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return Code2;
      case 'Web Development':
        return Globe;
      case 'Electronics & Communication':
        return Cpu;
      case 'Libraries & Tools':
        return Wrench;
      default:
        return Layers;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Familiar':
        return {
          bg: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60',
          dot: 'bg-emerald-500',
        };
      case 'Learning':
        return {
          bg: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/60',
          dot: 'bg-blue-500',
        };
      case 'Academic Study':
        return {
          bg: 'bg-purple-50 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/60',
          dot: 'bg-purple-500',
        };
      case 'Beginner':
      default:
        return {
          bg: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
          dot: 'bg-slate-400',
        };
    }
  };

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <Terminal className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Technical Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Current technical competencies and academic coursework, honestly tagged with realistic learning stages without arbitrary progress percentages.
          </p>

          {/* Level Legend */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-3 text-xs">
            <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
              Proficiency Guide:
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Familiar (Syntactical & Basic Usage)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Learning (Active Practice)
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
              Academic Study (ECE Coursework)
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.category
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((categoryItem) => {
            const Icon = getCategoryIcon(categoryItem.category);
            return (
              <div
                key={categoryItem.category}
                className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {categoryItem.category}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {categoryItem.description}
                    </p>
                  </div>
                </div>

                {/* Skills List within Category */}
                <div className="mt-6 space-y-3">
                  {categoryItem.skills.map((skill) => {
                    const badge = getLevelBadge(skill.level);
                    return (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/70 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" />
                            {skill.name}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${badge.bg}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                            {skill.level}
                          </span>
                        </div>
                        {skill.notes && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-6">
                            {skill.notes}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
