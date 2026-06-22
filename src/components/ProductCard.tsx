"use client";

import Image from "next/image";

interface CtaLink {
  text: string;
  href: string;
}

interface ProductCardProps {
  name: string;
  tagline?: string;
  taglineColor?: string;
  description: string;
  startingPrice?: string;
  ctaLinks: CtaLink[];
  bgColor?: string;
  textColor?: string;
  className?: string;
  imageGradient?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProductCard({
  name,
  tagline,
  taglineColor = "text-blue-600",
  description,
  startingPrice,
  ctaLinks,
  bgColor = "bg-white",
  textColor = "text-neutral-900",
  className = "",
  imageGradient = "linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)",
  imageSrc,
  imageAlt,
}: ProductCardProps) {
  return (
    <div
      className={`${bgColor} ${textColor} rounded-xl overflow-hidden flex flex-col transition-transform duration-300 ease-out hover:scale-[1.02] ${className}`}
    >
      <div
        className="h-64 md:h-80 flex items-center justify-center overflow-hidden relative"
        style={imageSrc ? undefined : { background: imageGradient }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || name}
            fill
            className="!relative object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className={`text-3xl md:text-4xl font-semibold ${textColor} opacity-30`}>
            {name}
          </span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        {tagline && (
          <p className={`text-sm font-semibold uppercase tracking-widest ${taglineColor} mb-1`}>
            {tagline}
          </p>
        )}
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {name}
        </h3>
        <p className="text-lg mt-1 opacity-70">{description}</p>
        {startingPrice && (
          <p className="text-base mt-2 opacity-60">{startingPrice}</p>
        )}
        {ctaLinks.length > 0 && (
          <div className="flex gap-4 mt-4">
            {ctaLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="text-base text-[#06c] hover:underline transition-all"
              >
                {link.text} &gt;
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
