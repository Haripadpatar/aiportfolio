"use client"

import React from "react";

    export default function Page() {
  // ...




  const projects = [
    {
      title: "Hunny Web App",
      desc: "Simple frontend project deployed on Vercel — image compressor and demo.",
      url: "https://hunny.vercel.app",
      github: "https://github.com/Haripadpatar/hunny",
    },
    {
      title: "Image Compressor",
      desc: "Client-side image optimization demo built with Next + Tailwind.",
      url: "#",
      github: "#",
    },
    {
      title: "AI Resume Analyzer",
      desc: "A small ML-powered resume scoring demo (concept).",
      url: "#",
      github: "#",
    },
  ];

  const skills = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "Machine Learning",
  ];

  const socials = {
    linkedin: "https://www.linkedin.com/in/haripadpatar/",
    github: "https://github.com/Haripadpatar",
    twitter: "https://twitter.com/",
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070617] via-[#0f1220] to-[#08111a] text-white antialiased">
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-lg font-semibold">Haripad</div>
        <div className="hidden md:flex gap-6 items-center text-sm text-gray-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* HERO */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_10px_30px_rgba(99,102,241,0.12)]">
              Haripad Patar
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              AI Engineer & Web Developer — building fast web apps and neat ML demos.
            </p>

            <p className="mt-4 text-gray-400">About — I build web apps and small ML demos to solve real problems. I'm focused on performance, clean UIs and deploy-ready projects.</p>

            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-5 py-2 rounded-full font-medium shadow-md hover:brightness-110 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-full text-gray-200 hover:border-gray-500 transition"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="ml-auto flex items-center gap-4">
            {/* Profile image: put your image at public/profile.jpg or replace the src with an external URL */}
            <img
              src="/profile.jpg"
              onError={(e) => {
                // fallback to small gradient box
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = "none";
              }}
              alt="Profile"
              className="w-36 h-36 rounded-2xl object-cover border border-white/5 bg-gradient-to-tr from-[#0ea5a4]/20 to-[#7c3aed]/12"
            />

            <div className="hidden md:flex flex-col text-right">
              <span className="text-sm text-gray-400">Connect</span>
              <div className="mt-2 flex gap-2 justify-end">
                <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full bg-white/6">LinkedIn</a>
                <a href={socials.github} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 rounded-full bg-white/6">GitHub</a>
              </div>
            </div>
          </aside>
        </header>

        {/* SKILLS */}
        <section id="skills" className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-sm text-gray-200"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <p className="text-sm text-gray-400">Selected projects, demos & experiments</p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.title}
                className="p-6 rounded-2xl bg-gradient-to-b from-white/2 to-transparent border border-white/6 hover:scale-[1.01] transition shadow-lg"
              >
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{p.desc}</p>

                <div className="mt-4 flex gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-3 py-1 rounded-full bg-white/6 hover:bg-white/8"
                  >
                    View
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm px-3 py-1 rounded-full border border-white/6 text-gray-200"
                  >
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-16 bg-white/3 p-6 rounded-2xl border border-white/6">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-gray-300">Want to work together or see my code? Reach out.</p>

          <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-300">Email</p>
              <a href="mailto:your.email@example.com" className="text-white font-medium">
                your.email@example.com
              </a>
            </div>

            <div className="flex gap-3">
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-full bg-white/6">LinkedIn</a>
              <a href={socials.twitter} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-full bg-white/6">Twitter</a>
              <a href={socials.github} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 rounded-full bg-white/6">GitHub</a>
            </div>
          </div>
        </section>

        <footer className="mt-14 text-center text-xs text-gray-500 pb-6">
          Made with ❤️ • Built with Next.js + Tailwind
        </footer>
      </div>
    </main>
  );
}
