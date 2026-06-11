# Marketing AI Hub

Marketing AI Hub je moderní webová aplikace zaměřená na marketingovou analytiku, SEO obsah a využití umělé inteligence v digitálním marketingu.

Projekt vznikl jako ukázka práce s moderním frontend stackem a demonstruje integraci AI nástrojů do marketingového workflow.

## Live Demo

https://marketing-ai-hub-rho.vercel.app

## Funkce

### 📊 Marketing Dashboard

Přehled klíčových marketingových metrik:

* Návštěvy
* Náklady
* Konverze
* Hodnota konverze
* PNO

Dashboard obsahuje KPI karty, interaktivní grafy vytvořené pomocí Recharts a přehledovou tabulku výsledků marketingových kampaní.

### 📝 SEO Článek

Ukázka SEO optimalizovaného obsahu na téma:

**Jak využít umělou inteligenci v online marketingu v roce 2026**

Součástí jsou:

* správně strukturované nadpisy H1–H3
* interní prolinkování mezi sekcemi aplikace
* SEO metadata
* přehledná obsahová struktura

### 🤖 AI Marketing Assistant

Nástroj využívající OpenAI API pro generování marketingového obsahu.

Podporované výstupy:

* SEO Title
* Meta Description
* Google Ads
* Facebook Post
* Blog Outline

Součástí aplikace je také **Prompt Preview**, který zobrazuje prompt použitý při generování obsahu.

## Technologie

* Next.js 15
* TypeScript
* Tailwind CSS
* Recharts
* OpenAI API
* ESLint
* Vercel

## Struktura projektu

```text
src/
├── app/
│   ├── dashboard/
│   ├── article/
│   ├── ai-assistant/
│   └── layout.tsx
│
├── components/
├── data/
├── lib/
└── types/
```

## Lokální spuštění

Instalace závislostí:

```bash
npm install
```

Spuštění vývojového serveru:

```bash
npm run dev
```

Aplikace bude dostupná na adrese:

```text
http://localhost:3000
```

## Build projektu

Vytvoření produkčního buildu:

```bash
npm run build
```

Spuštění produkční verze:

```bash
npm run start
```

## Nasazení

Projekt je nasazen na platformě Vercel:

https://marketing-ai-hub-rho.vercel.app

## Autor

**Daniil Andrushko**
