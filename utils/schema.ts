import { z, ZodSchema } from "zod";
export const productSchema = z.object({
        name: z.string().max(100, {
                message: "name must be less than 100 characters.",
        }),
        company: z.string(),
        featured: z.coerce.boolean(),
        price: z.coerce.number().int().min(0, {
                message: "price must be a positive number.",
        }),
        description: z.string().refine(
                (description) => {
                        const wordCount = description.split(" ").length;
                        return wordCount >= 10 && wordCount <= 1000;
                },
                {
                        message: "description must be between 10 and 1000 words.",
                }
        ),
});

export const imageSchema = z.object({
        image: validateImageFile(),
});

function validateImageFile() {
        const maxUploadSize = 1024 * 1024;
        const acceptedFileTypes = ["image/"];
        return z
                .instanceof(File)
                .refine((file) => !file || file.size <= maxUploadSize, {
                        message: "Image must be less than 1MB",
                })
                .refine((file) => !file || acceptedFileTypes.some((type) => file.type.startsWith(type)), {
                        message: "Image must be a valid image file",
                });
}

export function validateWithZodSchema<T>(schema: ZodSchema<T>, data: unknown): T {
        const result = schema.safeParse(data);
        if (!result.success) {
                const errors = result.error.issues.map((error) => error.message);
                throw new Error(errors.join(", "));
        }
        return result.data;
}
