"use client";

import { profile, skills, experience, projects, education, certifications } from "./data";

/* ─── Nav ──────────────────────────────────────────────────────────────── */
function Navbar() {
  const links = ["Skills", "Experience", "Projects", "Education", "Contact"];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="font-mono text-sm text-indigo-400">{profile.name.toLowerCase().replace(" ", ".")}</span>
        <ul className="hidden gap-6 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-sm text-zinc-400 transition hover:text-zinc-100"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md border border-indigo-500 px-4 py-1.5 text-sm text-indigo-400 transition hover:bg-indigo-500 hover:text-white"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Subtle glow blob */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      <p className="mb-3 font-mono text-sm text-indigo-400">Hello, I&apos;m</p>
      <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
        <span className="gradient-text">{profile.name}</span>
      </h1>
      <h2 className="mb-6 text-xl font-medium text-zinc-400 md:text-2xl">{profile.title}</h2>
      <p className="mb-10 max-w-xl text-zinc-500">{profile.tagline}</p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:text-white"
        >
          Contact Me
        </a>
      </div>

      {/* Social links */}
      <div className="mt-12 flex gap-5">
        <a href={profile.github} target="_blank" rel="noreferrer" className="text-zinc-500 transition hover:text-zinc-200">
          <GithubIcon />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 transition hover:text-zinc-200">
          <LinkedinIcon />
        </a>
        <a href={`mailto:${profile.email}`} className="text-zinc-500 transition hover:text-zinc-200">
          <MailIcon />
        </a>
      </div>
    </section>
  );
}

/* ─── Skills ────────────────────────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="What I Know" title="Skills" />
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {skills.map((group) => (
          <div
            key={group.category}
            className="card-hover rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-zinc-700 bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Experience ────────────────────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="Where I've Worked" title="Experience" />
      <div className="mt-12 space-y-8">
        {experience.map((job, i) => (
          <div
            key={i}
            className="card-hover relative rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 pl-8"
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-6 h-10 w-1 rounded-full bg-indigo-500" />
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-lg font-semibold text-zinc-100">{job.role}</span>
                <span className="ml-2 text-zinc-400">@ {job.company}</span>
              </div>
              <span className="font-mono text-xs text-zinc-500">{job.period}</span>
            </div>
            <p className="mb-3 text-xs text-zinc-500">{job.location}</p>
            <ul className="space-y-1.5">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 text-sm text-zinc-400">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-500" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Projects ──────────────────────────────────────────────────────────── */
function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="What I've Built" title="Projects" />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={i}
            className="card-hover flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/60 p-6"
          >
            <div className="mb-2 flex items-start justify-between">
              <FolderIcon />
              <div className="flex gap-3">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-200">
                    <GithubIcon size={18} />
                  </a>
                )}
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-200">
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
            <h3 className="mt-4 mb-2 font-semibold text-zinc-100">{p.title}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500">{p.description}</p>
            <ul className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <li key={t} className="font-mono text-xs text-indigo-400">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Education ─────────────────────────────────────────────────────────── */
function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="Academic Background" title="Education" />
      <div className="mt-12 space-y-6">
        {education.map((edu, i) => (
          <div key={i} className="card-hover rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-semibold text-zinc-100">{edu.degree}</h3>
                <p className="text-sm text-indigo-400">{edu.institution}</p>
              </div>
              <span className="font-mono text-xs text-zinc-500">{edu.period}</span>
            </div>
            {edu.note && <p className="mt-3 text-sm text-zinc-500">{edu.note}</p>}
          </div>
        ))}

        <div className="card-hover rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Certifications
          </h3>
          <ul className="space-y-2">
            {certifications.map((cert, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-zinc-400">
                <span className="text-indigo-500">✓</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ───────────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <SectionHeader label="Get In Touch" title="Contact" />
      <div className="mt-12 flex flex-col items-center text-center">
        <p className="mb-8 max-w-md text-zinc-500">
          I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mb-10 rounded-lg bg-indigo-600 px-8 py-3 font-medium text-white transition hover:bg-indigo-500"
        >
          Say Hello
        </a>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-200">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-zinc-500 transition hover:text-zinc-200">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
          <span className="flex items-center gap-2 text-sm text-zinc-500">
            <MailIcon size={16} /> {profile.email}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 text-center">
      <p className="font-mono text-xs text-zinc-600">
        Built with Next.js &amp; Tailwind CSS · {new Date().getFullYear()}
      </p>
    </footer>
  );
}

/* ─── Shared: Section Header ────────────────────────────────────────────── */
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div>
        <p className="mb-1 font-mono text-xs text-indigo-400">{label}</p>
        <h2 className="text-3xl font-bold text-zinc-100 md:text-4xl">{title}</h2>
      </div>
      <div className="mt-4 h-px flex-1 bg-zinc-800" />
    </div>
  );
}

/* ─── Icons (inline SVGs, no extra deps) ────────────────────────────────── */
function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5">
      <path d="M3 7a2 2 0 012-2h3.586a1 1 0 01.707.293L10.414 6.5A1 1 0 0011.121 6.793H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    </svg>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
