import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

const promptTemplates: Record<string, string> = {
  "SEO Title": `
Create an SEO title.
Requirements:
- Czech language
- Maximum 60 characters
- Include relevant keywords
- Return only the title
`,

  "Meta Description": `
Create a meta description.
Requirements:
- Czech language
- Maximum 160 characters
- Persuasive marketing style
- Return only the description
`,

  "Google Ads": `
Create Google Ads copy.
Requirements:
- Czech language
- 3 headlines
- 2 descriptions
- High CTR focus
`,

  "Facebook Post": `
Create a Facebook post.
Requirements:
- Czech language
- Friendly tone
- Include call to action
`,

  "Blog Outline": `
Create a blog article outline.
Requirements:
- Czech language
- Include H1
- Include 4-6 H2 sections
- SEO oriented
`,
};

export async function POST(request: Request) {
  try {
    const { description, outputType } =
      await request.json();

    const template =
      promptTemplates[outputType] ??
      promptTemplates["Facebook Post"];

    const prompt = `
You are a senior digital marketing specialist.

${template}

Business description:
${description}
`;

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.8,
      });

    const result =
      completion.choices[0].message.content ?? "";

    return NextResponse.json({
      result,
      prompt,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Generation failed",
      },
      {
        status: 500,
      }
    );
  }
}