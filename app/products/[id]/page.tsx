import FavoriteToggleButton from "@/components/product/FavoriteToggleButton";
import AddToCart from "@/components/singleProduct/AddToCart";
import BreadCrumbs from "@/components/singleProduct/Breadcrumbs";
import ProductRating from "@/components/singleProduct/ProductRating";
import { fetchSingleProduct } from "@/utils/action";
import { formatCurrency } from "@/utils/formatCurrency";
import { Product } from "@prisma/client";
import Image from "next/image";
const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
        const product: Product | null = await fetchSingleProduct(params.id);
        const { name, image, company, description, price } = product;
        const dollarAmount = formatCurrency(price);
        return (
                <section>
                        <BreadCrumbs name={name} />
                        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
                                {/* Image first col */}
                                <div className="relative h-full">
                                        <Image
                                                src={image}
                                                alt="Product Details Iamge"
                                                fill
                                                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                                                priority
                                                className="object-cover w-full rounded"
                                        ></Image>
                                </div>

                                {/* Product Info Col */}
                                <div>
                                        <div className="flex gap-x-8 items-center mb-2">
                                                <h1 className="capitalize text-4xl font-bold">{name}</h1>
                                                <FavoriteToggleButton productId={params.id} />
                                        </div>
                                        <ProductRating productId={params.id} />
                                        <h4 className="text-2xl mt-2 font-bold">{company}</h4>
                                        <p className="mt-3 text-lg bg-muted inline-block p-2 rounded-md">
                                                {dollarAmount}
                                        </p>
                                        <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
                                        <AddToCart productId={params.id} />
                                </div>
                        </div>
                </section>
        );
};

export default ProductDetailsPage;
