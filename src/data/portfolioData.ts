import type { PersonalInfo, SkillCategory, ProjectItem, EducationItem, LearningTopic } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: "MD ROUSHAN",
  shortName: "ROUSHAN",
  tagline: "Learning, building, and improving every day.",
  heroHeadline: "Aspiring Software Engineer &",
  heroAccentPhrase: "Technology Enthusiast",
  heroBio: "I'm MD ROUSHAN, a first-year B.Tech student in Electronics and Communication Engineering at JECRC University, Jaipur. I'm passionate about programming, software development, electronics, and emerging technologies. I enjoy learning new concepts, solving problems, and building projects that turn ideas into practical solutions.",
  aboutBio: "I'm currently pursuing a Bachelor of Technology in Electronics and Communication Engineering at JECRC University, Jaipur. Alongside my academic studies, I'm exploring programming, software development, and modern technologies. I enjoy understanding how things work, solving logical problems, and applying what I learn through practical projects. My goal is to continuously develop my technical skills and grow into a capable software engineer.",
  institution: "JECRC University (JECRCU)",
  institutionShort: "JECRC University",
  location: "Jaipur, Rajasthan, India",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Electronics and Communication Engineering (ECE)",
  academicStatus: "First-year student",
  email: "szamir034@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/roushan-zamir-5b2243229/",
  githubUrl: null, // Set your GitHub profile URL here when available, e.g. "https://github.com/your-username"
  statusBadge: "ECE Student @ JECRC University",
  openToBadge: "Open to Learning & Collaboration",
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Foundational and object-oriented programming languages being actively studied and practiced.",
    skills: [
      { name: "C", level: "Familiar", notes: "Procedural programming & memory fundamentals" },
      { name: "C++", level: "Familiar", notes: "Object-oriented programming concepts & syntax" },
      { name: "Python", level: "Learning", notes: "Scripting, algorithmic logic & problem-solving" },
      { name: "Java", level: "Learning", notes: "Core OOP concepts & class-based programming" },
    ],
  },
  {
    category: "Web Development",
    description: "Core technologies for creating clean, responsive, and functional web interfaces.",
    skills: [
      { name: "HTML", level: "Familiar", notes: "Semantic document structure & web layout basics" },
      { name: "CSS", level: "Familiar", notes: "Responsive styling, Flexbox, Grid & UI design" },
      { name: "JavaScript", level: "Learning", notes: "Interactive client-side scripting & DOM manipulation" },
    ],
  },
  {
    category: "Electronics & Communication",
    description: "Foundational engineering subjects in hardware, logic design, and signals.",
    skills: [
      { name: "Basic Electronics", level: "Academic Study", notes: "Semiconductor devices, diodes & transistors" },
      { name: "Digital Logic Fundamentals", level: "Academic Study", notes: "Boolean algebra, logic gates & combinational circuits" },
      { name: "Communication Systems Fundamentals", level: "Academic Study", notes: "Modulation principles & signal transmission concepts" },
      { name: "Circuit Analysis Fundamentals", level: "Academic Study", notes: "Kirchhoff's laws, nodal analysis & passive components" },
    ],
  },
  {
    category: "Libraries & Tools",
    description: "Software tools, libraries, and development environments utilized in daily workflows.",
    skills: [
      { name: "NumPy", level: "Learning", notes: "Array manipulation & numerical computing in Python" },
      { name: "Git", level: "Familiar", notes: "Version control fundamentals & commit tracking" },
      { name: "GitHub", level: "Familiar", notes: "Repository hosting & code collaboration" },
      { name: "Visual Studio / VS Code", level: "Familiar", notes: "Integrated code editor & debugging workflow" },
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    shortDescription: "A responsive personal portfolio website designed to showcase my background, technical skills, projects, and contact information in a professional format.",
    longDescription: "Designed with modern UI/UX principles, semantic HTML, and responsive layouts across desktop, tablet, and mobile devices. Features theme switching (light/dark mode), smooth navigation, structured project showcases, and accessible contact methods.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
    status: "Completed",
    isPlaceholder: false,
    githubUrl: null, // Update with repository URL once published
    liveDemoUrl: "#home", // Links to top of the current live site
    features: [
      "Light and Dark mode with persistence in local storage",
      "Fully responsive design adapting to all screen resolutions",
      "Centralized editable data store for simple maintenance",
      "Interactive contact form with real email validation and mailto fallback",
      "Accessible navigation with active section indicator",
    ],
  },
  {
    id: "python-calculator",
    title: "Python Calculator",
    shortDescription: "A simple calculator application developed to practise programming fundamentals, arithmetic operations, and basic problem-solving.",
    longDescription: "A software application built in Python focusing on clean input processing, arithmetic operations, error prevention (such as division by zero), and modular function organization.",
    technologies: ["Python"],
    status: "Completed",
    isPlaceholder: false,
    githubUrl: null, // Update when uploaded to GitHub
    liveDemoUrl: null,
    features: [
      "Performs addition, subtraction, multiplication, and division operations",
      "Input validation and divide-by-zero exception handling",
      "Modular design separating computation logic from interface",
      "Interactive CLI interface allowing repeated calculations",
    ],
  },
  {
    id: "programming-practice",
    title: "Programming Practice Projects",
    shortDescription: "A collection of small programming exercises and projects created to strengthen coding fundamentals, logical thinking, and problem-solving skills.",
    longDescription: "Ongoing series of coding exercises implemented across multiple languages to build algorithmic intuition, master standard control flow structures, and practice data manipulation.",
    technologies: ["C++", "Python", "Java"],
    status: "In Progress",
    isPlaceholder: false,
    githubUrl: null, // Update with practice repo link
    liveDemoUrl: null,
    features: [
      "Number theory and pattern generation algorithms in C++",
      "String parsing and data structure experiments in Python",
      "Object-oriented class hierarchies and inheritance models in Java",
      "Continuous algorithmic problem-solving practice",
    ],
  },
  {
    id: "electronics-project-placeholder",
    title: "Electronics & Embedded Systems Project",
    shortDescription: "An upcoming hardware engineering project exploring circuit design, microcontrollers, and sensor integration.",
    longDescription: "This slot is prepared for an upcoming electronics and embedded systems project. All details including problem statement, components, schematics, and code are ready to be populated as the build progresses.",
    technologies: ["Microcontrollers", "Sensors", "Circuit Design", "C / C++"],
    status: "Planned / Editable Placeholder",
    isPlaceholder: true,
    githubUrl: null,
    liveDemoUrl: null,
    placeholderDetails: {
      problemStatement: "Design a sensor-driven embedded system to monitor and respond to environmental parameters.",
      componentsUsed: [
        "Microcontroller (e.g., Arduino / ESP32 or 8051)",
        "Sensors (Temperature / Ultrasonic / Light)",
        "Output indicators (LCD Display / LEDs / Buzzer)",
        "Passive discrete components (Resistors, Capacitors)",
      ],
      circuitOverview: "Breadboard prototyping stage with schematic diagram to be documented.",
      plannedTools: ["Tinkercad / Proteus", "Arduino IDE / Keil", "Multimeter"],
      notes: "Edit this entry in 'src/data/portfolioData.ts' to replace with your live hardware project details once ready.",
    },
  },
];

