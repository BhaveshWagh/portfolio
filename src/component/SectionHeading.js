import React from "react";

const SectionHeading = ({ eyebrow, title, children, center = false }) => (
  <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
    <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-400">
      {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {title}
    </h2>
    {children && <p className="mt-4 text-lg leading-relaxed text-slate-400">{children}</p>}
  </div>
);

export default SectionHeading;
