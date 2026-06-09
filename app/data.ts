export const profile = {
  name: "Your Name",
  title: "Full Stack Developer",
  tagline: "I build clean, scalable web applications with a focus on great user experience.",
  email: "yourname@email.com",
  linkedin: "https://linkedin.com/in/yourhandle",
  github: "https://github.com/yourhandle",
  location: "Kuala Lumpur, Malaysia",
};

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "REST API", "PostgreSQL", "MongoDB"] },
  { category: "Tools & Others", items: ["Git", "Docker", "Figma", "CI/CD", "Linux"] },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Company Name",
    period: "Jan 2023 — Present",
    location: "Kuala Lumpur, Malaysia",
    bullets: [
      "Built and maintained full-stack web applications serving 10k+ users.",
      "Reduced page load time by 40% through code splitting and caching strategies.",
      "Collaborated with cross-functional teams using Agile/Scrum methodology.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Startup Co.",
    period: "Jun 2022 — Dec 2022",
    location: "Remote",
    bullets: [
      "Developed responsive UI components using React and Tailwind CSS.",
      "Integrated third-party APIs and wrote unit tests with Jest.",
    ],
  },
];

export const projects = [
  {
    title: "Project Alpha",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment integration, and an admin dashboard.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourhandle/project-alpha",
    live: "https://project-alpha.vercel.app",
  },
  {
    title: "Task Manager App",
    description:
      "A Kanban-style task management app with drag-and-drop, real-time updates, and team collaboration features.",
    tech: ["React", "TypeScript", "Socket.io", "MongoDB"],
    github: "https://github.com/yourhandle/task-manager",
    live: "",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that visualizes forecasts with interactive charts and location-based search.",
    tech: ["Next.js", "Tailwind CSS", "OpenWeather API", "Chart.js"],
    github: "https://github.com/yourhandle/weather-dash",
    live: "https://weather-dash.vercel.app",
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Universiti Teknologi Malaysia",
    period: "2019 — 2023",
    note: "Majored in Software Engineering. CGPA: 3.7/4.0",
  },
];

export const certifications = [
  "AWS Certified Developer — Associate",
  "Meta Front-End Developer Certificate (Coursera)",
];
