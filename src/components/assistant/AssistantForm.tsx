export default function AssistantForm() {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Vstupní údaje
      </h2>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Popis firmy
          </label>

          <textarea
            id="company"
            rows={6}
            placeholder="Prodáváme luxusní klavíry a pianina."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="outputType"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Typ výstupu
          </label>

          <select
            id="outputType"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-violet-500"
          >
            <option>SEO Title</option>
            <option>Meta Description</option>
            <option>Google Ads</option>
            <option>Facebook Post</option>
            <option>Blog Outline</option>
          </select>
        </div>

        <button
          type="button"
          className="w-full rounded-xl bg-violet-600 px-5 py-3 font-medium text-white transition hover:bg-violet-500"
        >
          Generovat
        </button>
      </div>
    </div>
  );
}