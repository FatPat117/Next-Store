"use server";
import prisma from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schema";

const getAuthUser = async () => {
        const user = await currentUser();
        if (!user) redirect("/");
        return user;
};

const renderError = (error: unknown) => {
        return error instanceof Error ? error.message : "There was an error....";
};

export const fetchFeaturedProducts = async () => {
        const products = await prisma.product.findMany({
                where: {
                        featured: true,
                },
        });
        return products;
};

export const fetchAllProducts = async ({ search = "" }: { search?: string }) => {
        const products = await prisma.product.findMany({
                where: {
                        OR: [
                                { name: { contains: search, mode: "insensitive" } },
                                { description: { contains: search, mode: "insensitive" } },
                        ],
                },
                orderBy: {
                        createdAt: "desc",
                },
        });
        return products;
};

export const fetchSingleProduct = async (productId: string) => {
        const product = await prisma.product.findUnique({
                where: {
                        id: productId,
                },
        });

        if (!product) redirect("/products");
        return product;
};

export const createProductAction = async (preState: any, formData: FormData): Promise<{ message: string }> => {
        const user = await getAuthUser();

        try {
                // const name = formData.get("name") as string;
                // const company = formData.get("company") as string;
                // const price = formData.get("price") as unknown as number;
                // const image = formData.get("image") as string;
                // const description = formData.get("description") as string;
                // const featured = Boolean(formData.get("featured"));
                // const validatedFields = productSchema.safeParse(rawData);
                // // console.log(validatedFields.error.issues);

                // if (!validatedFields.success) {
                //         const errors = validatedFields.error.issues.map((error) => error.message);
                //         throw new Error(errors.join(" "));
                // }

                const rawData = Object.fromEntries(formData.entries());
                const file = formData.get("image") as File;
                const validatedFile = validateWithZodSchema(imageSchema, { image: file });
                const validatedFields = validateWithZodSchema(productSchema, rawData);
                await prisma.product.create({
                        data: {
                                ...validatedFields,
                                image: "/images/hero1.webp",
                                clerkId: user.id,
                        },
                });

                return { message: "product created" };
        } catch (error: unknown) {
                return { message: renderError(error) };
        }
};
