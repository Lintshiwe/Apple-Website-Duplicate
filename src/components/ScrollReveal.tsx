"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  stagger = false,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add init class to hide element (CSS transitions from visible→hidden)
    const baseClass = stagger ? "scroll-reveal-children-init" : "scroll-reveal-init";
    el.classList.add(baseClass);
    setReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Remove init, add revealed to trigger reveal animation
          el.classList.remove(baseClass);
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    // Small delay to allow the init class transition to register before observing
    requestAnimationFrame(() => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [stagger, threshold]);

  return (
    <div
      ref={ref}
      className={`${stagger ? "scroll-reveal-children" : "scroll-reveal"} ${className}`}
    >
      {children}
    </div>
  );
}
