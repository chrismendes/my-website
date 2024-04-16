import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";

interface Props {
  images: JSX.Element[];
}

export const QuickCarousel = ({ images }: Props) => (
  <Carousel>
    <CarouselContent>
      {images.map((img, index) => (
        <CarouselItem className="basis-1/2" key={index}>
          <div className="flex justify-center">
            {React.isValidElement(img) &&
              <>{img}</>
            } 
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="-ml-8" />
    <CarouselNext className="-mr-8" />
  </Carousel>
);
