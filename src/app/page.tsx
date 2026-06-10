import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-5xl font-bold">
        Marketing AI Hub
      </h1>

      <p className="mb-10 text-lg text-gray-600">
        Moderní webová aplikace zaměřená na marketingovou analytiku,
        SEO obsah a využití umělé inteligence v digitálním marketingu.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/dashboard"
          className="rounded-xl border p-6 hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">
            Dashboard
          </h2>

          <p>
            Marketingová analytika a KPI metriky.
          </p>
        </Link>

        <Link
          href="/article"
          className="rounded-xl border p-6 hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">
            SEO Článek
          </h2>

          <p>
            Ukázka SEO optimalizovaného obsahu.
          </p>
        </Link>

        <Link
          href="/ai-assistant"
          className="rounded-xl border p-6 hover:shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">
            AI Assistant
          </h2>

          <p>
            Generování marketingového obsahu pomocí AI.
          </p>
        </Link>
      </div>
    </section>
  );
}