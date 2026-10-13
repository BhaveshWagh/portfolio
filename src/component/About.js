import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { RESUME_DRIVE_URL } from "../utils/constants";
import {
  ArrowRightIcon,
  CapIcon,
  CodeIcon,
  DocumentIcon,
  SparkIcon,
} from "./Icons";

const PHOTO = `${process.env.PUBLIC_URL}/Bhavesh-s-Photo.png`;

const HIGHLIGHTS = [
  {
    Icon: CodeIcon,
    title: "Full-Stack MERN Development",
    text: "Modern front-end interfaces, RESTful APIs, authentication systems and performance-optimised applications.",
  },
  {
    Icon: SparkIcon,
    title: "Clean, Maintainable Code",
    text: "Redux, Redis, Tailwind CSS, Bootstrap, SQL, Git and modern development practices for efficient solutions.",
  },
  {
    Icon: CapIcon,
    title: "Ownership & Continuous Learning",
    text: "Strong ownership, adaptability and attention to detail in collaborative, fast-paced environments.",
  },
];

const CORE_SKILLS = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "Redux",
  "Redux Thunk",
  "Tailwind CSS",
  "HTML/CSS",
  "MCP",
];

const About = () => {
  return (
    <div className="relative">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />

      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.5fr] md:py-24">
        <Reveal className="mx-auto w-56 sm:w-64 md:w-full md:max-w-xs">
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-500/25 to-cyan-500/25 blur-2xl" />
            <div className="relative rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-500 p-1.5">
              <img
                src={PHOTO}
                alt="Bhavesh Wagh"
                className="aspect-square w-full rounded-full bg-white object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading eyebrow="About me" title="Hi, I'm Bhavesh Wagh" />
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            I'm a{" "}
            <span className="font-medium text-emerald-300">
              Software Engineer
            </span>{" "}
            with{" "}
            <span className="font-medium text-slate-200">1.5 years</span> of
            experience designing and developing scalable, responsive and
            user-centric web applications. I'm proficient in JavaScript,
            React.js, Node.js, Express.js and MongoDB.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            I'm passionate about solving complex problems, improving user
            experience and contributing to high-quality products, and I'm
            focused on continuous learning and professional growth.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {CORE_SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-mono text-sm text-slate-300"
              >
                {skill}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-ink-950 transition hover:bg-emerald-300"
            >
              <DocumentIcon className="h-5 w-5" />
              View Resume
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Contact Me
              <ArrowRightIcon />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-white/5 bg-ink-900/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Why hire me" title="What I bring" center />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {HIGHLIGHTS.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-900 p-6 transition hover:border-emerald-400/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-semibold text-white">{title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="mx-auto max-w-2xl text-lg text-slate-400">
              If you think I'm a good fit for the position, please let me know.
              Thank you so much for devoting your valuable time.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
