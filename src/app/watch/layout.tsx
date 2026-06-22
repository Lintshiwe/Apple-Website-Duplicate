import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Watch | Apple South Africa",
  description: "Explore the Apple Watch lineup — Apple Watch Series 11, Apple Watch SE 3, and Apple Watch Ultra 3. The ultimate way to watch your health.",
};

export default function WatchLayout({ children }: { children: React.ReactNode }) {
  return children;
}
