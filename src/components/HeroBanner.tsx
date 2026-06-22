"use client";

import { useRef, useEffect, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

interface CtaLink {
  text: string;
  href: string;
}

interface HeroBannerProps {
  title: string;
  subtitle: string;
  tagline?: string;
  bgColor?: string;
  textColor?: string;
  ctaLinks?: CtaLink[];
  className?: string;
  id?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePriority?: boolean;
  imagePosition?: "top" | "center";
  parallax?: boolean;
  logoSrc?: string;
  logoAlt?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  tagline,
  bgColor = "bg-white",
  textColor = "text-neutral-900",
  ctaLinks = [],
  className = "",
  id,
  imageSrc,
  imageAlt,
  imagePriority = false,
  imagePosition = "top",
  parallax = false,
  logoSrc,
  logoAlt,
}: HeroBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const containerCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight / 2;
    const offset = (containerCenter - viewportCenter) * 0.15;
    imageRef.current.style.transform = `translateY(${offset}px)`;
  }, []);

  useEffect(() => {
    if (!parallax) return;
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [parallax, handleScroll]);

  return (
    <section id={id} className={`w-full ${bgColor} ${textColor} ${className}`}>
      <ScrollReveal className="flex flex-col items-center text-center">
        {logoSrc && (
          <div className="pt-12 md:pt-16 lg:pt-20 mb-2">
            <Image
              src={logoSrc}
              alt={logoAlt || `${title} logo`}
              width={120}
              height={40}
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        )}
        {tagline && (
          <p className="text-sm font-semibold uppercase tracking-widest opacity-70 mb-2 pt-12 md:pt-16 lg:pt-20">
            {tagline}
          </p>
        )}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
          {title}
        </h2>
        <p className="text-xl md:text-2xl font-normal mt-2 opacity-80">
          {subtitle}
        </p>
        {ctaLinks.length > 0 && (
          <div className="flex gap-6 mt-4 pb-4">
            {ctaLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="flex items-center gap-1 text-base text-[#06c] hover:underline transition-all"
              >
                {link.text}
                <ChevronRight size={14} className="mt-px" />
              </Link>
            ))}
          </div>
        )}
        {imageSrc && (
          <div ref={containerRef} className="w-full relative h-[450px] md:h-[550px] lg:h-[700px] overflow-hidden">
            <div
              ref={imageRef}
              className="absolute inset-0"
              style={parallax ? { willChange: "transform" } : undefined}
            >
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className={`object-cover ${imagePosition === "center" ? "object-center" : "object-top"}`}
                sizes="100vw"
                priority={imagePriority}
              />
            </div>
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
