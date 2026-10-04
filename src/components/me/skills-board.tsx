"use client";

import { skill as _s } from "~/data";
import { useCallback, useEffect, useRef, useState } from "react";
import HowIDesign from "~/components/me/how-i-design";
import Reveal from "./reveal";
import { useRafScroll } from "./use-raf-scroll";
import { useReducedMotion } from "./use-reduced-motion";

// 5 note colors; the order keeps neighbouring notes from sharing a color
const TINT_ORDER = [0, 1, 2, 3, 4, 0, 3, 1];

const NOTES = _s.map((line, i) => {
  const at = line.indexOf(": ");
  return {
    category: line.slice(0, at),
    items: line.slice(at + 2).split(", "),
    tint: TINT_ORDER[i % TINT_ORDER.length],
  };
});

const ROTATIONS = [-2.2, 1.6, -1, 2.4, -1.8, 1.2, -2.6, 0.9];
const DEPTH = [-18, 12, -8, 20, -14, 10, -22, 16];

type Note = HTMLDivElement & { _x: number; _y: number; _w: number; _h: number };

const clamp = (v: number, lo: number, hi: number) =>
  Math.max(lo, Math.min(hi, v));

/**
 * Skills as sticky notes. Notes are placed in columns first, then can be dragged anywhere on the page.
 * Positions live in CSS variables set directly on the elements, so dragging never re-renders React.
 */
