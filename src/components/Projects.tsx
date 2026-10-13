import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import type { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  Cpu, 
  Code, 
  Calculator, 
  Sparkles, 
  ArrowRight,
  Edit3
} from 'lucide-react';
import { GitHubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (id: string, isPlaceholder?: boolean) => {
    if (isPlaceholder) return Cpu;
    if (id === 'portfolio-website') return Sparkles;
    if (id === 'python-calculator') return Calculator;
    return Code;
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Applied Engineering & Code
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Projects I've Worked On
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            A portfolio of practical programming builds, foundational problem-solving exercises, and a structured placeholder for hardware electronics explorations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => {
            const Icon = getProjectIcon(project.id, project.isPlaceholder);

            return (
              <div
                key={project.id}
                className={`flex flex-col bg-white dark:bg-slate-900 border rounded-3xl p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  project.isPlaceholder
                    ? 'border-dashed border-amber-300 dark:border-amber-700/80 bg-amber-50/20 dark:bg-amber-950/10'
                    : 'border-slate-200/90 dark:border-slate-800/90 hover:border-blue-400 dark:hover:border-blue-600'
                }`}
              >
                {/* Card Top: Visual Badge & Status */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                    project.isPlaceholder
                      ? 'bg-amber-100/80 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800'
                      : 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/50'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                    project.isPlaceholder
                      ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800'
                      : 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${project.isPlaceholder ? 'bg-amber-500 animate-pulse' : 'bg-blue-500'}`} />
                    {project.status}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                    <span>{project.title}</span>
                    {project.isPlaceholder && (
                      <span className="text-[11px] font-normal text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/40 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Edit3 className="w-3 h-3" />
                        Editable Slot
                      </span>
                    )}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2 pb-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Row */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {/* Live Demo button: Only rendered if a valid demo exists! */}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {/* GitHub button: Shown if URL configured, otherwise labeled */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100/60 dark:bg-slate-800/60 hover:bg-slate-200/60 transition-colors"
                        title="Repository link can be populated in src/data/portfolioData.ts"
                      >
                        <span>Details</span>
                      </button>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Note on Projects Data */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            All project data, descriptions, and repository URLs are centrally managed in{' '}
            <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-slate-700 dark:text-slate-300">
              src/data/portfolioData.ts
            </code>{' '}
            for effortless updates.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
