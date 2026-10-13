import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  EMAIL,
  GITHUB_LINK,
  LINKEDIN_URL,
  PHONE,
  RESUME_DRIVE_URL,
} from "../utils/constants";
import {
  DocumentIcon,
  ExternalIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "./Icons";

const CHANNELS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    Icon: MailIcon,
  },
  {
    label: "Phone",
    value: `+91 ${PHONE}`,
    href: `tel:+91${PHONE}`,
    Icon: PhoneIcon,
  },
  {
    label: "LinkedIn",
    value: "Bhavesh Wagh",
    href: LINKEDIN_URL,
    Icon: LinkedinIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "BhaveshWagh",
    href: GITHUB_LINK,
    Icon: GithubIcon,
    external: true,
  },
  {
    label: "Resume",
    value: "View my resume",
    href: RESUME_DRIVE_URL,
    Icon: DocumentIcon,
    external: true,
  },
];

const Contact = () => {
  return (
    <div className="relative">
      <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />
      <section className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let's get in touch" center>
            I'm open to front-end internships and full-time roles. The fastest
            way to reach me is by email or LinkedIn.
          </SectionHeading>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={100}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 font-semibold text-ink-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
          >
            <MailIcon className="h-5 w-5" />
            Say hello
          </a>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {CHANNELS.map(({ label, value, href, Icon, external }, i) => (
            <Reveal
              key={label}
              delay={i * 80}
              className={i === CHANNELS.length - 1 ? "sm:col-span-2" : ""}
            >
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900 p-5 transition hover:-translate-y-0.5 hover:border-emerald-400/40"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-ink-950">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm text-slate-500">{label}</span>
                  <span className="block truncate font-medium text-white">
                    {value}
                  </span>
                </span>
                <ExternalIcon className="h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-emerald-400" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;
