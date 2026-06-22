"use client";

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
  },
  {
    name: "MacBook Air",
    isNew: true,
    tagline: "Thin. Fast. Powerful and portable.",
    imageSrc: "/images/macbook-air-hero.png",
    colors: ["#c0c0c0", "#1e3a5f", "#d4a5a5", "#2d5a27"],
    href: "/mac",
  },
  {
    name: "MacBook Pro",
    isNew: true,
    tagline: "The most advanced Mac laptops for demanding tasks.",
    imageSrc: "/images/macbook-pro-hero.jpg",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
  },
  {
    name: "iMac",
    tagline: "An all-in-one desktop for creativity and productivity.",
    imageSrc: "/images/imac-welcome.jpg",
    colors: ["#c0c0c0", "#e8a0bf", "#a0c4ff", "#b4f0b4", "#ffd700", "#ff6b6b", "#c9b1ff"],
    href: "/mac",
  },
  {
    name: "Mac mini",
    tagline: "The mini-est, most affordable Mac desktop.",
    imageSrc: "/images/mac-mini-hero.png",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
  },
  {
    name: "Mac Studio",
    tagline: "Powerful performance and connectivity for pros.",
    imageSrc: "/images/mac-studio-hero.jpg",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
  },
  {
    name: "Studio Display",
    isNew: true,
    tagline: "A 5K Retina display that's perfect for Mac.",
    imageSrc: "/images/studio-display-hero.jpg",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
  },
  {
    name: "Studio Display XDR",
    isNew: true,
    tagline: "The ultimate 5K Retina XDR display for creative and pro workflows.",
    imageSrc: "/images/buy-studio-display-xdr.png",
    colors: ["#c0c0c0", "#333333"],
    href: "/mac",
  },
];

const features = [
  { title: "Performance and Battery Life", subtitle: "Go fast. Go far." },
  { title: "Built for AI", subtitle: "Smart. Secure. On device." },
  { title: "Mac + iPhone", subtitle: "Together they work wonders." },
  { title: "Compatibility", subtitle: "Mac runs your favourite apps." },
  { title: "Privacy and Security", subtitle: "Your business is nobody else's." },
  { title: "Durability", subtitle: "Built to stand the test of time." },
  { title: "Apple Values", subtitle: "Our values drive everything we do." },
];

const ecosystem = [
  {
    title: "Mac and iPhone",
    description: "Answer calls or messages from your iPhone directly on your Mac. Use Universal Clipboard to copy images, video or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac.",
  },
  {
    title: "Mac and iPad",
    description: "Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start something on your iPad and continue it on your Mac.",
  },
  {
    title: "Mac and Apple Watch",
    description: "Automatically log in to your Mac when you're wearing your Apple Watch with Auto Unlock. No password typing required.",
  },
];

export default function MacPage() {
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
              <span className="text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-0.5">All products</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors">Laptops</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors">Desktops</span>
              <span className="text-neutral-600 hover:text-neutral-900 cursor-pointer transition-colors">Displays</span>
            </div>
          </ScrollReveal>
        </section>

        {/* Product Grid */}
        <section className="bg-neutral-100 py-3">
          <ScrollReveal className="max-w-[980px] mx-auto px-3" stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {macProducts.map((product) => (
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
                        className="!relative object-cover group-hover:scale-105 transition-transform duration-500"
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
              Unlock the world of Apple.
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
