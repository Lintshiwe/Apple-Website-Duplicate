"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import ScrollReveal from "@/components/ScrollReveal";

const promoCards = [
  {
    name: "MacBook Pro",
    description: "Now with M5, M5 Pro and M5 Max.",
    imageSrc: "/images/macbook-pro-hero.jpg",
    href: "/mac",
  },
  {
    name: "MacBook Air",
    description: "Now supercharged by M5.",
    imageSrc: "/images/macbook-air-hero.png",
    href: "/mac",
  },
  {
    name: "Studio Display",
    description: "A sight to be bold.",
    imageSrc: "/images/studio-display-hero.jpg",
    href: "/mac",
  },
  {
    name: "Apple Watch Series 11",
    description: "The ultimate way to watch your health.",
    imageSrc: "/images/promo-apple-watch-series-11-2x.jpg",
    logoSrc: "/images/logo-apple-watch-series-11.png",
    href: "/watch",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 pt-11">
        {/* Hero: iPhone */}
        <HeroBanner
          tagline="iPhone"
          title="iPhone"
          subtitle="Meet the latest iPhone lineup."
          bgColor="bg-neutral-100"
          ctaLinks={[{ text: "Learn more", href: "/iphone" }]}
          imageSrc="/images/iphone-17-pro-hero.jpg"
          imagePriority
        />

        {/* Hero: MacBook Neo */}
        <HeroBanner
          title="MacBook Neo"
          subtitle="Amazing Mac. Surprising price."
          bgColor="bg-white"
          ctaLinks={[{ text: "Learn more", href: "/mac" }]}
          imageSrc="/images/macbook-neo-welcome.jpg"
        />

        {/* Hero: iPad Air */}
        <HeroBanner
          title="iPad Air"
          subtitle="Now supercharged by M4."
          bgColor="bg-white"
          ctaLinks={[{ text: "Learn more", href: "/ipad" }]}
          imageSrc="/images/hero-ipad-air-m4-2x.jpg"
          logoSrc="/images/logo-ipad-air-m4.png"
          logoAlt="iPad Air"
        />

        {/* Promo Cards — 2x2 grid matching apple.com/za */}
        <section className="bg-[#f5f5f7] w-full">
          <ScrollReveal className="max-w-[980px] mx-auto px-4 py-3" stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {promoCards.map((card) => (
                <Link
                  key={card.name}
                  href={card.href}
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col items-center text-center"
                >
                  <div className="w-full h-72 md:h-96 overflow-hidden relative">
                    <Image
                      src={card.imageSrc}
                      alt={card.name}
                      fill
                      className="!relative object-contain group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="py-5 px-6">
                    {card.logoSrc && (
                      <Image
                        src={card.logoSrc}
                        alt={`${card.name} logo`}
                        width={80}
                        height={32}
                        className="h-8 w-auto object-contain mx-auto mb-1"
                      />
                    )}
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-0.5">
                      {card.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-2">
                      {card.description}
                    </p>
                    <span className="text-sm text-[#06c] hover:underline">
                      Learn more &gt;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}
