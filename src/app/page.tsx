import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6 inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          AI Powered Marketing Platform
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Marketing Analytics,
          <br />
          SEO Content &
          <br />
          AI Automation
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-zinc-400">
          Moderní platforma kombinující marketingovou analytiku,
          SEO obsah a generativní umělou inteligenci pro digitální marketing.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/dashboard"
            className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
          >
            Otevřít Dashboard
          </Link>

          <Link
            href="/ai-assistant"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
          >
            Vyzkoušet AI Assistant
          </Link>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <Link
            href="/dashboard"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-violet-500/50 hover:bg-zinc-900"
          >
            <div className="mb-4 text-3xl">📊</div>

            <h2 className="mb-3 text-xl font-semibold">
              Dashboard
            </h2>

            <p className="text-zinc-400">
              KPI metriky, marketingová data a vizualizace pomocí grafů.
            </p>
          </Link>

          <Link
            href="/article"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-violet-500/50 hover:bg-zinc-900"
          >
            <div className="mb-4 text-3xl">📝</div>

            <h2 className="mb-3 text-xl font-semibold">
              SEO Článek
            </h2>

            <p className="text-zinc-400">
              Ukázka strukturovaného SEO obsahu pro marketingový web.
            </p>
          </Link>

          <Link
            href="/ai-assistant"
            className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-violet-500/50 hover:bg-zinc-900"
          >
            <div className="mb-4 text-3xl">🤖</div>

            <h2 className="mb-3 text-xl font-semibold">
              AI Assistant
            </h2>

            <p className="text-zinc-400">
              Generování SEO textů, reklamních sdělení a marketingového obsahu.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}