"use server";
import prisma from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { imageSchema, productSchema, validateWithZodSchema } from "./schema";
import { uploadImage } from "./upload";
export const getAuthUser = async () => {
        const user = await currentUser();
        if (!user) redirect("/");
        return user;
};

export const getAdminUser = async () => {
        const user = await getAuthUser();
        if (!user || user.id !== process.env.ADMIN_USER_ID) redirect("/");
        return user;
};

export const renderError = (error: unknown) => {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

                const imageUrl = await uploadImage(validatedFile.image, "products");

                await prisma.product.create({
                        data: {
                                ...validatedFields,
                                image: imageUrl,
                                clerkId: user.id,
                        },
                });
        } catch (error: unknown) {
                return { message: renderError(error) };
        }
        redirect("/admin/products");
};

export const fetchAdminProducts = async () => {
        await getAdminUser();
        const products = prisma.product.findMany({
                orderBy: { createdAt: "desc" },
        });
        return products;
};

export const deleteProductAction = async ({ productId }: { productId: string }) => {
        await getAdminUser();
        try {
                await prisma.product.delete({
                        where: { id: productId },
                });
                revalidatePath("/admin/products");
                return { message: "Product deleted successfully" };
        } catch (error) {
                return renderError(error);
        }
};
