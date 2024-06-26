import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation
} from "@/ui/carousel";

interface Props {
  images: JSX.Element[];
}

export const QuickCarousel = ({ images }: Props) => (
  <Carousel>
    <CarouselContent>
      {images.map((img, index) => (
        <CarouselItem className="basis-full" key={index}>
          <div className="flex justify-center">
            {React.isValidElement(img) &&
              <>{img}</>
            } 
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselNavigation />
  </Carousel>
);
