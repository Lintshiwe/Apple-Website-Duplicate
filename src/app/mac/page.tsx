"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const macProducts = [
  {
    name: "MacBook Neo",
    isNew: true,
    tagline: "The magic of Mac at a surprising price.",
    imageSrc: "/images/macbook-neo-welcome.jpg",
    colors: ["#c0c0c0", "#ffd700", "#ffb6c1", "#87ceeb"],
    href: "/mac",
    category: "laptop",
  },
  {
    name: "MacBook Air",
    isNew: true,
    tagline: "Thin. Fast. Powerful and portable.",
    imageSrc: "/images/macbook-air-hero.png",
    colors: ["#c0c0c0", "#1e3a5f", "#d4a5a5", "#2d5a27"],
    href: "/mac",
    category: "laptop",
  },
  {
    name: "MacBook Pro",
    isNew: true,
    tagline: "The most advanced Mac laptops for demanding tasks.",
    imageSrc: "/images/macbook-pro-hero.jpg",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
    category: "laptop",
  },
  {
    name: "iMac",
    tagline: "An all-in-one desktop for creativity and productivity.",
    imageSrc: "/images/imac-welcome.jpg",
    colors: ["#c0c0c0", "#e8a0bf", "#a0c4ff", "#b4f0b4", "#ffd700", "#ff6b6b", "#c9b1ff"],
    href: "/mac",
    category: "desktop",
  },
  {
    name: "Mac mini",
    tagline: "The mini-est, most affordable Mac desktop.",
    imageSrc: "/images/mac-mini-hero.png",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
    category: "desktop",
  },
  {
    name: "Mac Studio",
    tagline: "Powerful performance and connectivity for pros.",
    imageSrc: "/images/mac-studio-hero.jpg",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
    category: "desktop",
  },
  {
    name: "Studio Display",
    isNew: true,
    tagline: "A 5K Retina display that's perfect for Mac.",
    imageSrc: "/images/studio-display-hero.jpg",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
    category: "display",
  },
  {
    name: "Studio Display XDR",
    isNew: true,
    tagline: "The ultimate 5K Retina XDR display for creative and pro workflows.",
    imageSrc: "/images/buy-studio-display-xdr.png",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
    category: "display",
  },
];

const features = [
  { title: "Performance and Battery Life", subtitle: "Go fast. Go far.", image: "/images/features/mac-performance.jpg" },
  { title: "Built for AI", subtitle: "Smart. Secure. On device.", image: "/images/features/mac-intelligence.jpg" },
  { title: "Compatibility", subtitle: "Mac runs your favourite apps.", image: "/images/features/mac-compatibility.jpg" },
  { title: "Privacy and Security", subtitle: "Your business is nobody else's.", image: "/images/features/mac-security.jpg" },
  { title: "Durability", subtitle: "Built to stand the test of time.", image: "/images/features/mac-durability.jpg" },
  { title: "Apple Values", subtitle: "Our values drive everything we do.", image: "/images/features/mac-values.jpg" },
];

const ecosystem = [
  {
    title: "Mac and iPhone",
    description: "Answer calls or messages from your iPhone directly on your Mac. Use Universal Clipboard to copy images, video or text from your iPhone, then paste into another app on your nearby Mac.",
    image: "/images/ecosystem/mac-iphone.jpg",
  },
  {
    title: "Mac and iPad",
    description: "Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other.",
    image: "/images/ecosystem/mac-ipad.jpg",
  },
  {
    title: "Mac and Apple Watch",
    description: "Automatically log in to your Mac when you're wearing your Apple Watch with Auto Unlock. No password typing required.",
    image: "/images/ecosystem/mac-watch.jpg",
  },
];

const filterTabs = [
  { label: "All products", value: "all" },
  { label: "Laptops", value: "laptop" },
  { label: "Desktops", value: "desktop" },
  { label: "Displays", value: "display" },
];

export default function MacPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? macProducts
      : macProducts.filter((p) => p.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-11">
        {/* Hero */}
        <section className="bg-neutral-100 py-16 md:py-24 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900">
              Mac
            </h1>
            <p className="text-xl md:text-2xl font-normal mt-2 text-neutral-600">
              Explore the lineup.
            </p>
            <div className="flex gap-4 justify-center mt-6 text-sm">
              {filterTabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`transition-colors pb-0.5 ${
                    activeFilter === tab.value
                      ? "text-neutral-900 font-semibold border-b-2 border-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Product Grid */}
        <section className="bg-neutral-100 py-3">
          <ScrollReveal className="max-w-[980px] mx-auto px-3" stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.name}
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                >
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[#06c] text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
                      New
                    </span>
                  )}
                   <div
                    className="w-full h-64 md:h-80 overflow-hidden flex items-center justify-center relative"
                  >
                    {product.imageSrc ? (
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        fill
                        className="!relative object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <span className="text-3xl font-semibold text-white/30">{product.name}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 mb-1">
                      {product.name}
                    </h3>
                    {product.colors && (
                      <div className="flex gap-1.5 justify-center mb-2">
                        {product.colors.map((color: string) => (
                          <span
                            key={color}
                            className="w-3 h-3 rounded-full border border-neutral-300"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    )}
                    <p className="text-sm text-neutral-600 mb-3">{product.tagline}</p>
                    <div className="flex items-center justify-center gap-4">
                      <Link href="/mac" className="text-sm text-[#06c] hover:underline">Learn more</Link>
                      <Link href="/where-to-buy" className="text-sm text-[#06c] hover:underline">Find a store</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Get to know Mac */}
        <section className="bg-white py-16 md:py-24">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
              Get to know Mac.
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="snap-center shrink-0 w-72 h-80 rounded-xl overflow-hidden relative group cursor-pointer"
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="288px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm opacity-80 mt-1">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Ecosystem */}
        <section className="bg-neutral-100 py-16 md:py-24">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
              Unlock the world of Apple.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecosystem.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
