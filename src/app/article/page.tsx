import ArticleContent from "@/components/article/ArticleContent";

export default function ArticlePage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <header className="mb-12">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300">
          SEO & AI Marketing
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          Jak využít umělou inteligenci v online marketingu v roce 2026
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
          <li>1. Proč firmy stále více využívají AI</li>
          <li>2. Nejčastější využití AI v marketingu</li>
          <li>3. SEO optimalizace</li>
          <li>4. PPC kampaně</li>
          <li>5. Tvorba obsahu</li>
          <li>6. Analýza dat</li>
          <li>7. Jak začít s AI ve firmě</li>
        </ul>
      </section>

      <ArticleContent />
    </article>
  );
}