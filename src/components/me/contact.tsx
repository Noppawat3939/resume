"use client";

import { contact as _c, header as _h } from "~/data";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import Reveal from "./reveal";
import { useRafScroll } from "./use-raf-scroll";
import { useReducedMotion } from "./use-reduced-motion";

export default function Contact() {
  const reduced = useReducedMotion();
  const lastScale = useRef("");

  // the first measurement can run before we know the visitor prefers reduced motion; clear what it set
  useEffect(() => {
    if (reduced)
      document.getElementById("contact-panel")?.style.removeProperty("scale");
  }, [reduced]);

  // the black panel grows from 94% to 100% as it arrives
  useRafScroll(() => {
    const el = document.getElementById("contact-panel");
    if (!el || reduced) return;
    const vh = window.innerHeight;
    const t = Math.min(
      1,
      Math.max(0, (vh - el.getBoundingClientRect().top) / (vh * 0.5)),
    );
    const scale = (0.94 + 0.06 * t).toFixed(3);
    if (scale === lastScale.current) return;
    lastScale.current = scale;
    return () => {
      el.style.scale = scale;
    };
  });

  return (
    <footer className="closing" id="contact">
      <div className="wrap">
        <Reveal className="panel" id="contact-panel">
          <div className="orb o1" aria-hidden="true" />
          <div className="orb o2" aria-hidden="true" />
          <div className="orb o3" aria-hidden="true" />
          <div className="panel-grid">
            <div className="panel-main">
              <h2>{_c.title}</h2>
              <div className="addr-row big-mail-row">
                <a className="big-mail addr" href={_h.mail_to}>
                  {_h.mail}
                </a>
              </div>
              <div className="panel-actions">
                <a className="pbtn pbtn-light" href={_h.mail_to}>
                  <MailIcon />
                  Email me
                </a>
                <Link className="pbtn" href="/?print=1" target="_blank">
                  <DownloadIcon />
                  Download CV
                </Link>
                <a
                  className="pbtn"
                  href={_h.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>
                <a
                  className="pbtn"
                  href={_h.linked_in_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
