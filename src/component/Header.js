import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { RESUME_DRIVE_URL } from "../utils/constants";
import { CloseIcon, DocumentIcon, MenuIcon } from "./Icons";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/project", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const navClass = ({ isActive }) =>
  `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
    isActive
      ? "bg-white/10 text-white"
      : "text-slate-400 hover:bg-white/5 hover:text-white"
  }`;

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/10 bg-ink-950/80 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-bold text-ink-950 shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
            BW
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">
            Bhavesh Wagh
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end className={navClass}>
              {item.label}
            </NavLink>
          ))}
          <a
            href={RESUME_DRIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-emerald-300"
          >
            <DocumentIcon className="h-4 w-4" />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end className={navClass}>
                {item.label}
              </NavLink>
            ))}
            <a
              href={RESUME_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-ink-950"
            >
              <DocumentIcon className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
