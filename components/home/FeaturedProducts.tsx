import EmptyList from "@/components/global/EmptyList";
import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/product/ProductsGrid";
import { fetchFeaturedProducts } from "@/utils/action";
import { Product } from "@prisma/client";
const FeaturedProducts = async () => {
        const products: Product[] = await fetchFeaturedProducts();
        if (products.length == 0) return <EmptyList />;
        return (
                <section className="pt-24">
                        <SectionTitle text="Featured Products" />
                        <ProductsGrid products={products} />
                </section>
        );
};

export default FeaturedProducts;
