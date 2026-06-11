export type KpiItem = {
  title: string;
  value: string;
  change: string;
};

export type ChartDataItem = {
  month: string;
  visits: number;
  costs: number;
  revenue: number;
  conversions: number;
  pno: number;
};

export const kpiData: KpiItem[] = [
  {
    title: "Návštěvy",
    value: "128 540",
    change: "+12 %",
  },
  {
    title: "Náklady",
    value: "58 200 Kč",
    change: "+4 %",
  },
  {
    title: "Konverze",
    value: "842",
    change: "+18 %",
  },
  {
    title: "Hodnota konverze",
    value: "412 000 Kč",
    change: "+22 %",
  },
  {
    title: "PNO",
    value: "14,1 %",
    change: "-3 %",
  },
];

export const chartData: ChartDataItem[] = [
  {
    month: "Leden",
    visits: 15000,
    costs: 8000,
    revenue: 45000,
    conversions: 80,
    pno: 18,
  },
  {
    month: "Únor",
    visits: 17000,
    costs: 9000,
    revenue: 52000,
    conversions: 92,
    pno: 17,
  },
  {
    month: "Březen",
    visits: 21000,
    costs: 10000,
    revenue: 67000,
    conversions: 110,
    pno: 15,
  },
  {
    month: "Duben",
    visits: 23000,
    costs: 10500,
    revenue: 75000,
    conversions: 125,
    pno: 14,
  },
  {
    month: "Květen",
    visits: 26000,
    costs: 11000,
    revenue: 86000,
    conversions: 145,
    pno: 13,
  },
  {
    month: "Červen",
    visits: 28540,
    costs: 9700,
    revenue: 87000,
    conversions: 190,
    pno: 12,
  },
];