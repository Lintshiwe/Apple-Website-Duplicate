"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const macProducts = [
  {
    name: "New MacBook Neo",
    chip: "A18 Pro chip",
    imageSrc: "/images/buy-macbook-neo.png",
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Blush", hex: "#E8B4B8" },
      { name: "Citrus", hex: "#F4D03F" },
      { name: "Indigo", hex: "#4B0082" },
    ],
    description: "The magic of Mac at a surprising price.",
  },
  {
    name: "New MacBook Air",
    chip: '13" and 15" M5 chip',
    imageSrc: "/images/buy-macbook-air.png",
    colors: [
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Starlight", hex: "#F5E6CC" },
      { name: "Midnight", hex: "#191970" },
    ],
    description: "Thin. Fast. Powerful and portable.",
  },
  {
    name: "New MacBook Pro",
    chip: '14" and 16" M5, M5 Pro, or M5 Max chip',
    imageSrc: "/images/buy-macbook-pro.png",
    colors: [
      { name: "Space Black", hex: "#1C1C1E" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    description: "The most advanced Mac laptops for demanding tasks.",
  },
  {
    name: "iMac",
    chip: "M4 chip",
    imageSrc: "/images/buy-imac.png",
    colors: [
      { name: "Blue", hex: "#5B9BD5" },
      { name: "Purple", hex: "#9B59B6" },
      { name: "Pink", hex: "#E91E8C" },
      { name: "Orange", hex: "#F39C12" },
      { name: "Yellow", hex: "#F1C40F" },
      { name: "Green", hex: "#2ECC71" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    description: "A stunning all-in-one desktop for creativity and productivity.",
  },
  {
    name: "Mac mini",
    chip: "M4 or M4 Pro chip",
    imageSrc: "/images/buy-mac-mini.png",
    colors: [],
    description: "The mini-est, most affordable Mac with mighty performance.",
  },
  {
    name: "Mac Studio",
    chip: "M4 Max or M3 Ultra chip",
    imageSrc: "/images/buy-mac-studio.png",
    colors: [],
    description: "Powerful performance and extensive connectivity for pro workflows.",
  },
  {
    name: "Mac Pro",
    chip: "M2 Ultra chip",
    imageSrc: "/images/buy-mac-pro.png",
    colors: [],
    description: "A pro workstation with PCIe expansion for demanding workflows.",
  },
  {
    name: "New Studio Display",
    chip: "",
    imageSrc: "/images/buy-studio-display.png",
    colors: [],
    description: "A 5K Retina display that's perfect for Mac.",
  },
  {
    name: "New Studio Display XDR",
    chip: "",
    imageSrc: "/images/buy-studio-display-xdr.png",
    colors: [],
    description: "The ultimate 5K Retina XDR display for creative and pro workflows.",
  },
];

const ipadProducts = [
  {
    name: "iPad Pro",
    imageSrc: "/images/buy-ipad-pro.png",
    colors: [
      { name: "Space Black", hex: "#1C1C1E" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    description: "The ultimate iPad experience with the most advanced technology.",
  },
  {
    name: "New iPad Air",
    imageSrc: "/images/buy-ipad-air.png",
    colors: [
      { name: "Space Grey", hex: "#8E8E93" },
      { name: "Blue", hex: "#5B9BD5" },
      { name: "Purple", hex: "#9B59B6" },
      { name: "Starlight", hex: "#F5E6CC" },
    ],
    description: "Serious performance in a thin and light design.",
  },
  {
    name: "iPad",
    imageSrc: "/images/buy-ipad.png",
    colors: [
      { name: "Blue", hex: "#5B9BD5" },
      { name: "Pink", hex: "#E91E8C" },
      { name: "Yellow", hex: "#F1C40F" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    description: "The colourful, all-screen iPad for the things you do every day.",
  },
  {
    name: "iPad mini",
    imageSrc: "/images/buy-ipad-mini.png",
    colors: [
      { name: "Space Grey", hex: "#8E8E93" },
      { name: "Blue", hex: "#5B9BD5" },
      { name: "Purple", hex: "#9B59B6" },
      { name: "Starlight", hex: "#F5E6CC" },
    ],
    description: "The full iPad experience in an ultra-portable design.",
  },
];

const iphoneProducts = [
  {
    name: "iPhone 17 Pro",
    imageSrc: "/images/buy-iphone-17pro.png",
    colors: [
      { name: "Cosmic Orange", hex: "#FF6B35" },
      { name: "Deep Blue", hex: "#1B3A5C" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    description: "Innovative design for ultimate performance and battery life.",
  },
  {
    name: "iPhone Air",
    imageSrc: "/images/buy-iphone-air.png",
    colors: [
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Light Gold", hex: "#F5E6CC" },
      { name: "Cloud White", hex: "#F8F8FF" },
      { name: "Space Black", hex: "#1C1C1E" },
    ],
    description: "The thinnest iPhone ever. With the power of pro inside.",
  },
  {
    name: "iPhone 17",
    imageSrc: "/images/buy-iphone-17.png",
    colors: [
      { name: "Lavender", hex: "#B57EDC" },
      { name: "Sage", hex: "#9CAF88" },
      { name: "Mist Blue", hex: "#A4C8E1" },
      { name: "White", hex: "#F8F8FF" },
      { name: "Black", hex: "#1C1C1E" },
    ],
    description: "Even more delightful. Even more durable.",
  },
  {
    name: "New iPhone 17e",
    imageSrc: "/images/buy-iphone-17e.png",
    colors: [
      { name: "Soft Pink", hex: "#F8B4C8" },
      { name: "White", hex: "#F8F8FF" },
      { name: "Black", hex: "#1C1C1E" },
    ],
    description: "Feature stacked. Value packed.",
  },
  {
    name: "iPhone 16",
    imageSrc: "/images/buy-iphone-16.png",
    colors: [
      { name: "Ultramarine", hex: "#3F51B5" },
      { name: "Teal", hex: "#008080" },
      { name: "Pink", hex: "#E91E8C" },
      { name: "White", hex: "#F8F8FF" },
      { name: "Black", hex: "#1C1C1E" },
    ],
    description: "Amazing performance. Durable design.",
  },
];

const watchProducts = [
  {
    name: "Apple Watch Series 11",
    imageSrc: "/images/buy-watch-s11.png",
    colors: [
      { name: "Space Grey", hex: "#8E8E93" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Rose Gold", hex: "#E8B4B8" },
      { name: "Jet Black", hex: "#0A0A0A" },
      { name: "Natural titanium", hex: "#B0B0B0" },
      { name: "Gold titanium", hex: "#D4AF37" },
      { name: "Slate titanium", hex: "#5A5A5A" },
    ],
    description: "The ultimate way to watch your health.",
  },
  {
    name: "Apple Watch SE 3",
    imageSrc: "/images/buy-watch-se.png",
    colors: [
      { name: "Midnight", hex: "#191970" },
      { name: "Starlight", hex: "#F5E6CC" },
    ],
    description: "Essential health features at a great price.",
  },
  {
    name: "Apple Watch Ultra 3",
    imageSrc: "/images/buy-watch-ultra.png",
    colors: [
      { name: "Natural", hex: "#B0B0B0" },
      { name: "Black", hex: "#1C1C1E" },
    ],
    description: "The ultimate sports and adventure watch.",
  },
];

function ProductList({ products }: { products: { name: string; chip?: string; colors: { name: string; hex: string }[]; description: string; imageSrc?: string }[] }) {
  return (
    <div className="space-y-6">
      {products.map((product) => (
        <div key={product.name} className="flex flex-col md:flex-row md:items-center gap-6 py-6 border-b border-neutral-200 last:border-b-0">
          {product.imageSrc && (
            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 flex items-center justify-center">
              <Image src={product.imageSrc} alt={product.name} width={128} height={128} className="object-contain" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-neutral-900">
              {product.name} {product.chip && <span className="font-normal text-neutral-600">{product.chip}</span>}
            </h3>
            {product.colors.length > 0 && (
              <div className="flex items-center gap-2 mt-2">
                {product.colors.map((color) => (
                  <div
                    key={color.name}
                    className="w-5 h-5 rounded-full border border-neutral-300"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            )}
            <p className="text-sm text-neutral-600 mt-2">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WhereToBuyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-11">
        {/* Hero */}
        <section className="bg-neutral-100 py-16 md:py-24 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900">
              Buy from an Apple reseller near&nbsp;you.
            </h1>
          </ScrollReveal>
        </section>

        {/* Category Tabs */}
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-[980px] mx-auto px-6">
            <nav className="flex gap-1 py-3 overflow-x-auto" aria-label="Product categories">
              {[
                { label: "Mac", href: "#mac" },
                { label: "iPad", href: "#ipad" },
                { label: "iPhone", href: "#iphone" },
                { label: "Watch", href: "#watch" },
              ].map((tab) => (
                <a
                  key={tab.label}
                  href={tab.href}
                  className="px-5 py-2 rounded-full text-sm font-medium text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors shrink-0"
                >
                  {tab.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Mac Availability */}
        <section id="mac" className="bg-white py-16 md:py-24 scroll-mt-12">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2">
              Mac availability in South Africa
            </h2>
            <p className="text-base text-neutral-600 mb-8">
              Apple resellers may have other Mac computers and displays available.
            </p>
            <ProductList products={macProducts} />
          </ScrollReveal>
        </section>

        {/* iPad Availability */}
        <section id="ipad" className="bg-neutral-100 py-16 md:py-24 scroll-mt-12">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2">
              iPad availability in South Africa
            </h2>
            <p className="text-base text-neutral-600 mb-8">
              Apple resellers may have other iPad models available.
            </p>
            <ProductList products={ipadProducts} />
          </ScrollReveal>
        </section>

        {/* iPhone Availability */}
        <section id="iphone" className="bg-white py-16 md:py-24 scroll-mt-12">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2">
              iPhone availability in South Africa
            </h2>
            <p className="text-base text-neutral-600 mb-8">
              Apple resellers may have other iPhone models available.
            </p>
            <ProductList products={iphoneProducts} />
          </ScrollReveal>
        </section>

        {/* Apple Watch Availability */}
        <section id="watch" className="bg-neutral-100 py-16 md:py-24 scroll-mt-12">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-2">
              Apple Watch availability in South Africa
            </h2>
            <p className="text-base text-neutral-600 mb-8">
              Apple resellers may have other Apple Watch models available.
            </p>
            <ProductList products={watchProducts} />
          </ScrollReveal>
        </section>

        {/* Disclaimer */}
        <section className="bg-white py-4">
          <div className="max-w-[980px] mx-auto px-6">
            <p className="text-sm text-neutral-500">
              Products may not be available in all areas. Check with local resellers for availability.
            </p>
          </div>
        </section>

        {/* Find a Reseller */}
        <section className="bg-white py-16 md:py-24">
          <ScrollReveal className="max-w-[980px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
              Apple resellers in South Africa
            </h2>
            <p className="text-lg text-neutral-600 mb-2">
              There&apos;s a reseller near you
            </p>
            <p className="text-base text-neutral-600 mb-8">
              Buy your devices from your nearest Apple Authorised Reseller.
            </p>
            <a
              href="https://locate.apple.com/za/en/sales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#06c] text-white rounded-xl px-6 py-3 text-sm font-medium hover:bg-[#0077ed] transition-colors"
            >
              Find a reseller
            </a>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
