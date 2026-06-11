"use client";

import { useState } from "react";

import AssistantForm from "@/components/assistant/AssistantForm";
import GeneratedContent from "@/components/assistant/GeneratedContent";
import PromptPreview from "@/components/assistant/PromptPreview";

export default function AssistantPage() {
  const [generatedContent, setGeneratedContent] = useState("");
  const [promptPreview, setPromptPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const generateContent = async (
    description: string,
    outputType: string
  ) => {
    setLoading(true);
    setGeneratedContent("");
    setPromptPreview("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description,
          outputType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate content");
      }

      const data = await response.json();

      setGeneratedContent(data.result);
      setPromptPreview(data.prompt);
    } catch (error) {
      console.error(error);

      setGeneratedContent(
        "Při generování obsahu došlo k chybě."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 md:px-6">
      <div className="mb-12">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300">
          AI Content Generator
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          AI Marketing Assistant
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Generujte SEO titulky, meta popisky, reklamní texty
          a obsah pro sociální sítě pomocí umělé inteligence.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <AssistantForm
          onGenerate={generateContent}
          loading={loading}
        />

        <div className="space-y-6">
          <GeneratedContent
            content={generatedContent}
          />

          <PromptPreview
            prompt={promptPreview}
          />
        </div>
      </div>
    </section>
  );
}