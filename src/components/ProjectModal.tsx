import React, { useState } from 'react';
import type { ProjectItem } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle, 
  Cpu, 
  AlertCircle,
  Play,
  Calculator as CalcIcon
} from 'lucide-react';
import { GitHubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Interactive Calculator Demo State for Project 2
  const [calcInputA, setCalcInputA] = useState<string>('12');
  const [calcInputB, setCalcInputB] = useState<string>('4');
  const [calcOp, setCalcOp] = useState<string>('+');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  if (!project) return null;

  const handleCalculate = () => {
    const a = parseFloat(calcInputA);
    const b = parseFloat(calcInputB);
    if (isNaN(a) || isNaN(b)) {
      setCalcResult('Error: Invalid numerical input');
      return;
    }
    switch (calcOp) {
      case '+':
        setCalcResult(`${a} + ${b} = ${a + b}`);
        break;
      case '-':
        setCalcResult(`${a} - ${b} = ${a - b}`);
        break;
      case '*':
        setCalcResult(`${a} × ${b} = ${a * b}`);
        break;
      case '/':
        if (b === 0) {
          setCalcResult('ZeroDivisionError: Cannot divide by zero');
        } else {
          setCalcResult(`${a} ÷ ${b} = ${a / b}`);
          }
        break;
      default:
        setCalcResult('Unknown operation');
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Status Pill */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            project.isPlaceholder
              ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
              : 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full ${project.isPlaceholder ? 'bg-amber-500' : 'bg-blue-500'}`} />
            {project.status}
          </span>
        </div>

        {/* Modal Title */}
        <h3 id="modal-project-title" className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          {project.title}
        </h3>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Long Description */}
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {project.longDescription || project.shortDescription}
        </p>

        {/* Special Placeholder Detailed Breakdown for Hardware / Electronics */}
        {project.isPlaceholder && project.placeholderDetails && (
          <div className="p-4 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-800/60 space-y-3 mb-6 text-sm">
            <div className="flex items-center gap-2 font-semibold text-amber-800 dark:text-amber-300">
              <Cpu className="w-4 h-4" />
              <span>Configurable Hardware Placeholder</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">Problem Statement: </span>
              <span className="text-slate-600 dark:text-slate-400">{project.placeholderDetails.problemStatement}</span>
            </div>
            <div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">Components: </span>
              <ul className="list-disc list-inside mt-1 space-y-0.5 text-slate-600 dark:text-slate-400">
                {project.placeholderDetails.componentsUsed.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-slate-700 dark:text-slate-200">Circuit & Tools: </span>
              <span className="text-slate-600 dark:text-slate-400">{project.placeholderDetails.circuitOverview} ({project.placeholderDetails.plannedTools.join(', ')})</span>
            </div>
            <div className="text-xs text-amber-700 dark:text-amber-400 italic pt-1">
              Note: {project.placeholderDetails.notes}
            </div>
          </div>
        )}

        {/* Interactive Python Calculator Simulation */}
        {project.id === 'python-calculator' && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              <CalcIcon className="w-4 h-4 text-blue-500" />
              Interactive Calculator Logic Demo
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="number"
                value={calcInputA}
                onChange={(e) => setCalcInputA(e.target.value)}
                className="w-24 px-3 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                placeholder="Number 1"
              />
              <select
                value={calcOp}
                onChange={(e) => setCalcOp(e.target.value)}
                className="px-3 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
              >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">×</option>
                <option value="/">÷</option>
              </select>
              <input
                type="number"
                value={calcInputB}
                onChange={(e) => setCalcInputB(e.target.value)}
                className="w-24 px-3 py-2 rounded-xl text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                placeholder="Number 2"
              />
              <button
                onClick={handleCalculate}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Play className="w-3.5 h-3.5" />
                Compute
              </button>
            </div>
            {calcResult && (
              <div className="mt-3 p-2.5 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs">
                {calcResult}
              </div>
            )}
          </div>
        )}

        {/* Feature Highlights */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Implementation Features
            </h4>
            <ul className="space-y-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              >
                <GitHubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100/60 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-700/50">
                <AlertCircle className="w-3.5 h-3.5" />
                Repository link configurable in data file
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
