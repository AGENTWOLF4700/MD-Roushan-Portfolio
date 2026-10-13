import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { Mail, Cpu, ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-sm shadow-blue-500/20">
                MR
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
                {personalInfo.fullName}
              </span>
            </div>
            
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
              "{personalInfo.tagline}"
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              First-year B.Tech in Electronics and Communication Engineering at {personalInfo.institution}, Jaipur, India.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Back to top */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Connect Directly
            </div>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span className="truncate">{personalInfo.email}</span>
              </a>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-[#0A66C2] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn Profile</span>
              </a>

              {personalInfo.githubUrl && (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </a>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright bar */}
        <div className="mt-12 pt-6 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            © {currentYear} {personalInfo.fullName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with focus on ECE & software engineering</span>
            <Cpu className="w-3.5 h-3.5 text-blue-500 ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
