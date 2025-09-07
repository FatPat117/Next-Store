import { z } from "zod";
export const productSchema = z.object({
        name: z.string(),
        company: z.string(),
        price: z.coerce.number().int().min(0),
        description: z.string(),
        featured: z.coerce.boolean(),
});
