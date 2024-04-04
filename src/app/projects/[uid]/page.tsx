import Link from "next/link";
import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { Button, SkillIcon } from "@/ui";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";


interface PageProps {
  params: {
    uid: string
  }
}

export default async function ProjectPage({ params: { uid } }: PageProps) {

  const content = await prismic.getByUID("project", uid, {
    graphQuery: `
      {
        project {
          ...projectFields
          tech {
            tech {
              ...techFields
            }
          }
        }
      }
    `
  });
  if (!content) {
    return notFound();
  }
  const project = content.data;

console.clear();
console.log(content);
// console.log(content.projects[0]?.project.data.tech[0].tech.data);
  
  return (
    <>
      <div className="flex flex-row gap-x-12 -mt-10">
        <div className="flex w-1/6 pt-10">
          <h1 className={`mb-6`}>{content.data.title}</h1>
        </div>
        <div className="flex w-5/6 self-end bg-neutral-50 p-12">
          <Carousel>
            <CarouselContent>
              {project.gallery.map(({ picture }, index) => (
                <CarouselItem key={index}>
                  <PrismicNextImage field={picture.large} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}