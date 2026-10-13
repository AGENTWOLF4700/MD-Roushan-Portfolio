import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  Compass 
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Academic Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Current undergraduate degree program and core academic disciplines being studied.
          </p>
        </div>

        {/* Education Highlight Card / Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800/90 rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-md transition-shadow">
            
            {/* Top Row: Institution + Status Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/50">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    {educationData.institution}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-500" />
                      {educationData.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      {educationData.academicYear}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="self-start sm:self-center">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200/70 dark:border-emerald-800/70">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {educationData.status}
                </span>
              </div>
            </div>

            {/* Degree and Branch Focus */}
            <div className="space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Degree & Specialization
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 flex-wrap">
                  <span>{educationData.degree}</span>
                  <span className="text-slate-400">—</span>
                  <span className="text-blue-600 dark:text-blue-400">{educationData.branch}</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                {educationData.summary}
              </p>

              {/* Foundational Coursework Grid */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-500" />
                  Foundational Coursework & Curricular Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {educationData.keyTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/70 flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Note */}
              <div className="pt-4 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-slate-400" />
                <span>
                  All academic records, coursework, and future milestones remain easily editable in centralized configuration.
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
