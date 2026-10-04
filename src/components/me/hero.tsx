"use client";

import { header as _h, hero as _hero } from "~/data";
import Link from "next/link";
import { useRef, useState } from "react";
import { css } from "./css";
import { GithubIcon, LinkedinIcon } from "./icons";
import ProofBar from "./proof-bar";
import Showcase from "./showcase";
import { UNDERLINE_CENTRE, UNDERLINE_INK } from "./underline";
import { useRafScroll } from "./use-raf-scroll";

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLElement>(null);
  const lastP = useRef(-1);

  const change = (next: number) => {
    setPrevious(index);
    setIndex(next);
  };

  // the hero text drifts down and softly fades while you scroll past it
  useRafScroll(() => {
    const el = wrap.current;
    const section = hero.current;
    if (!el || !section) return;
    const p = Math.min(
      1,
      Math.max(0, window.scrollY / Math.max(1, section.offsetHeight)),
    );
    // once the hero is fully scrolled past, nothing changes any more
    if (p === lastP.current) return;
    lastP.current = p;
    return () => {
      el.style.transform = `translate3d(0, ${(p * 48).toFixed(1)}px, 0)`;
      el.style.opacity = (1 - p * 0.65).toFixed(3);
    };
  });

  return (
    <header className="hero" id="top" ref={hero}>
      <div className="wrap" ref={wrap}>
        <p className="eyebrow-name in" style={css({ "--i": 0 })}>
          {`${titleCase(_h.full_name)} · Software Engineer · ${titleCase(_h.address)}`}
        </p>
        <h1 className="in" style={css({ "--i": 1 })}>
          <span className="h1-line">{_hero.lead}</span>
          <span className="swap">
            {_hero.words.map((w, k) => (
              <span
                key={w}
                className={`swap-w${k === index ? " active" : k === previous ? " out" : ""}`}
                aria-hidden={k !== index}
              >
                {w}
                <svg
                  className="swap-ul"
                  viewBox="0 0 300 30"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id={`swap-ul-${k}`}
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="0" style={{ stopColor: "var(--accent)" }} />
                      <stop offset="1" style={{ stopColor: "var(--pink)" }} />
                    </linearGradient>
                    {/* a thick stroke along the centre line uncovers the brush shape as it is drawn */}
                    <mask
                      id={`swap-ul-m-${k}`}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="-8"
                      width="300"
                      height="40"
                    >
                      <path
                        className="ul-reveal"
                        d={UNDERLINE_CENTRE}
                        pathLength={1}
                      />
                    </mask>
                  </defs>
                  <path
                    className="ul-ink"
                    d={UNDERLINE_INK}
                    fill={`url(#swap-ul-${k})`}
                    mask={`url(#swap-ul-m-${k})`}
                  />
                </svg>
              </span>
            ))}
          </span>
        </h1>
        <p className="hero-sub in" style={css({ "--i": 2 })}>
          <strong>{_hero.summary.strong}</strong>
          {_hero.summary.rest}
        </p>

        <div className="cta-row in" style={css({ "--i": 3 })}>
          <a className="btn btn-primary" href={_h.mail_to}>
            Email me
          </a>
          <Link
            className="btn btn-glass glass"
            href="/?print=1"
            target="_blank"
          >
            Download CV
          </Link>
          <a
            className="link-quiet"
            href={_h.github_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            className="link-quiet"
            href={_h.linked_in_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>

        <ProofBar index={4} />

        <Showcase index={index} onChange={change} />
      </div>
    </header>
  );
}
