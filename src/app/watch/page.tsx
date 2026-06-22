"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const watchProducts = [
  {
    name: "Apple Watch Series 11",
    tagline: "The ultimate way to watch your health.",
    imageSrc: "/images/promo-apple-watch-series-11-2x.jpg",
    colors: ["#333333", "#c0c0c0", "#e8a0bf", "#1a1a1a", "#c0a060", "#ffd700", "#607080"],
    href: "/watch",
  },
  {
    name: "Apple Watch SE 3",
    tagline: "Essential health features at a great price.",
    imageSrc: "/images/buy-watch-se.png",
    colors: ["#1a1a2e", "#d4c5a0"],
    href: "/watch",
  },
  {
    name: "Apple Watch Ultra 3",
    tagline: "The ultimate sports and adventure watch.",
    imageSrc: "/images/buy-watch-ultra.png",
    colors: ["#c0a060", "#333333"],
    href: "/watch",
  },
];

const features = [
  { title: "Health", subtitle: "Knows you. Insights and out.", image: "/images/features/watch-health.jpg" },
  { title: "Fitness", subtitle: "Miles of motivation.", image: "/images/features/watch-fitness.jpg" },
  { title: "Safety", subtitle: "Keep help close at hand.", image: "/images/features/watch-safety.jpg" },
  { title: "Apple Watch Ultra 3", subtitle: "The ultimate sports and adventure watch.", image: "/images/features/watch-adventure.jpg" },
  { title: "Connectivity", subtitle: "The right call for staying in touch.", image: "/images/features/watch-connectivity.jpg" },
  { title: "Personalisation", subtitle: "Make it you-nique.", image: "/images/features/watch-personalization.jpg" },
  { title: "Apple Watch + iPhone", subtitle: "Dynamic duo.", image: "/images/features/watch-watch-iphone.jpg" },
];

const ecosystem = [
  {
    title: "Apple Watch and iPhone",
    description: "Combining Apple Watch and iPhone opens up a world of features that make each device better. You can do things like start a cycling workout on your watch and see your metrics automatically appear as a Live Activity on your iPhone.",
    image: "/images/ecosystem/watch-iphone.jpg",
  },
  {
    title: "Apple Watch and AirPods",
    description: "You can do so much with just Apple Watch and AirPods — all without your iPhone. Take calls, stream music and podcasts, hear incoming notifications. Even respond to messages with Siri.",
    image: "/images/ecosystem/watch-airpods.jpg",
  },
];

export default function WatchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-11">
        {/* Hero */}
        <section className="bg-neutral-100 py-16 md:py-24 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900">
              Apple Watch
            </h1>
            <p className="text-xl md:text-2xl font-normal mt-2 text-neutral-600">
              Explore the lineup.
            </p>
          </ScrollReveal>
        </section>

        {/* Product Grid */}
        <section className="bg-neutral-100 py-3">
          <ScrollReveal className="px-6 md:px-12" stagger>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {watchProducts.map((product) => (
                <div
                  key={product.name}
                  className="group relative bg-white rounded-2xl overflow-hidden flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
                >
                   <div
                    className="w-full h-64 md:h-80 overflow-hidden flex items-center justify-center relative"
                  >
                    {product.imageSrc ? (
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-[1.02] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <span className="text-2xl font-semibold text-white/30">{product.name}</span>
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
                      <Link href="/watch" className="text-sm text-[#06c] hover:underline">Learn more</Link>
                      <Link href="/where-to-buy" className="text-sm text-[#06c] hover:underline">Find a store</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Get to know Apple Watch */}
        <section className="bg-white py-16 md:py-24">
          <ScrollReveal className="px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-neutral-900 mb-12">
              Get to know Apple Watch.
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
              Made for each other.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ecosystem.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl overflow-hidden">
                  <div className="relative aspect-video bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
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
