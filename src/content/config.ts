import { defineCollection, z } from "astro:content";

const articles = defineCollection({
    type: "content",
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: image(),
        alt: z.string(),
    }),
});

export const collections = { articles };
