import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from "@/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Monitor, Smartphone } from "lucide-react";

export interface CarouselTab {
  tabLabel: string;
  tabIcon?: string;
  pictures: React.ReactNode[];
}

interface Props {
  carousels: CarouselTab[]
}

const tabIcons = {
  Monitor: Monitor,
  Smartphone: Smartphone,
}

export const TabbedCarousel = ({ carousels }: Props) => (
  <Tabs defaultValue="tab-0" className="mt-20">
    <div className="flex">
      <TabsList className="mx-auto mb-2">
        {carousels?.map((carousel, index) => {
          if (carousel.tabIcon) {
            const Icon = tabIcons[carousel.tabIcon];
            return (
              <TabsTrigger value={`tab-${index}`}>
                {Icon &&
                  <span className="mr-2">
                    <Icon />
                  </span>
                }
                {carousel.tabLabel}
              </TabsTrigger>
            );
          }
        })}
      </TabsList>
    </div>
    {carousels?.map((carousel, index) => (
      <TabsContent value={`tab-${index}`}>
        <Carousel>
          <CarouselContent>
            {carousel.pictures.map((picture, index) => (
              <CarouselItem key={index}>
                <div className="flex justify-center">
                  {React.isValidElement(picture) &&
                    <>{picture}</>
                  } 
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation />
        </Carousel>
      </TabsContent>
    ))}
  </Tabs>
);