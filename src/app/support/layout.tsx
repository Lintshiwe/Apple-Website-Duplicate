import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple Support | Apple South Africa",
  description: "Need help? Start here. Get support for your Apple products, find service programmes, and connect with Apple experts.",
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
