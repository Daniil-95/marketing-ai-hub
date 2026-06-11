import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Marketing Assistant | Marketing AI Hub",
  description:
    "Generujte SEO titulky, meta popisky, reklamní texty a obsah pro sociální sítě pomocí umělé inteligence.",
  openGraph: {
    title: "AI Marketing Assistant",
    description:
      "AI nástroj pro generování marketingového obsahu.",
  },
};

export default function AssistantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}