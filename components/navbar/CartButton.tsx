import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { Button } from "../ui/button";

const CartButton = async () => {
        const numItemsInCart = 9;

        return (
                <Button
                        asChild
                        variant={"outline"}
                        size={"icon"}
                        className="flex justify-center items-center relative border-2 border-slate-300 dark:border-slate-700 shadow-sm"
                >
                        <Link href={"/cart"}>
                                <LuShoppingCart />
                                <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                                        {numItemsInCart}
                                </span>
                        </Link>
                </Button>
        );
};

export default CartButton;
