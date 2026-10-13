# MD ROUSHAN - Personal Portfolio Website

A modern, responsive, and minimalist personal portfolio website built for **MD ROUSHAN**, a first-year B.Tech student in Electronics and Communication Engineering (ECE) at **JECRC University (JECRCU)**, Jaipur, Rajasthan, India.

---

## 🚀 Live Features

- **Personal & Academic Identity**: Fully authentic profile highlighting B.Tech in Electronics & Communication Engineering at JECRC University, Jaipur.
- **Modern UI/UX**: Clean typography, generous whitespace, subtle borders, and engineering-inspired technical illustrations.
- **Theme Switching**: Seamless light and dark mode with persistence in `localStorage` and zero theme flash on page load (defaults to light mode).
- **Responsive Sticky Navigation**: Includes smooth section scrolling, active section tracking, and an animated mobile drawer menu.
- **Showcase of 4 Projects**:
  1. *Personal Portfolio Website* (Live demo link)
  2. *Python Calculator* (Includes an interactive calculator logic test in modal)
  3. *Programming Practice Projects* (C++, Python, Java algorithmic exercises)
  4. *Electronics & Embedded Systems Project* (Structured editable placeholder for hardware builds)
- **Categorized Skills**: Programming Languages, Web Development, Electronics & Communication, and Libraries/Tools with transparent, honest proficiency levels (*Familiar*, *Learning*, *Academic Study*)—no arbitrary percentage bars.
- **Currently Exploring**: 8 focused engineering topics (DSA, OOP, Python, C++, Web, NumPy, Digital Electronics, Microcontrollers).
- **Direct & Verified Contact**:
  - Real Email: [`szamir034@gmail.com`](mailto:szamir034@gmail.com) with one-click direct `mailto:` handler and "Copy Email" button.
  - Verified LinkedIn: [MD ROUSHAN on LinkedIn](https://www.linkedin.com/in/roushan-zamir-5b2243229/) opening safely in a new tab.
  - Interactive contact form with client-side validation, error messaging, and mailto fallback.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler**: [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons

---

## 📁 Project Structure

```text
├── public/
│   └── favicon.svg              # Custom circuit-monogram SVG favicon
├── src/
│   ├── components/
│   │   ├── BackToTop.tsx        # Smooth floating back-to-top button
│   │   ├── Contact.tsx          # Contact section, validated form, mailto fallback
│   │   ├── CurrentlyLearning.tsx# 8 currently studied engineering domains
│   │   ├── Education.tsx        # JECRC University ECE academic foundation
│   │   ├── Footer.tsx           # Dynamic copyright, quick links, contacts
│   │   ├── Hero.tsx             # Two-column hero with CTAs and verified badges
│   │   ├── Icons.tsx            # Custom SVG icons (LinkedIn, GitHub)
│   │   ├── Navbar.tsx           # Sticky nav, theme switcher, mobile menu
│   │   ├── ProjectModal.tsx     # Detailed specifications & interactive calculator
│   │   ├── Projects.tsx         # Responsive project cards & hardware placeholder
│   │   ├── Skills.tsx           # Categorized skills with filter pills
│   │   └── TechIllustration.tsx # ECE + Software engineering visual card
│   ├── context/
│   │   └── ThemeContext.tsx     # Theme state, light default, localStorage sync
│   ├── data/
│   │   └── portfolioData.ts     # ⭐ CENTRALIZED DATA FILE for all information
│   ├── types/
│   │   └── index.ts             # TypeScript definitions
│   ├── App.tsx                  # Root layout
│   ├── index.css                # Base Tailwind styles, grid pattern, focus rings
│   └── main.tsx                 # Application entry point
├── index.html                   # HTML entry with SEO metadata and anti-flash script
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 💻 Getting Started

### 1. Installation

Ensure Node.js (v18+) is installed. Run:

```bash
npm install
```

### 2. Development Server

Start the local Vite development server:

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build

Compile TypeScript and build the optimized static bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✏️ How to Customize & Update Content

All profile information, project details, skills, and links are kept in a single file:  
`src/data/portfolioData.ts`.

### 1. Updating Personal Information
Edit `personalInfo` in `src/data/portfolioData.ts`:
- Change bio, email, or institution if needed.
- Add your GitHub profile URL by setting `githubUrl: "https://github.com/your-username"`.

### 2. Populating the Electronics Project
In `src/data/portfolioData.ts`, find the project with `id: "electronics-project-placeholder"`. You can replace the title, problem statement, components used, and schematic details with your live hardware build.

### 3. Adding New Skills or Modifying Levels
Modify `skillCategories` in `src/data/portfolioData.ts`. Each skill accepts:
```ts
{ name: "Your Skill", level: "Learning", notes: "Short description" }
```
Supported honest levels: `'Familiar' | 'Learning' | 'Academic Study' | 'Beginner'`.

### 4. Automated Contact Form Backend (Optional)
Currently, the contact form validates all fields and prepares a pre-filled direct email to `szamir034@gmail.com`. If you wish to send emails directly via an automated backend service without opening a mail client:
- **Formspree**: Create a free endpoint at [formspree.io](https://formspree.io) and post the form data using `fetch`.
- **EmailJS**: Setup EmailJS with your service ID and template ID.
- **Web3Forms**: Add your access key.

---

## 🌐 Deployment Instructions

This project is a 100% static React single-page application and can be hosted for free on any modern platform.

### Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **Add New Project**.
3. Import your repository. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Netlify
1. Connect your repository at [Netlify](https://www.netlify.com/).
2. Set:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Click **Deploy Site**.

### Cloudflare Pages
1. Go to Cloudflare Dashboard > **Workers & Pages**.
2. Select **Connect to Git** and choose this repository.
3. Set build configuration:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

---

## 📄 License

Created for **MD ROUSHAN**. Free to use, adapt, and deploy.
