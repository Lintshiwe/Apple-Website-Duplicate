"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  sections: {
    heading: string;
    links: { text: string; href: string }[];
  }[];
}

const navData: NavItem[] = [
  {
    label: "Mac",
    href: "/mac",
    sections: [
      {
        heading: "Explore All Mac",
        links: [
          { text: "MacBook Air", href: "/mac" },
          { text: "MacBook Pro", href: "/mac" },
          { text: "iMac", href: "/mac" },
          { text: "Mac mini", href: "/mac" },
          { text: "Mac Studio", href: "/mac" },
          { text: "Mac Pro", href: "/mac" },
          { text: "Displays", href: "/mac" },
        ],
      },
      {
        heading: "Compare Mac",
        links: [
          { text: "Compare Mac Models", href: "/mac" },
          { text: "Mac vs PC", href: "/mac" },
        ],
      },
    ],
  },
  {
    label: "iPad",
    href: "/ipad",
    sections: [
      {
        heading: "Explore All iPad",
        links: [
          { text: "iPad Pro", href: "/ipad" },
          { text: "iPad Air", href: "/ipad" },
          { text: "iPad", href: "/ipad" },
          { text: "iPad mini", href: "/ipad" },
        ],
      },
      {
        heading: "Accessories",
        links: [
          { text: "Apple Pencil", href: "/ipad" },
          { text: "Keyboards", href: "/ipad" },
          { text: "Compare iPad", href: "/ipad" },
        ],
      },
    ],
  },
  {
    label: "iPhone",
    href: "/iphone",
    sections: [
      {
        heading: "Explore All iPhone",
        links: [
          { text: "iPhone 17 Pro", href: "/iphone" },
          { text: "iPhone 17", href: "/iphone" },
          { text: "iPhone Air", href: "/iphone" },
          { text: "iPhone 16", href: "/iphone" },
        ],
      },
      {
        heading: "Compare & Shop",
        links: [
          { text: "Compare iPhone", href: "/iphone" },
          { text: "AirPods", href: "/iphone" },
        ],
      },
    ],
  },
  {
    label: "Watch",
    href: "/watch",
    sections: [
      {
        heading: "Explore All Apple Watch",
        links: [
          { text: "Apple Watch Ultra", href: "/watch" },
          { text: "Apple Watch Series", href: "/watch" },
          { text: "Apple Watch SE", href: "/watch" },
          { text: "Apple Watch Nike", href: "/watch" },
        ],
      },
      {
        heading: "Shop & Compare",
        links: [
          { text: "Bands", href: "/watch" },
          { text: "Compare Watch", href: "/watch" },
        ],
      },
    ],
  },
  {
    label: "Support",
    href: "/support",
    sections: [
      {
        heading: "Get Help",
        links: [
          { text: "Apple Care", href: "/support" },
          { text: "Documentation", href: "/support" },
          { text: "Community", href: "/support" },
        ],
      },
      {
        heading: "Services",
        links: [
          { text: "Downloads", href: "/support" },
          { text: "Service & Repair", href: "/support" },
        ],
      },
    ],
  },
  {
    label: "Where to Buy",
    href: "/where-to-buy",
    sections: [
      {
        heading: "Find a Store",
        links: [
          { text: "Apple Store", href: "/where-to-buy" },
          { text: "Find a Retailer", href: "/where-to-buy" },
          { text: "Compare Locations", href: "/where-to-buy" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeoutIfExists = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleNavEnter = useCallback((label: string) => {
    clearTimeoutIfExists();
    setActiveDropdown(label);
  }, [clearTimeoutIfExists]);

  const handleNavLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    clearTimeoutIfExists();
  }, [clearTimeoutIfExists]);

  const handleDropdownLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar */}
      <div
        className="backdrop-blur-xl border-b border-black/[0.08]"
        style={{
          backgroundColor: "rgba(250, 250, 252, 0.92)",
          WebkitBackdropFilter: "saturate(180%) blur(20px)",
          backdropFilter: "saturate(180%) blur(20px)",
        } as React.CSSProperties}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between h-12 px-6">
          {/* Apple logo */}
          <Link href="/" className="text-neutral-900 hover:text-neutral-500 transition-colors">
            <svg width="14" height="44" viewBox="0 0 14 44" fill="currentColor">
              <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
            </svg>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navData.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onMouseEnter={() => handleNavEnter(item.label)}
                onMouseLeave={handleNavLeave}
                className={`text-xs transition-colors no-underline ${
                  activeDropdown === item.label
                    ? "text-black"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <Search size={16} strokeWidth={1.5} />
            </button>
            <button className="text-neutral-600 hover:text-neutral-900 transition-colors">
              <ShoppingBag size={16} strokeWidth={1.5} />
            </button>
            <button
              className="md:hidden text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega-menu dropdown — only rendered when active */}
      {activeDropdown && (
        <div
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          className="hidden md:block animate-fade-in-up"
          style={{
            backgroundColor: "rgba(250, 250, 252, 0.92)",
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            backdropFilter: "saturate(180%) blur(20px)",
          } as React.CSSProperties}
        >
          <div className="border-b border-black/[0.08] shadow-sm">
            <div className="max-w-screen-xl mx-auto px-6 py-8">
              <div className="flex gap-16">
                {navData
                  .find((item) => item.label === activeDropdown)
                  ?.sections.map((section) => (
                    <div key={section.heading}>
                      <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                        {section.heading}
                      </h3>
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.text}>
                            <Link
                              href={link.href}
                              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {link.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-4 space-y-3">
          {navData.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
