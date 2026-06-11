"use client";

import { useState } from "react";

interface AssistantFormProps {
  onGenerate: (
    description: string,
    outputType: string
  ) => Promise<void>;
  loading: boolean;
}

export default function AssistantForm({
  onGenerate,
  loading,
}: AssistantFormProps) {
  const [description, setDescription] = useState("");
  const [outputType, setOutputType] = useState("SEO Title");

  const examples = [
    "Prodáváme luxusní klavíry a pianina.",
    "Provozujeme fitness centrum v Praze.",
    "Poskytujeme účetní služby malým firmám.",
    "Prodáváme elektroniku a příslušenství online.",
  ];

  const handleSubmit = async () => {
    if (!description.trim()) return;

    await onGenerate(description, outputType);
  };

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Generování obsahu
      </h2>

      <div className="space-y-5">
        <div>
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium"
          >
            Popis firmy
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={6}
            placeholder="Prodáváme luxusní klavíry a pianina."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="outputType"
            className="mb-2 block text-sm font-medium"
          >
            Typ výstupu
          </label>

          <select
            id="outputType"
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none transition focus:border-violet-500"
          >
            <option>SEO Title</option>
            <option>Meta Description</option>
            <option>Google Ads</option>
            <option>Facebook Post</option>
            <option>Blog Outline</option>
          </select>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium">
            Ukázkové vstupy
          </p>

          <div className="flex flex-wrap gap-2">
            {examples.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => setDescription(example)}
                className="rounded-lg border border-zinc-700 px-3 py-2 text-xs text-zinc-300 transition hover:border-violet-500 hover:text-white"
              >
                {example}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full rounded-xl bg-violet-600 px-4 py-3 font-medium text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Generuji..." : "Generovat"}
        </button>
      </div>
    </div>
  );
}