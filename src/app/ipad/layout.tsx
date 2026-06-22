import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iPad | Apple South Africa",
  description: "Explore the iPad lineup — iPad Pro, iPad Air, iPad, and iPad mini. Powerful, versatile, and built for everything you do.",
};

export default function IpadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
