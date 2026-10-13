import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS, SKILLS, STATS } from "../utils/data";
import {
  GITHUB_LINK,
  LINKEDIN_URL,
  RESUME_DRIVE_URL,
} from "../utils/constants";
import {
  ArrowRightIcon,
  DocumentIcon,
  GithubIcon,
  LinkedinIcon,
} from "./Icons";

const PHOTO = `${process.env.PUBLIC_URL}/Bhavesh-s-Photo.png`;

const Body = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 md:grid-cols-[1.4fr_1fr] md:pb-28 md:pt-20">
          <div className="animate-fade-up text-center md:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to new opportunities
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Hi, I'm Bhavesh Wagh.
              <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                MERN Full-Stack Software Engineer.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 md:mx-0">
              1.5 years of experience building scalable, responsive and
              user-centric web applications with{" "}
              <span className="text-slate-200">React.js</span>,{" "}
              <span className="text-slate-200">Node.js</span>,{" "}
              <span className="text-slate-200">Express.js</span> and{" "}
              <span className="text-slate-200">MongoDB</span>, from modern
              front-end interfaces to RESTful APIs and authentication systems.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link
                to="/project"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-ink-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                See Projects
                <ArrowRightIcon />
              </Link>
              <a
                href={RESUME_DRIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium text-white transition hover:border-white/30 hover:bg-white/5"
              >
                <DocumentIcon className="h-5 w-5" />
                Resume
              </a>
            </div>

            <div className="mt-8 flex justify-center gap-4 text-slate-500 md:justify-start">
              <a
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-white"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-white"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>

            <dl className="mx-auto mt-10 grid max-w-md grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] md:mx-0">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-3 py-4 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-white">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs text-slate-500">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-60 animate-fade-up sm:w-72 md:w-full md:max-w-sm">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 blur-2xl" />
            <div className="relative animate-float rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 p-1.5">
              <img
                src={PHOTO}
                alt="Bhavesh Wagh"
                className="aspect-square w-full rounded-full bg-white object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -left-2 rounded-xl border border-white/10 bg-ink-800/90 px-4 py-2 font-mono text-xs text-slate-300 shadow-xl backdrop-blur sm:-left-6">
              <span className="text-emerald-400">const</span> role ={" "}
              <span className="text-amber-300">"MERN"</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-y border-white/5 bg-ink-900/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Skills" title="Technologies I work with">
              A full MERN toolkit, from polished front-end interfaces to
              RESTful APIs, authentication, caching and databases.
            </SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((group, i) => (
              <Reveal key={group.group} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-900 p-6 transition hover:border-emerald-400/30">
                  <h3 className="font-semibold text-white">{group.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-sm text-slate-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Projects" title="Featured work">
            I like to showcase my work, so you can see my projects hosted
            online.
          </SectionHeading>
          <Link
            to="/project"
            className="inline-flex shrink-0 items-center gap-2 font-medium text-emerald-400 transition hover:text-emerald-300"
          >
            View all projects
            <ArrowRightIcon />
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.slice(0, 2).map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/15 via-ink-900 to-cyan-500/10 px-6 py-14 text-center sm:px-12">
            <div className="bg-grid pointer-events-none absolute inset-0" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's build something great together
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
                I'm open to new Software Engineer opportunities. If you think
                I'd be a good fit for your team, I'd love to hear from you.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-ink-950 transition hover:bg-emerald-300"
                >
                  Get in touch
                  <ArrowRightIcon />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                >
                  More about me
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Body;
