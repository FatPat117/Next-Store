import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
        return (
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div>
                                <h1 className="max-w-2xl font-bold text-4xl tracking-normal sm:text-6xl">
                                        We are changing the way people shop
                                </h1>
                                <p className="mt-8 max-w-xl leading-8 text-lg text-muted-foreground">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam tenetur
                                        doloremque eveniet ipsa, adipisci ullam esse quae soluta facere quidem.
                                </p>
                                <Button asChild size={"lg"} className="mt-10">
                                        <Link href={"/products"}>Shop Now</Link>
                                </Button>
                        </div>
                        <HeroCarousel />
                </section>
        );
};

export default Hero;
