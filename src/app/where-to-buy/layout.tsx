import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where to Buy | Apple South Africa",
  description: "Find an Apple Store, Authorised Reseller, or Service Provider near you. Buy Apple products online or in store.",
};

export default function WhereToBuyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
