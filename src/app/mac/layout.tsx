import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mac | Apple South Africa",
  description: "Explore the full Mac lineup — MacBook Neo, MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Studio Display. Find the Mac that's right for you.",
};

export default function MacLayout({ children }: { children: React.ReactNode }) {
  return children;
}
