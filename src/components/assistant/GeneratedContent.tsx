"use client";

interface GeneratedContentProps {
  content: string;
}

export default function GeneratedContent({
  content,
}: GeneratedContentProps) {
  const handleCopy = async () => {
    if (!content) return;

    await navigator.clipboard.writeText(content);
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Výsledek
        </h2>

        {content && (
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-lg border border-zinc-700 px-3 py-1 text-sm text-zinc-300 transition hover:border-violet-500 hover:text-white"
          >
            Kopírovat
          </button>
        )}
      </div>

      {!content ? (
        <div className="rounded-xl bg-zinc-950 p-4 text-zinc-500">
          Zde se zobrazí vygenerovaný obsah.
        </div>
      ) : (
        <div className="rounded-xl bg-zinc-950 p-4 whitespace-pre-wrap text-zinc-300">
          {content}
        </div>
      )}
    </div>
  );
}