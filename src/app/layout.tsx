import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple South Africa | Official Apple Site",
  description: "Discover the world of Apple and shop iPhone, iPad, Apple Watch and Mac, plus explore accessories, entertainment and expert device support.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
