"use client";

import { useEffect, useRef } from "react";
import { useRafScroll } from "./use-raf-scroll";
import { useReducedMotion } from "./use-reduced-motion";

/** Soft colored glows behind the hero. They move slower than the page for a sense of depth. */
export default function Blobs() {
  const el = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced && el.current) el.current.style.transform = "";
  }, [reduced]);

  useRafScroll(() => {
    const node = el.current;
    if (!node || reduced) return;
    const y = (-window.scrollY * 0.22).toFixed(1);
    return () => {
      node.style.transform = `translate3d(0, ${y}px, 0)`;
    };
  });

  return (
    <div className="blobs" aria-hidden="true" ref={el}>
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="blob b3" />
    </div>
  );
}
