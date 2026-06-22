"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Search } from "lucide-react";

const productCategories = [
  { label: "iPhone", href: "/iphone", imageSrc: "/images/support-nav-iphone.png" },
  { label: "Mac", href: "/mac", imageSrc: "/images/support-nav-mac.png" },
  { label: "iPad", href: "/ipad", imageSrc: "/images/support-nav-ipad.png" },
  { label: "Watch", href: "/watch", imageSrc: "/images/support-nav-watch.png" },
];

const quickLinks = [
  {
    title: "Reset Apple Account password",
    href: "#",
    iconSrc: "/images/support-icon-password.svg",
  },
  {
    title: "Change a subscription",
    href: "#",
    iconSrc: "/images/support-icon-subscription.svg",
  },
  {
    title: "Billing and payments",
    href: "#",
    iconSrc: "/images/support-icon-billing.svg",
  },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-11">
        {/* Hero: Blue logo + heading + search */}
        <section className="bg-neutral-100 py-12 md:py-16 text-center">
          <ScrollReveal>
            <div className="w-24 h-24 mx-auto mb-6">
              <Image
                src="/images/support-hero-logo.png"
                alt="Apple Support"
                width={159}
                height={159}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900">
              Need help? Start here.
            </h1>
          </ScrollReveal>
          <div className="mt-8 px-6">
            <ScrollReveal>
              <div className="max-w-xl mx-auto relative">
                <input
                  type="text"
                  placeholder="Search Support"
                  className="w-full rounded-full px-6 py-3 text-neutral-900 text-base outline-none border border-neutral-300 focus:border-[#06c] transition-colors"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors">
                  <Search size={18} />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Product Category Grid — 4 columns matching original */}
        <section className="bg-white py-10 md:py-14">
          <ScrollReveal>
            <div className="max-w-[980px] mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.label}
                    href={cat.href}
                    className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-neutral-50 transition-colors duration-200"
                  >
                    <div className="w-20 h-24 md:w-24 md:h-28 flex items-center justify-center mb-3">
                      <Image
                        src={cat.imageSrc}
                        alt={cat.label}
                        width={120}
                        height={140}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-base font-semibold text-neutral-900">{cat.label}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Quick Links — Rounded gray tiles with SVG icons */}
        <section className="bg-white pb-10 md:pb-14">
          <div className="max-w-[980px] mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group bg-neutral-100 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-neutral-200 transition-colors duration-200"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <Image
                      src={link.iconSrc}
                      alt={link.title}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-neutral-900 leading-snug">{link.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Search for More Topics */}
        <section className="bg-white py-8">
          <div className="max-w-[980px] mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-neutral-900 mb-8">
              Search for More Topics
            </h2>
          </div>
        </section>

        {/* Apple Support App — Full-width promo banner */}
        <section className="bg-white pb-10 md:pb-14">
          <ScrollReveal>
            <div className="max-w-[980px] mx-auto px-6">
              <Link href="#" className="block rounded-2xl overflow-hidden hover:opacity-95 transition-opacity">
                <Image
                  src="/images/support-app-banner.png"
                  alt="Apple Support App"
                  width={980}
                  height={184}
                  className="w-full h-auto object-cover"
                />
              </Link>
            </div>
          </ScrollReveal>
        </section>

        {/* Beware of Counterfeit Parts */}
        <section className="bg-white py-10 md:py-14">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-6">
              Beware of counterfeit parts
            </h2>
            <div className="text-base text-neutral-700 leading-relaxed space-y-4">
              <p>
                Some counterfeit and third-party power adapters and batteries may not be designed properly and could
                result in safety issues. To ensure you receive a genuine Apple battery during a battery replacement, we
                recommend visiting an{" "}
                <Link
                  href="/where-to-buy"
                  className="text-[#06c] hover:underline"
                >
                  Apple Authorised Service Provider
                </Link>
                . If you need a replacement adapter to charge your Apple device, we recommend getting an Apple power
                adapter.
              </p>
              <p>
                Also non-genuine replacement displays may have compromised visual quality and may fail to work correctly.
                Apple-certified screen repairs are performed by trusted experts who use genuine Apple parts.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Apple Service Programmes */}
        <section className="bg-white py-10 md:py-14">
          <ScrollReveal className="max-w-[980px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-8">
              Apple Service Programmes
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-base text-[#06c] hover:underline">
                  Mac mini Service Programme for No Power Issue
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-[#06c] hover:underline">
                  iPhone 14 Plus Service Programme for Rear Camera Issue
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-[#06c] hover:underline">
                  See all programmes
                </Link>
              </li>
            </ul>
          </ScrollReveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
