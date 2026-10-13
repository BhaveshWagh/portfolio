import React from "react";
import { ExternalIcon, GithubIcon } from "./Icons";

const ACCENTS = [
  "from-rose-500/30 via-red-500/10",
  "from-amber-400/30 via-orange-500/10",
  "from-emerald-400/30 via-teal-500/10",
  "from-sky-400/30 via-indigo-500/10",
];

const ProjectCard = ({ project, index = 0 }) => {
  const { title, subtitle, description, stack, source, live } = project;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10">
      <div
        className={`relative h-32 bg-gradient-to-br ${
          ACCENTS[index % ACCENTS.length]
        } to-transparent`}
      >
        <div className="bg-grid absolute inset-0" />
        <span className="absolute bottom-3 left-6 font-mono text-5xl font-bold text-white/10">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
          {subtitle}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-400">
          {description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/5"
          >
            <GithubIcon className="h-4 w-4" />
            View Source
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-emerald-300"
            >
              Live Demo
              <ExternalIcon className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
