interface PromptPreviewProps {
  prompt: string;
}

export default function PromptPreview({
  prompt,
}: PromptPreviewProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <details className="group" open>
        <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-semibold">
          Prompt Preview

          <span className="text-sm text-zinc-500 transition group-open:rotate-180">
            ▼
          </span>
        </summary>

        <div className="mt-4">
          {!prompt ? (
            <div className="rounded-xl bg-zinc-950 p-4 text-sm text-zinc-500">
              Prompt bude zobrazen po generování obsahu.
            </div>
          ) : (
            <pre className="overflow-auto rounded-xl bg-zinc-950 p-4 text-sm whitespace-pre-wrap text-zinc-400">
              {prompt}
            </pre>
          )}
        </div>
      </details>
    </div>
  );
}