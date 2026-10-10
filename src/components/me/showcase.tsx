"use client";

import { showcase } from "~/data";
import { useEffect, useRef, useState, type AnimationEvent } from "react";
import { Sketch } from "~/components/me/design-sketches";
import { css } from "./css";

type Props = {
  index: number;
  onChange: (next: number) => void;
};

/** One panel that rotates Design / Websites / Mobile apps, each showing a real piece of work as a hand-drawn sketch. Hover pauses; tabs jump; the line under the tab shows time left. */
export default function Showcase({ index, onChange }: Props) {
  // bumping `run` remounts the progress line so clicking the active tab restarts the timer
  const [run, setRun] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [lens, setLens] = useState({ x: 0, w: 0, on: false });

  // a glass lens rests on the current tab and glides to whichever tab is hovered
  useEffect(() => {
    const place = () => {
      const el = tabs.current[hovered ?? index];
      if (el) setLens({ x: el.offsetLeft, w: el.offsetWidth, on: true });
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [hovered, index]);

  const go = (next: number) => {
    onChange((next + showcase.length) % showcase.length);
    setRun((r) => r + 1);
  };

  const onProgressEnd = (e: AnimationEvent<HTMLElement>, k: number) => {
    if (k === index && e.target === e.currentTarget) go(index + 1);
  };

  return (
    <div
      className="stage glass in"
      style={css({ "--i": 5 })}
      aria-label="What I build"
    >
      <div
        className="tabs"
        role="tablist"
        aria-label="What I build"
        onMouseLeave={() => setHovered(null)}
      >
        <span
          className={`lens${lens.on ? " on" : ""}${hovered !== null ? " hover" : ""}`}
          style={{ transform: `translateX(${lens.x}px)`, width: lens.w }}
          aria-hidden="true"
        />
        {showcase.map((s, k) => (
          <button
            key={s.key}
            ref={(el) => {
              tabs.current[k] = el;
            }}
            onMouseEnter={() => setHovered(k)}
            onFocus={() => setHovered(k)}
            onBlur={() => setHovered(null)}
            id={`tab-${s.key}`}
            className={`tab${k === index ? " active" : ""}`}
            type="button"
            role="tab"
            aria-selected={k === index}
            aria-controls={`slide-${s.key}`}
            onClick={() => go(k)}
          >
            {s.title}
            <i
              key={k === index ? `run-${run}` : "idle"}
              onAnimationEnd={(e) => onProgressEnd(e, k)}
            />
          </button>
        ))}
      </div>
      <div className="slides">
        {showcase.map((s, k) => (
          <div
            key={s.key}
            id={`slide-${s.key}`}
            className={`slide${k === index ? " active" : ""}`}
            role="tabpanel"
            aria-labelledby={`tab-${s.key}`}
            aria-hidden={k !== index}
          >
            <div className="slide-copy">
              <h3>{s.title}</h3>
              <span className="slide-from">{s.from}</span>
              <strong className="slide-case">{s.project}</strong>
              <p>{s.description}</p>
              <a className="more-btn slide-more" href="#projects">
                See projects <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="vis sketchy">
              <Sketch name={s.sketch} label={s.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