export default function SkillsBoard() {
  const board = useRef<HTMLDivElement>(null);
  const notes = useRef<Note[]>([]);
  const lastWidth = useRef(0);
  const zTop = useRef(10);
  const order = useRef<number[]>([]);
  const lastDrift = useRef(2);
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [arrived, setArrived] = useState(false);
  const [settled, setSettled] = useState(false);

  const place = (n: Note, x: number, y: number) => {
    n._x = x;
    n._y = y;
    n.style.setProperty("--x", `${x}px`);
    n.style.setProperty("--y", `${y}px`);
  };

  const layout = useCallback(() => {
    const el = board.current;
    if (!el) return;
    const pad = 16;
    const gap = 14;
    const width = el.clientWidth - pad * 2;
    const cols = Math.max(
      1,
      Math.min(4, Math.floor((width + gap) / (160 + gap))),
    );
    const noteW = Math.min(240, Math.floor((width - gap * (cols - 1)) / cols));
    const total = noteW * cols + gap * (cols - 1);
    const offset = pad + Math.max(0, (width - total) / 2);
    const heights = Array.from({ length: cols }, () => pad);
    notes.current.forEach((n, i) => {
      n.style.width = `${noteW}px`;
      const rank = order.current.indexOf(i);
      n.style.setProperty(
        "--d",
        `${Math.max(0, rank) * 140 + Math.round(Math.random() * 60)}ms`,
      );
      n.style.setProperty("--r", `${ROTATIONS[i % ROTATIONS.length]}deg`);
      const h = n.offsetHeight;
      const col = heights.indexOf(Math.min(...heights));
      place(n, offset + col * (noteW + gap), heights[col]);
      n._w = noteW;
      n._h = h;
      heights[col] += h + gap;
    });
    el.style.height = `${Math.max(...heights) + pad - gap + 8}px`;
    lastWidth.current = el.clientWidth;
  }, []);

  // collect the notes, switch to absolute layout, keep it fitted on resize and once fonts are ready
  useEffect(() => {
    const el = board.current;
    if (!el) return;
    notes.current = Array.from(el.querySelectorAll<Note>(".sticky"));
    // a random pop-in order, picked once per visit
    const idx = notes.current.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    order.current = idx;
    setReady(true);
    const onResize = () => {
      if (el.clientWidth !== lastWidth.current) layout();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("load", layout);
    document.fonts?.ready.then(layout);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", layout);
    };
  }, [layout]);

  useEffect(() => {
    if (ready) layout();
  }, [ready, layout]);

  // the first drift measurement can run before we know the visitor prefers reduced motion; clear it
  useEffect(() => {
    if (reduced) notes.current.forEach((n) => (n.style.translate = ""));
  }, [reduced, ready]);

  // notes toss in when the board first comes into view
  useEffect(() => {
    const el = board.current;
    if (!el) return;
    if (reduced || !("IntersectionObserver" in window)) {
      setArrived(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArrived(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (!arrived) return;
    const t = setTimeout(() => setSettled(true), 2200);
    return () => clearTimeout(t);
  }, [arrived]);

  // notes drift at slightly different depths while the board crosses the screen
  useRafScroll(() => {
    if (reduced) return;
    const el = board.current;
    if (!el) return;
    const vh = window.innerHeight;
    const r = el.getBoundingClientRect();
    const p = clamp((r.top + r.height / 2 - vh / 2) / vh, -1, 1);
    // far above or below the board the drift is pinned at its limit, so there is nothing to redo
    if (p === lastDrift.current) return;
    lastDrift.current = p;
    return () => {
      notes.current.forEach((n, i) => {
        n.style.translate = `0 ${(p * DEPTH[i % DEPTH.length]).toFixed(1)}px`;
      });
    };
  });

  // ---------- dragging: anywhere on the page, with edge auto-scroll ----------
  const drag = useRef<{
    n: Note;
    sx: number;
    sy: number;
    cx: number;
    cy: number;
    scroll0: number;
    ox: number;
    oy: number;
  } | null>(null);

  const moveTo = (n: Note, x: number, y: number) => {
    const el = board.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const absTop = r.top + window.scrollY;
    const docH = document.documentElement.scrollHeight;
    place(
      n,
      clamp(x, 4 - r.left, window.innerWidth - r.left - n._w - 4),
      clamp(y, 4 - absTop, docH - absTop - n._h - 4),
    );
  };

  const dragUpdate = () => {
    const d = drag.current;
    if (!d) return;
    moveTo(
      d.n,
      d.ox + d.cx - d.sx,
      d.oy + d.cy - d.sy + (window.scrollY - d.scroll0),
    );
  };

  const edgeScroll = () => {
    const d = drag.current;
    if (!d) return;
    const edge = 90;
    let v = 0;
    if (d.cy < edge) v = (-(edge - d.cy) / edge) * 18;
    else if (d.cy > window.innerHeight - edge)
      v = ((d.cy - (window.innerHeight - edge)) / edge) * 18;
    if (v) {
      window.scrollBy({ top: v, behavior: "instant" });
      dragUpdate();
    }
    requestAnimationFrame(edgeScroll);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const n = e.currentTarget as Note;
    if (e.button > 0) return;
    if (
      e.pointerType === "touch" &&
      !(e.target as HTMLElement).closest(".grip")
    )
      return;
    drag.current = {
      n,
      sx: e.clientX,
      sy: e.clientY,
      cx: e.clientX,
      cy: e.clientY,
      scroll0: window.scrollY,
      ox: n._x,
      oy: n._y,
    };
    n.setPointerCapture(e.pointerId);
    n.classList.add("dragging");
    n.style.zIndex = String(++zTop.current);
    requestAnimationFrame(edgeScroll);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.n !== e.currentTarget) return;
    d.cx = e.clientX;
    d.cy = e.clientY;
    dragUpdate();
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (d && d.n === e.currentTarget) {
      d.n.classList.remove("dragging");
      drag.current = null;
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const n = e.currentTarget as Note;
    const step = e.shiftKey ? 40 : 12;
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-step, 0],
      ArrowRight: [step, 0],
      ArrowUp: [0, -step],
      ArrowDown: [0, step],
    };
    const m = moves[e.key];
    if (!m) return;
    e.preventDefault();
    n.style.zIndex = String(++zTop.current);
    moveTo(n, n._x + m[0], n._y + m[1]);
  };

  return (
    <section className="sec" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <Reveal className="sec-head">
          <h2 id="skills-title">Skills</h2>
        </Reveal>
        <Reveal className="board-bar">
          <button
            className="btn-reset icon"
            type="button"
            onClick={layout}
            aria-label="Reset notes"
            title="Reset notes"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 12a9 9 0 1 0 3-6.7" />
              <path d="M3 4v5h5" />
            </svg>
          </button>
        </Reveal>
        <div
          ref={board}
          className={`board${ready ? " is-ready" : ""}${arrived ? " in" : ""}${settled ? " done" : ""}`}
          role="group"
          aria-label="Skill notes"
        >
          {NOTES.map((n) => (
            <div
              key={n.category}
              className="sticky"
              data-tint={n.tint}
              tabIndex={0}
              aria-label={`${n.category} note`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onKeyDown={onKeyDown}
            >
              <span className="grip" aria-hidden="true" />
              <h3>{n.category}</h3>
              <ul>
                {n.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <HowIDesign />
      </div>
    </section>
  );
}
