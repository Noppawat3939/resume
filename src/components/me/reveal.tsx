"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "./use-reduced-motion";

type Props = {
  as?: "div" | "article" | "header" | "section";
  className?: string;
  style?: CSSProperties;
  id?: string;
  children: ReactNode;
  onPointerMove?: React.PointerEventHandler<HTMLElement>;
};

/**
 * Fades and lifts its content in when it scrolls into view.
 * Anything already on screen at load stays visible, so the first frame is always complete.
 */
export default function Reveal({
  as = "div",
  className = "",
  children,
  ...rest
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (reduced) {
      setHidden(false);
      return;
    }
    if (!el || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.92) return;
    setHidden(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  return createElement(
    as,
    { ref, className: `${className} rv${hidden ? " rv-hide" : ""}`, ...rest },
    children,
  );
}
