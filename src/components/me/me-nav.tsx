"use client";

import { header as _h } from "~/data";
import { useEffect, useRef, useState } from "react";
import { useRafScroll } from "./use-raf-scroll";

const LINKS = [
  { id: "experience", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
];

function brandName(fullName: string) {
  const [first = "", last = ""] = fullName.split(" ");
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  return `${cap(first)} ${last.charAt(0).toUpperCase()}.`;
}

export default function MeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const progress = useRef<HTMLElement>(null);
  const links = useRef<(HTMLAnchorElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [lens, setLens] = useState({ x: 0, w: 0, on: false });

  useRafScroll(() => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const sp = Math.min(1, Math.max(0, y / Math.max(1, max))).toFixed(3);
    return () => {
      setScrolled(y > 24);
      progress.current?.style.setProperty("--sp", sp);
    };
  });

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // the glass lens glides to the hovered link, otherwise rests on the section you are reading
  useEffect(() => {
    const target = hovered ?? LINKS.findIndex((l) => l.id === active);
    const el = target >= 0 ? links.current[target] : null;
    if (!el) {
      setLens((l) => ({ ...l, on: false }));
      return;
    }
    setLens({ x: el.offsetLeft, w: el.offsetWidth, on: true });
  }, [hovered, active]);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Primary">
      <div className="nav-in glass">
        <a className="nav-brand" href="#top">
          {brandName(_h.full_name)}
        </a>
        <div className="nav-links" onMouseLeave={() => setHovered(null)}>
          <span
            className={`lens${lens.on ? " on" : ""}${hovered !== null ? " hover" : ""}`}
            style={{ transform: `translateX(${lens.x}px)`, width: lens.w }}
            aria-hidden="true"
          />
          {LINKS.map(({ id, label }, i) => (
            <a
              key={id}
              ref={(el) => {
                links.current[i] = el;
              }}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              onBlur={() => setHovered(null)}
            >
              {label}
            </a>
          ))}
        </div>
        <a className="btn-sm" href="#contact">
          Contact
        </a>
        <span className="progress" aria-hidden="true" ref={progress}>
          <i />
        </span>
      </div>
    </nav>
  );
}
