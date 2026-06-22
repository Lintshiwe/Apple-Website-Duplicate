"use client";

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
  logoSrc,
  logoAlt,
}: HeroBannerProps) {
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
          <div className="w-full pb-0 -mb-px relative">
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              className="!relative object-cover"
              sizes="100vw"
              priority={imagePriority}
            />
          </div>
        )}
      </ScrollReveal>
    </section>
  );
}
