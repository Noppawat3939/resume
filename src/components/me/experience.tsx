"use client";

import { works as _w } from "~/data";
import { useRef, useState } from "react";
import LogoChip from "./logo-chip";
import Reveal from "./reveal";
import { useReducedMotion } from "./use-reduced-motion";
import { useRafScroll } from "./use-raf-scroll";

const VISIBLE_TASKS = 3;

type Group = { title?: string; tasks: string[] };

// the titled /me groups, plus anything they leave out; without groups, the CV sections as they are
function groupsOf(w: (typeof _w)[number]): Group[] {
  if (!w.groups) return w.sections;
  const rest = w.sections
    .flatMap((s) => s.tasks)
    .filter((t) => !w.groups?.some((g) => g.tasks.includes(t)));
  return rest.length ? [...w.groups, { tasks: rest }] : w.groups;
}

// the first VISIBLE_TASKS bullets stay on show; a group cut in two carries on, untitled, behind "Show more"
function split(groups: Group[]) {
  const visible: Group[] = [];
  const hidden: Group[] = [];
  let left = VISIBLE_TASKS;
  groups.forEach((g) => {
    const shown = g.tasks.slice(0, left);
    const rest = g.tasks.slice(left);
    left -= shown.length;
    if (shown.length) visible.push({ title: g.title, tasks: shown });
    if (rest.length)
      hidden.push({ title: shown.length ? undefined : g.title, tasks: rest });
  });
  return { visible, hidden };
}

const roles = _w
  .filter((w) => !w.hidden)
  .map((w, i) => {
    const { visible, hidden } = split(groupsOf(w));
    return {
      id: `xp-${i}`,
      company: w.company,
      shortName: w.shortName ?? w.company,
      logo: w.logo,
      variant: i,
      position: w.position,
      location: w.location,
      years: `${w.startDate.slice(-4)} – ${w.endDate ? w.endDate.slice(-4) : "Now"}`,
      period: `${w.startDate} – ${w.endDate ?? "Present"}`,
      current: w.endDate === null,
      description: w.description,
      highlights: w.highlights,
      visible,
      hidden,
      hiddenCount: hidden.reduce((n, g) => n + g.tasks.length, 0),
    };
  });

function Groups({ groups }: { groups: Group[] }) {
  return groups.map((g, k) => (
    <div className="xgroup" key={g.title ?? k}>
      {g.title && <h4 className="xgroup-title">{g.title}</h4>}
      <ul className="bullets">
        {g.tasks.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  ));
}

function glow(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function Role({ role }: { role: (typeof roles)[number] }) {
  const [open, setOpen] = useState(false);
  const panelId = `${role.id}-more`;

  return (
    <Reveal as="article" className="xcard" id={role.id} onPointerMove={glow}>
      <header className="xhead">
        <LogoChip
          logo={role.logo}
          fallback={role.shortName.charAt(0)}
          variant={role.variant}
          live={role.current}
        />
        <div className="xtitle">
          <h3 className="company">{role.company}</h3>
          <p className="role">{`${role.position} · ${role.location}`}</p>
        </div>
        <div className="xmeta">
          {role.current && (
            <span className="badge">
              <i />
              Current
            </span>
          )}
          <span className="dates">{role.period}</span>
        </div>
      </header>
      <div className="xbody">
        {role.description && <p className="desc">{role.description}</p>}
        {role.highlights && (
          <ul className="xhl" aria-label="Highlights">
            {role.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <div className="xlist">
          <Groups groups={role.visible} />
          {role.hiddenCount > 0 && (
            <>
              <div className={`more${open ? " open" : ""}`} id={panelId}>
                <div className="more-inner">
                  <Groups groups={role.hidden} />
                </div>
              </div>
              <button
                className="more-btn"
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((o) => !o)}
              >
                <span className="chev" aria-hidden="true" />
                <span className="lbl">
                  {open ? "Show less" : `Show ${role.hiddenCount} more`}
                </span>
              </button>
            </>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/** Pinned role menu on the left, role cards scrolling on the right. The menu follows what you are reading. */
export default function Experience() {
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const menu = useRef<HTMLElement>(null);
  const cards = useRef<HTMLElement[]>([]);
  const links = useRef<HTMLAnchorElement[]>([]);
  const reduced = useReducedMotion();

  useRafScroll(() => {
    const nav = menu.current;
    if (!nav) return;
    if (!cards.current.length) {
      cards.current = roles.flatMap((r) => document.getElementById(r.id) ?? []);
      links.current = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
    }
    const readY = window.innerHeight * 0.4;
    const rects = cards.current.map((el) => el.getBoundingClientRect());
    let idx = 0;
    rects.forEach((rect, i) => {
      if (rect.top < readY) idx = i;
    });
    const rect = rects[idx];
    const link = links.current[idx];
    if (!rect || !link) return;
    const p = Math.min(
      1,
      Math.max(0, (readY - rect.top) / Math.max(1, rect.height)),
    );
    const scrollMenu =
      idx !== activeRef.current && nav.scrollWidth > nav.clientWidth;
    const left = link.offsetLeft - 12;
    return () => {
      link.style.setProperty("--p", p.toFixed(3));
      if (idx === activeRef.current) return;
      activeRef.current = idx;
      setActive(idx);
      if (scrollMenu)
        nav.scrollTo({ left, behavior: reduced ? "auto" : "smooth" });
    };
  });

  return (
    <section
      className="sec sec-soft"
      id="experience"
      aria-labelledby="exp-title"
    >
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="exp-title">Experiences</h2>
        </Reveal>
        <div className="xgrid">
          <nav className="xnav" aria-label="Roles" ref={menu}>
            {roles.map((r, i) => (
              <a
                key={r.id}
                href={`#${r.id}`}
                className={`xnav-link${i === active ? " active" : ""}`}
              >
                <LogoChip
                  logo={r.logo}
                  fallback={r.shortName.charAt(0)}
                  variant={r.variant}
                  small
                />
                <span className="xn-text">
                  <b>{r.shortName}</b>
                  <small>{r.years}</small>
                </span>
                <i aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="xcards">
            {roles.map((r) => (
              <Role key={r.id} role={r} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
