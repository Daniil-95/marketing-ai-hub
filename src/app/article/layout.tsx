import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Jak využít umělou inteligenci v online marketingu v roce 2026",
  description:
    "Praktický průvodce využitím umělé inteligence v SEO, PPC kampaních, tvorbě obsahu a marketingové analytice.",
  openGraph: {
    title:
      "Jak využít umělou inteligenci v online marketingu v roce 2026",
    description:
      "Praktický průvodce využitím AI v moderním marketingu.",
  },
};

export default function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}