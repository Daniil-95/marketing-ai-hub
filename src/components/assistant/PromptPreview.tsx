export default function PromptPreview() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Prompt Preview
      </h2>

      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <p className="text-sm text-zinc-500">
          Prompt použitý pro generování bude zobrazen zde.
        </p>
      </div>
    </div>
  );
}