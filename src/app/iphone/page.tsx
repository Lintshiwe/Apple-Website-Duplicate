"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const iphoneProducts = [
  {
    name: "iPhone 17 Pro",
    tagline: "Innovative design for ultimate performance and battery life.",
    imageSrc: "/images/iphone-17-pro-hero.jpg",
    colors: ["#333333", "#c0c0c0", "#e8a0bf", "#ffd700", "#1e3a5f", "#8b5cf6", "#047857"],
    href: "/iphone",
  },
  {
    name: "iPhone Air",
    tagline: "The thinnest iPhone ever. With the power of pro inside.",
    imageSrc: "/images/buy-iphone-air.png",
    colors: ["#c0c0c0", "#1e3a5f", "#e8a0bf", "#ffd700"],
    href: "/iphone",
  },
  {
    name: "iPhone 17",
    tagline: "Even more delightful. Even more durable.",
    imageSrc: "/images/buy-iphone-17.png",
    colors: ["#c0c0c0", "#1e3a5f", "#e8a0bf", "#ffd700", "#047857"],
    href: "/iphone",
  },
  {
    name: "iPhone 17e",
    isNew: true,
    tagline: "Feature stacked. Value packed.",
    imageSrc: "/images/buy-iphone-17e.png",
    colors: ["#333333", "#c0c0c0"],
    href: "/iphone",
  },
  {
    name: "iPhone 16",
    tagline: "Amazing performance. Durable design.",
    imageSrc: "/images/iphone16-hero.png",
    colors: ["#333333", "#c0c0c0", "#e8a0bf", "#b4f0b4", "#a0c4ff", "#ffd700"],
    href: "/iphone",
  },
];

const features = [
  { title: "Innovation", subtitle: "Beautiful and durable, by design." },
  { title: "Cutting-Edge Cameras", subtitle: "Picture your best photos and videos." },
  { title: "Chip and Battery Life", subtitle: "Fast that lasts." },
  { title: "iOS and Apple Intelligence", subtitle: "New look. Even more magic." },
  { title: "Environment", subtitle: "Designed with the earth in mind." },
  { title: "Privacy", subtitle: "Your data. Just where you want it." },
];

const ecosystem = [
  {
    title: "iPhone and Mac",
    description: "You can copy images, video or text from your iPhone and paste it into a different app on your Mac, as well as answer calls or messages from your iPhone. And with iCloud, you can access your favourite files from either your iPhone or Mac.",
  },
  {
    title: "iPhone and Apple Watch",
    description: "Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction. To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot.",
  },
];

export default function IphonePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-11">
        {/* Hero */}
        <section className="bg-neutral-100 py-16 md:py-24 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900">
              iPhone
            </h1>
            <p className="text-xl md:text-2xl font-normal mt-2 text-neutral-600">
              Explore the lineup.
            </p>
          </ScrollReveal>
        </section>

        {/* Product Grid */}
        <section className="bg-neutral-100 py-3">
          <ScrollReveal className="max-w-[980px] mx-auto px-3" stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {iphoneProducts.map((product) => (
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
                      <span className="text-3xl font-semibold text-neutral-400/30">{product.name}</span>
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
                    <span className="text-sm text-[#06c] hover:underline">
                      Learn more &gt;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Get to know iPhone */}
        <section className="bg-white py-16 md:py-24">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
              Get to know iPhone.
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="snap-center shrink-0 w-64 h-40 rounded-xl flex flex-col justify-end p-5 text-white"
                  style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
                >
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm opacity-80 mt-1">{feature.subtitle}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Ecosystem */}
        <section className="bg-neutral-100 py-16 md:py-24">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
              Significant others.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecosystem.map((item) => (
                <div key={item.title}>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
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
