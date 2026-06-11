import ArticleContent from "@/components/article/ArticleContent";

export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <header className="mb-12">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300">
          SEO & AI Marketing
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Jak může umělá inteligence pomoci e-shopům v roce 2026
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <span>10. června 2026</span>
          <span>•</span>
          <span>5 min čtení</span>
        </div>
      </header>

      <section className="mb-12 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-white">
          Obsah článku
        </h2>

        <ul className="space-y-2 text-zinc-400">
          <li>
            <a
              href="#proc-ai"
              className="transition hover:text-violet-400"
            >
              1. Proč firmy stále více využívají AI
            </a>
          </li>

          <li>
            <a
              href="#vyuziti-ai"
              className="transition hover:text-violet-400"
            >
              2. Nejčastější využití AI v marketingu
            </a>
          </li>

          <li className="pl-4">
            <a
              href="#seo"
              className="transition hover:text-violet-400"
            >
              3. SEO optimalizace
            </a>
          </li>

          <li className="pl-4">
            <a
              href="#ppc"
              className="transition hover:text-violet-400"
            >
              4. PPC kampaně
            </a>
          </li>

          <li className="pl-4">
            <a
              href="#content"
              className="transition hover:text-violet-400"
            >
              5. Tvorba obsahu
            </a>
          </li>

          <li className="pl-4">
            <a
              href="#analytics"
              className="transition hover:text-violet-400"
            >
              6. Analýza dat
            </a>
          </li>

          <li>
            <a
              href="#jak-zacit"
              className="transition hover:text-violet-400"
            >
              7. Jak začít s AI ve firmě
            </a>
          </li>

          <li>
            <a
              href="#zaver"
              className="transition hover:text-violet-400"
            >
              8. Závěr
            </a>
          </li>
        </ul>
      </section>

      <ArticleContent />
    </article>
  );
}