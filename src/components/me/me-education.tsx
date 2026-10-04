"use client";

import { education as _e, journey as _j, works as _w } from "~/data";
import { useEffect, useRef, useState } from "react";
import { css } from "./css";
import { GradIcon } from "./icons";
import LogoChip from "./logo-chip";
import Reveal from "./reveal";
import { useRafScroll } from "./use-raf-scroll";
import { useReducedMotion } from "./use-reduced-motion";

const yearOf = (date: string) => date.slice(-4);
const withoutSuffix = (name: string) =>
  name.replace(/,?\s*Co\.,?\s*Ltd\.?$/i, "");

const [eduStart, eduEnd] = _e.period.split(" – ");

type Step = {
  key: string;
  track: "people" | "tech";
  years: string;
  name: string;
  role: string;
  period: string;
  place?: string;
  text?: string;
  logo?: { src: string; width: number; height: number };
  variant: number;
};

const SHOWN = _w.filter((w) => !w.hidden);

// oldest first: school, then every visible role
const STEPS: Step[] = [
  {
    key: "edu",
    track: "people",
    years: `${yearOf(eduStart)} – ${yearOf(eduEnd)}`,
    name: _e.university,
    role: _e.major,
    period: _e.period,
    text: _e.details.join(" "),
    variant: 0,
  },
  ...SHOWN.slice()
    .reverse()
    .map(
      (w, i) =>
        ({
          key: w.company,
          track: w.track ?? "tech",
          years: `${yearOf(w.startDate)} – ${w.endDate ? yearOf(w.endDate) : "Now"}`,
          name: withoutSuffix(w.company),
          role: w.position,
          period: `${w.startDate} – ${w.endDate ?? "Present"}`,
          place: w.location,
          text: w.description,
          logo: w.logo,
          variant: SHOWN.length - 1 - i,
        }) satisfies Step,
    ),
];

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

function glow(e: React.PointerEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

/**
 * Education and career path in one card: a tab list of steps (school, then each job) with a detail panel.
 * The line fills as you scroll. Pink marks people-focused work, blue marks software, joined at the pivot.
 */
export default function MeEducation() {
  const path = useRef<HTMLOListElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastFill = useRef("");
  const [selected, setSelected] = useState(STEPS.length - 1);
  const [run, setRun] = useState(false);
  const reduced = useReducedMotion();

  // scroll-linked fill: --fill goes 0 → 1 while the path crosses the reading area
  useRafScroll(() => {
    const el = path.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const fill = clamp((vh * 0.75 - r.top) / (vh * 0.4), 0, 1).toFixed(3);
    // above and below the reading area the fill stays at 0 or 1
    if (fill === lastFill.current) return;
    lastFill.current = fill;
    return () => {
      el.style.setProperty("--fill", fill);
      el.querySelectorAll<HTMLElement>(".pstep").forEach((li, k) => {
        li.dataset.lit = String(Number(fill) * (STEPS.length - 1) >= k - 0.02);
      });
    };
  });

  useEffect(() => {
    const el = path.current;
    if (!el) return;
    if (reduced) {
      el.style.setProperty("--fill", "1");
      el.querySelectorAll<HTMLElement>(".pstep").forEach(
        (li) => (li.dataset.lit = "true"),
      );
      return;
    }
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const next: Record<string, number> = {
      ArrowRight: selected + 1,
      ArrowDown: selected + 1,
      ArrowLeft: selected - 1,
      ArrowUp: selected - 1,
      Home: 0,
      End: STEPS.length - 1,
    };
    if (!(e.key in next)) return;
    e.preventDefault();
    const to = clamp(next[e.key], 0, STEPS.length - 1);
    setSelected(to);
    tabs.current[to]?.focus();
  };

  return (
    <section
      className="sec sec-soft"
      id="education"
      aria-labelledby="edu-title"
    >
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="edu-title">Education</h2>
        </Reveal>
        <Reveal as="article" className="card path-card" onPointerMove={glow}>
          <ol
            className={`path${run ? " run" : ""}`}
            ref={path}
            role="tablist"
            aria-label="Education and career path"
            onKeyDown={onKeyDown}
          >
            {STEPS.map((s, k) => {
              const pivot =
                s.track === "people" && STEPS[k + 1]?.track === "tech";
              return (
                <li
                  key={s.key}
                  className={`pstep ${s.track}${pivot ? " pivot" : ""}${k === selected ? " sel" : ""}`}
                  style={css({ "--k": k })}
                  role="presentation"
                >
                  <button
                    ref={(el) => {
                      tabs.current[k] = el;
                    }}
                    id={`step-${k}`}
                    className="pstep-btn"
                    type="button"
                    role="tab"
                    aria-selected={k === selected}
                    aria-controls={`step-panel-${k}`}
                    tabIndex={k === selected ? 0 : -1}
                    onClick={() => setSelected(k)}
                  >
                    <span className="pdot" />
                    <span className="pdate">{s.years}</span>
                    <b>{s.name}</b>
                    <span className="prole">{s.role}</span>
                  </button>
                  {pivot && (
                    <span className="pivot-label">{_j.pivotLabel}</span>
                  )}
                </li>
              );
            })}
          </ol>
          <div className="pdetails">
            {STEPS.map((s, k) => (
              <div
                key={s.key}
                id={`step-panel-${k}`}
                className={`pdetail${k === selected ? " active" : ""}`}
                role="tabpanel"
                aria-labelledby={`step-${k}`}
                aria-hidden={k !== selected}
              >
                <div className="pdetail-in">
                  {s.key === "edu" ? (
                    <span
                      className="mono-tile big"
                      data-tone="pink"
                      aria-hidden="true"
                    >
                      <GradIcon size={28} />
                    </span>
                  ) : (
                    <LogoChip
                      logo={s.logo}
                      fallback={s.name.charAt(0)}
                      variant={s.variant}
                    />
                  )}
                  <div>
                    <h3 className="company">{s.name}</h3>
                    <p className="dates">
                      {[s.period, s.place].filter(Boolean).join(" · ")}
                    </p>
                    {s.text && <p className="desc">{s.text}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
