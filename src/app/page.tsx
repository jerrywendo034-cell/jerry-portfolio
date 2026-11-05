const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "SQL",
  "AI & Automation",
  "Responsive Design",
];

const projects = [
  {
    title: "Whats AI",
    description:
      "An AI-powered WhatsApp assistant designed to help businesses communicate with customers, manage orders, support payments, and provide faster customer service.",
    technologies: ["Next.js", "TypeScript", "AI", "WhatsApp", "M-Pesa"],
    link: "https://whats-ai-app.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-cyan-400 selection:text-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            Jerry<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>

          <a
            href="mailto:jerrywendo034@gmail.com"
            className="hidden rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 sm:block"
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-24 lg:px-8">
          <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Introduction */}
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Computer Science Student
              </div>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Building ideas into{" "}
                <span className="text-cyan-400">digital solutions.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                I&apos;m Jerry Wendo, a Computer Science student at Dedan
                Kimathi University of Technology, interested in software
                development, AI, automation, and creating practical technology
                that solves real problems.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Explore My Work
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-slate-700 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
                >
                  Get In Touch
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                <span>📍 Kenya</span>
                <span>💻 Software Development</span>
                <span>🤖 AI & Automation</span>
              </div>
            </div>

            {/* Developer card */}
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/30 to-blue-500/20 blur-xl" />

              <div className="relative rounded-3xl border border-white/10 bg-slate-900/80 p-7 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Currently building</p>
                    <p className="mt-1 font-semibold">Whats AI</p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                    AI
                  </div>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <div className="space-y-5">
                  <div>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-400">
                        Software Development
                      </span>
                      <span className="text-cyan-400">Learning</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[78%] rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-400">
                        AI & Automation
                      </span>
                      <span className="text-cyan-400">Exploring</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[65%] rounded-full bg-cyan-400" />
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-xs">
                      <span className="text-slate-400">
                        Web Development
                      </span>
                      <span className="text-cyan-400">Building</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div className="h-full w-[82%] rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-2xl border border-white/5 bg-slate-950/70 p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500">
                    Philosophy
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Learn. Build. Improve. Repeat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/5 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                A student with a builder&apos;s mindset.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-slate-300">
                I&apos;m currently studying Computer Science at Dedan Kimathi
                University of Technology. My interest in technology goes beyond
                writing code — I enjoy understanding problems, designing
                solutions, and turning ideas into working products.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                I&apos;m particularly interested in modern web development,
                artificial intelligence, automation, and software engineering.
                I&apos;m continuously building projects that help me strengthen
                both my technical skills and my understanding of how technology
                can solve practical problems.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <p className="text-2xl font-bold text-cyan-400">01</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Learn continuously
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <p className="text-2xl font-bold text-cyan-400">02</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Build practical projects
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                  <p className="text-2xl font-bold text-cyan-400">03</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Keep improving
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-white/5 bg-slate-900/40"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Skills
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Tools I&apos;m working with.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            A growing toolkit built through university studies, personal
            projects, and hands-on experimentation.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group rounded-2xl border border-white/10 bg-slate-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-100">
                    {skill}
                  </span>

                  <span className="text-sm text-slate-600 transition group-hover:text-cyan-400">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/5 bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Featured Project
          </p>

          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm text-slate-500">01 / PROJECT</p>

              <h2 className="mt-3 text-5xl font-bold tracking-tight">
                Whats AI
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                An AI-powered WhatsApp assistant designed to help businesses
                communicate with customers, manage orders, support payments,
                and provide faster customer service.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {projects[0].technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={projects[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:gap-3 hover:text-cyan-300"
              >
                Visit project <span>→</span>
              </a>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-cyan-400/5 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8">
                <div className="flex items-center gap-2 border-b border-white/10 pb-5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />

                  <span className="ml-3 text-xs text-slate-500">
                    whats-ai
                  </span>
                </div>

                <div className="py-10">
                  <div className="ml-auto max-w-xs rounded-2xl rounded-br-sm bg-cyan-400 p-4 text-sm font-medium text-slate-950">
                    Hi! I&apos;d like to order a product.
                  </div>

                  <div className="mt-4 max-w-xs rounded-2xl rounded-bl-sm border border-white/10 bg-slate-800 p-4 text-sm leading-6 text-slate-300">
                    Absolutely. I can help you with that. What product would
                    you like to order?
                  </div>

                  <div className="mt-8 flex items-center gap-3 text-xs text-slate-500">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                    AI assistant online
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
<section id="contact" className="px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 md:p-12">
      <div className="max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Let&apos;s build something together.
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-400">
          I&apos;m open to internship opportunities, collaborations, freelance
          projects, and conversations about technology.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:jerrywendo034@gmail.com"
            className="rounded-full bg-cyan-500 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/jerry-wendo-28424b3a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            LinkedIn
          </a>

          <a
            href="/Jerry-Wendo-CV.pdf"
            download
            className="rounded-full border border-slate-600 px-7 py-3.5 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#020617]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Jerry Wendo. Built with Next.js.
          </p>

          <div className="flex gap-6">
            <a
              href="mailto:jerrywendo034@gmail.com"
              className="transition hover:text-cyan-400"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/jerry-wendo-28424b3a3"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}