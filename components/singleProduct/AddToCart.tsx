import { Button } from "../ui/button";

const AddToCart = ({ productId }: { productId: string }) => {
        return (
                <Button key={productId} className="capitalize my-8" size={"lg"}>
                        Add To Cart
                </Button>
        );
};

export default AddToCart;
