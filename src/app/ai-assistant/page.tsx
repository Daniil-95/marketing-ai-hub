import AssistantForm from "@/components/assistant/AssistantForm";
import GeneratedContent from "@/components/assistant/GeneratedContent";
import PromptPreview from "@/components/assistant/PromptPreview";

export default function AssistantPage() {
  return (
    <section className="mx-auto max-w-5xl py-12">
      <div className="mb-12">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300">
          AI Content Generator
        </span>

        <h1 className="mt-5 text-5xl font-bold tracking-tight">
          AI Marketing Assistant
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Generujte SEO titulky, meta popisky, reklamní texty
          a obsah pro sociální sítě pomocí umělé inteligence.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <AssistantForm />

        <div className="space-y-6">
          <GeneratedContent />
          <PromptPreview />
        </div>
      </div>
    </section>
  );
}