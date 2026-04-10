"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Props = {
  texts: string[];
  className?: string;
};

export default function TypingText({ texts, className }: Props) {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const text = texts[index];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && value.length < text.length) {
      timeout = setTimeout(() => {
        setValue(text.slice(0, value.length + 1));
      }, 80);
    }

    if (!isDeleting && value.length === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    }

    if (isDeleting && value.length > 0) {
      timeout = setTimeout(() => {
        setValue(text.slice(0, value.length - 1));
      }, 40);
    }

    if (isDeleting && value.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [value, isDeleting, text, texts.length]);

  return (
    <span className={cn("flex items-center", className)}>
      {value}
      <span className="ml-1 animate-blink">|</span>
    </span>
  );
}
