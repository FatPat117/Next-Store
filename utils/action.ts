import prisma from "@/utils/db";
import { redirect } from "next/navigation";

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
