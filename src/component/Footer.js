import { Link } from "react-router-dom";
import { EMAIL, GITHUB_LINK, LINKEDIN_URL } from "../utils/constants";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const SOCIALS = [
  { href: GITHUB_LINK, label: "GitHub", Icon: GithubIcon },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${EMAIL}`, label: "Email", Icon: MailIcon },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <Link to="/" className="text-lg font-semibold text-white">
            Bhavesh Wagh
          </Link>
          <p className="mt-1 text-sm text-slate-500">
            Made with <span className="text-rose-400">❤</span> in India. No
            copyright issues, feel free to copy. If you need any help, ping me!
          </p>
        </div>
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-emerald-400/50 hover:text-emerald-400"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Bhavesh Wagh · Built with React & Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