export const educationData: EducationItem = {
  institution: "JECRC University (JECRCU)",
  institutionShort: "JECRC University",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Electronics and Communication Engineering (ECE)",
  academicYear: "First Year",
  location: "Jaipur, Rajasthan, India",
  status: "Currently Pursuing",
  summary: "Enrolled in the foundational curriculum covering basic electrical sciences, digital logic, engineering mathematics, and introductory computer programming.",
  keyTopics: [
    "Programming in C & Algorithmic Problem Solving",
    "Digital Logic Design & Switching Theory",
    "Basic Electronics & Semiconductor Physics",
    "Engineering Mathematics & Differential Equations",
    "Circuit Theory & Network Analysis",
    "Communication Systems Fundamentals",
  ],
};

export const learningTopics: LearningTopic[] = [
  {
    title: "Data Structures & Algorithms",
    description: "Understanding arrays, linked lists, stacks, queues, and foundational searching and sorting techniques.",
    category: "Software",
    icon: "Binary",
  },
  {
    title: "Object-Oriented Programming",
    description: "Studying encapsulation, inheritance, polymorphism, and abstraction principles in C++ and Java.",
    category: "Software",
    icon: "Boxes",
  },
  {
    title: "Python Programming",
    description: "Developing clean scripting practices, standard library proficiency, and practical utility scripts.",
    category: "Software",
    icon: "Code2",
  },
  {
    title: "C++ Programming",
    description: "Strengthening low-level system understanding, pointers, standard template library (STL), and speed.",
    category: "Software",
    icon: "Terminal",
  },
  {
    title: "Web Development",
    description: "Building responsive, user-friendly modern interfaces using HTML, CSS, JavaScript, and React.",
    category: "Software",
    icon: "Layout",
  },
  {
    title: "NumPy & Numerical Computing",
    description: "Exploring multi-dimensional arrays, vectorized operations, and scientific calculation in Python.",
    category: "Software",
    icon: "Cpu",
  },
  {
    title: "Digital Electronics",
    description: "Analyzing Boolean algebra, Karnaugh maps, combinational logic, and sequential circuit state machines.",
    category: "Electronics",
    icon: "Radio",
  },
  {
    title: "Microcontrollers & Embedded Systems",
    description: "Studying microcontroller architecture, GPIO pin interfacing, interrupts, and hardware firmware.",
    category: "Electronics",
    icon: "CircuitBoard",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Learning", href: "#learning" },
  { name: "Contact", href: "#contact" },
];
