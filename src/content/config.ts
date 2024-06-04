import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: z.string().default("/src/assets/one.png"),
        alt: z.string().default("add your default alt text here"),
    }),
});

export const collections = { articles };
