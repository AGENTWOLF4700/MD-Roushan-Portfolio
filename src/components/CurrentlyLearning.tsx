import React from 'react';
import { learningTopics } from '../data/portfolioData';
import { 
  Compass, 
  Binary, 
  Boxes, 
  Code2, 
  Terminal, 
  Layout, 
  Cpu, 
  Radio, 
  CircuitBoard,
  BookMarked
} from 'lucide-react';

export const CurrentlyLearning: React.FC = () => {
  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary': return Binary;
      case 'Boxes': return Boxes;
      case 'Code2': return Code2;
      case 'Terminal': return Terminal;
      case 'Layout': return Layout;
      case 'Cpu': return Cpu;
      case 'Radio': return Radio;
      case 'CircuitBoard': return CircuitBoard;
      default: return Compass;
    }
  };

  return (
    <section id="learning" className="py-20 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            Active Horizons
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Currently Exploring
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Active subjects and engineering domains currently under study, practicing fundamentals, and expanding hands-on familiarity.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {learningTopics.map((topic, idx) => {
            const Icon = getTopicIcon(topic.icon);
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-300 dark:hover:border-blue-700 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-100 dark:border-blue-900/50 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {topic.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {topic.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-medium text-blue-600 dark:text-blue-400">
                  <BookMarked className="w-3 h-3" />
                  <span>In Active Study</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
