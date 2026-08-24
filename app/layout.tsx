import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/organisms/Footer";
import HeaderNavigation from "@/components/organisms/HeaderNavigation";

export const metadata: Metadata = {
  title: {
    default:
      "Explore Pangasinan Heritage | Pangasinan Heritage Digital Showcase",
    template: "%s | Pangasinan Heritage Digital Showcase",
  },
  description:
    "Discover Pangasinan's natural wonders, cultural landmarks, historical destinations, and iconic tourism attractions.",
  openGraph: {
    title: "Explore Pangasinan Heritage",
    description:
      "Discover Pangasinan's natural wonders, cultural landmarks, historical destinations, and iconic tourism attractions.",
    type: "website",
    siteName: "Pangasinan Heritage Digital Showcase",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <HeaderNavigation />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
