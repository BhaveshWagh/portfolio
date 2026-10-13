import React from "react";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "../utils/data";
import { GITHUB_LINK } from "../utils/constants";
import { GithubIcon } from "./Icons";

const Projects = () => {
  return (
    <div className="relative">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Portfolio" title="Things I've built">
            I like to showcase my work, so here are projects you can explore
            live or dig into the source code on GitHub.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:border-emerald-400/50 hover:text-emerald-400"
          >
            <GithubIcon className="h-5 w-5" />
            See more on GitHub
          </a>
        </Reveal>
      </section>
    </div>
  );
};

export default Projects;
