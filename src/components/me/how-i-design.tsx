"use client";

import { Sketch } from "~/components/me/design-sketches";
import { GithubIcon } from "~/components/me/icons";
import Reveal from "~/components/me/reveal";
import { useReducedMotion } from "~/components/me/use-reduced-motion";
import { designWork as _d, type DesignItem } from "~/data";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/** The picture of a card: a hand-drawn sketch, a screenshot, or nothing (text-only card). */
function Picture({ item }: { item: DesignItem }) {
  const label = item.alt ?? item.title;
  if (item.sketch) return <Sketch name={item.sketch} label={label} />;
  if (item.image) {
    return (
      <Image
        className="shot"
        src={item.image.src}
        width={item.image.width}
        height={item.image.height}
        alt={label}
        unoptimized
      />
    );
  }
  return null;
}

function ZoomIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

/**
 * Evidence for the "Design" note. Everything shown comes from `designWork` in ~/data, so adding or
 * reordering projects never touches this file. Hand-drawn sketches render fully drawn; strokes only
 * replay once when a card first scrolls into view.
 */
export default function HowIDesign() {
  const reduced = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<DesignItem | null>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || reduced || !("IntersectionObserver" in window)) return;
    const timers: number[] = [];
    // anything already on screen stays as it is; only cards still below the fold get hidden for the draw
    const sheets = [
      ...el.querySelectorAll<HTMLElement>(".canvas[data-draw]"),
    ].filter((s) => s.getBoundingClientRect().top > window.innerHeight);
    sheets.forEach((s) => s.classList.add("pre"));
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          // the right-hand card of a row starts a beat later than the left one
          const delay = (e.target as HTMLElement).dataset.col === "1" ? 250 : 0;
          timers.push(
            window.setTimeout(() => {
              e.target.classList.remove("pre");
              e.target.classList.add("drawing");
            }, delay),
          );
        }),
      { threshold: 0.4 },
    );
    sheets.forEach((s) => io.observe(s));
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
      sheets.forEach((s) => s.classList.remove("pre"));
    };
  }, [reduced]);

  useEffect(() => {
    if (open) dialog.current?.showModal();
  }, [open]);

  return (
    <div className="hid" id="how-i-design" ref={root}>
      <Reveal className="hid-head">
        <h3>{_d.title}</h3>
      </Reveal>

      {_d.groups
        .filter((group) => group.items.length > 0)
        .map((group) => (
          <div className="hid-group" key={group.label}>
            <p className="hid-label">{group.label}</p>
            <div className="hid-grid">
              {group.items.map((item, i) => (
                <figure className="sheet" key={item.title}>
                  {(item.sketch || item.image) && (
                    <button
                      className="canvas"
                      type="button"
                      data-col={i % 2}
                      data-draw={item.sketch ? "" : undefined}
                      onClick={() => setOpen(item)}
                      aria-label={`Enlarge: ${item.title}`}
                    >
                      <Picture item={item} />
                      <span className="zoom" aria-hidden="true">
                        <ZoomIcon />
                      </span>
                    </button>
                  )}
                  <figcaption>
                    <div className="hid-chips">
                      <span
                        className={`hid-chip${item.kind === "UI design" ? " pink" : ""}`}
                      >
                        {item.kind}
                      </span>
                      {item.tag && (
                        <span className="hid-chip plain">{item.tag}</span>
                      )}
                    </div>
                    <strong>{item.title}</strong>
                    <span>{item.caption}</span>
                    {(item.stack || item.repo) && (
                      <div className="hid-row">
                        <span className="hid-stack">{item.stack}</span>
                        {item.repo && (
                          <a
                            className="btn-reset hid-gh"
                            href={item.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <GithubIcon size={14} /> View code
                          </a>
                        )}
                      </div>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}

      <dialog
        ref={dialog}
        className="hid-lightbox"
        aria-label={open?.title}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === dialog.current && dialog.current.close()}
      >
        {open && (
          <>
            <header>
              <strong>{open.title}</strong>
              <button
                className="btn-reset icon"
                type="button"
                aria-label="Close"
                onClick={() => dialog.current?.close()}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </header>
            <div className="big">
              <Picture item={open} />
            </div>
          </>
        )}
      </dialog>
    </div>
  );
}
