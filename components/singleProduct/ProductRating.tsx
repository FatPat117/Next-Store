import { FaStar } from "react-icons/fa";

const ProductRating = ({ productId }: { productId: string }) => {
        const rating = 4;
        const count = 25;

        return (
                <span className="flex gap-1 items-center text-md mt-1 mb-6">
                        <FaStar className="w-3 h-3" />
                        {rating} {`${count} reviews`}
                </span>
        );
};

export default ProductRating;
