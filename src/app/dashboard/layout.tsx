import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Dashboard | Marketing AI Hub",
  description:
    "Přehled marketingových KPI, návštěvnosti, nákladů, konverzí a výkonnosti reklamních kampaní.",
  openGraph: {
    title: "Marketing Dashboard | Marketing AI Hub",
    description:
      "Interaktivní marketingový dashboard s KPI metrikami, grafy a analýzou výkonu kampaní.",
  },
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}