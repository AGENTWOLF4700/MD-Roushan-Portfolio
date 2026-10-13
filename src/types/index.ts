export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Learning' | 'Familiar' | 'Academic Study';
  icon?: string;
  notes?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  technologies: string[];
  status: 'Completed' | 'In Progress' | 'Planned / Editable Placeholder';
  isPlaceholder?: boolean;
  githubUrl?: string | null;
  liveDemoUrl?: string | null;
  features?: string[];
  placeholderDetails?: {
    problemStatement: string;
    componentsUsed: string[];
    circuitOverview: string;
    plannedTools: string[];
    notes: string;
  };
}

export interface EducationItem {
  institution: string;
  institutionShort: string;
  degree: string;
  branch: string;
  academicYear: string;
  location: string;
  status: string;
  summary: string;
  keyTopics: string[];
}

export interface LearningTopic {
  title: string;
  description: string;
  category: 'Software' | 'Electronics' | 'Mathematics & Logic';
  icon: string;
}

export interface PersonalInfo {
  fullName: string;
  shortName: string;
  tagline: string;
  heroHeadline: string;
  heroAccentPhrase: string;
  heroBio: string;
  aboutBio: string;
  institution: string;
  institutionShort: string;
  location: string;
  degree: string;
  branch: string;
  academicStatus: string;
  email: string;
  linkedInUrl: string;
  githubUrl: string | null; // Configurable: null if not yet linked
  statusBadge: string;
  openToBadge: string;
}
