import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import hero1 from "@/public/images/hero1.webp";
import hero2 from "@/public/images/hero2.webp";
import hero3 from "@/public/images/hero3.webp";
import hero4 from "@/public/images/hero4.webp";
import Image from "next/image";
const carouselImages = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
        return (
                <div className="hidden lg:block">
                        <Carousel>
                                <CarouselContent>
                                        {carouselImages?.map((img, idx) => {
                                                return (
                                                        <CarouselItem key={idx}>
                                                                <Card>
                                                                        <CardContent className="p-2">
                                                                                <Image
                                                                                        src={img}
                                                                                        alt="Hero Image"
                                                                                        className="w-full h-[24rem] rounded-md object-cover"
                                                                                ></Image>
                                                                        </CardContent>
                                                                </Card>
                                                        </CarouselItem>
                                                );
                                        })}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                        </Carousel>
                </div>
        );
};

export default HeroCarousel;
