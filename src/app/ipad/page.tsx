"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const ipadProducts = [
  {
    name: "iPad Pro",
    tagline: "The ultimate iPad experience with the most advanced technology.",
    imageSrc: "/images/ipad-pro-hero.jpg",
    colors: ["#333333", "#c0c0c0"],
    href: "/ipad",
  },
  {
    name: "iPad Air",
    isNew: true,
    tagline: "Serious performance in a thin and light design.",
    imageSrc: "/images/ipad-air-hero.png",
    colors: ["#c0c0c0", "#1e3a5f", "#d4a5a5", "#2d5a27", "#ffd700"],
    href: "/ipad",
  },
  {
    name: "iPad",
    tagline: "The colourful, all-screen iPad for the things you do every day.",
    imageSrc: "/images/buy-ipad.png",
    colors: ["#c0c0c0", "#e8a0bf", "#a0c4ff", "#b4f0b4", "#ffd700"],
    href: "/ipad",
  },
  {
    name: "iPad mini",
    tagline: "The full iPad experience in an ultra-portable design.",
    imageSrc: "/images/buy-ipad-mini.png",
    colors: ["#c0c0c0", "#1e3a5f", "#e8a0bf", "#ffd700"],
    href: "/ipad",
  },
];

const features = [
  { title: "iPadOS + Apps", subtitle: "Flexible windowing. A multitasker's delight.", image: "/images/features/ipad-ipados.jpg" },
  { title: "Productivity", subtitle: "Your workplace can be any place.", image: "/images/features/ipad-productivity.jpg" },
  { title: "Creativity", subtitle: "Take your inner artist out and about.", image: "/images/features/ipad-creativity.jpg" },
  { title: "Learning", subtitle: "Your classroom can be anywhere.", image: "/images/features/ipad-learning.jpg" },
  { title: "Entertainment", subtitle: "Kick back. Tune in. Game on.", image: "/images/features/ipad-entertainment.jpg" },
  { title: "Apple Pencil", subtitle: "Dream it up. Jot it down.", image: "/images/features/ipad-pencil.jpg" },
  { title: "Apple Intelligence", subtitle: "Effortlessly helpful every day.", image: "/images/features/ipad-intelligence.jpg" },
];

const ecosystem = [
  {
    title: "iPad and iPhone",
    description: "iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more.",
    image: "/images/ecosystem/ipad-iphone.jpg",
  },
  {
    title: "iPad and Mac",
    description: "iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar.",
    image: "/images/ecosystem/ipad-mac.jpg",
  },
  {
    title: "iPad and Apple Watch",
    description: "iPad is perfect for seeing rich Health data tracked from Apple Watch and reviewing trends and highlights in the Health app on a larger display.",
    image: "/images/ecosystem/ipad-watch.jpg",
  },
];

export default function IpadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-11">
        {/* Hero */}
        <section className="bg-neutral-100 py-16 md:py-24 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900">
              iPad
            </h1>
            <p className="text-xl md:text-2xl font-normal mt-2 text-neutral-600">
              Explore the lineup.
            </p>
            <div className="mt-6">
              <Link href="/ipad" className="text-sm text-[#06c] hover:underline">
                Compare all models &gt;
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Product Grid */}
        <section className="bg-neutral-100 py-3">
          <ScrollReveal className="px-6 md:px-12" stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ipadProducts.map((product) => (
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
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
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
                    <div className="flex items-center justify-center gap-4">
                      <Link href="/ipad" className="text-sm text-[#06c] hover:underline">Learn more</Link>
                      <Link href="/where-to-buy" className="text-sm text-[#06c] hover:underline">Find a Store</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Get to know iPad */}
        <section className="bg-white py-16 md:py-24">
          <ScrollReveal className="px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
              Get to know iPad.
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
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
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
          <ScrollReveal className="px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
              Significant others.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ecosystem.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl overflow-hidden">
                  <div className="relative aspect-video">
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
