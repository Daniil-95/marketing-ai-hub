import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Marketing AI Hub",
    template: "%s",
  },
  description:
    "Marketing analytics dashboard, SEO content platform and AI-powered marketing assistant built with Next.js 15.",
  keywords: [
    "AI Marketing",
    "Marketing Dashboard",
    "SEO",
    "OpenAI",
    "Next.js",
    "Digital Marketing",
  ],
  openGraph: {
    title: "Marketing AI Hub",
    description:
      "Marketing analytics dashboard, SEO content platform and AI-powered marketing assistant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}