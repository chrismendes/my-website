"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, SkillIcon, Sheet, SheetContent, SheetTrigger } from "@/ui";
import { QuickCarousel } from "@/features/projects";
import { TechViewModel } from "@/features/tech";
import { ZoomIn } from "lucide-react";

interface Props {
  title: string;
  description: string;
  picture?: JSX.Element;
  logo?: JSX.Element;
  tech?: TechViewModel[];
  url?: string;
  gallery: JSX.Element[];
}

export const ProjectCard = ({ title, description, picture, logo, tech, url, gallery }: Props) => {

  const logoCn = "w-auto max-h-full";
  const pictureCn = "w-full cursor-pointer";

  const logoWithProps = (logo) ? React.cloneElement(logo, {
    className: logoCn
  }) : null;
  const pictureWithProps = (picture) ? React.cloneElement(picture, {
    className: pictureCn,
    onClick: () => setGalleryOpen(true)
  }) : null;

  const logoComponent = React.isValidElement(logoWithProps) ?
    logoWithProps
  :
    typeof logo === "string" &&
      <Image
        src={logo}
        alt={""}
        width={500}
        className={logoCn}
      />
  const pictureComponent = (pictureWithProps && React.isValidElement(pictureWithProps) ?
    pictureWithProps
  :
    typeof picture === "string" &&
      <Image
        src={picture}
        alt={title}
        width={500}
        className={pictureCn}
      />
  );

  const [galleryOpen, setGalleryOpen] = useState(false);
  
  return (
    <div className="flex flex-col items-start gap-y-3 min-w-14 p-6 bg-neutral-50 xl:p-0 xl:bg-none">
      <div className="h-[216px] overflow-hidden shadow-lg mb-4">
        {url ?
          <Link href={url}>
            {pictureComponent}
          </Link>
        :
          <>{pictureComponent}</>
        }
      </div>
      {logoComponent &&
        <>{logoComponent}</>
      }
      <div>
        {title &&
          <h2>{title}</h2>
        }
        {description &&
          <p>{description}</p>
        }
      </div>
      {(tech && tech.length > 0) &&
        <div className="flex flex-row mb-4 -ml-3">
          {tech.length && tech.map((tech, index) => {
            return (
            <SkillIcon
              icon={tech.icon}
              label={tech.name}
              showLabel={false}
              small
              key={index}
            />
            )
          })}
        </div>
      }
      <div className="flex gap-x-4">
        {url ?
          <Button asChild>
            <Link href={url}>Read More</Link>
          </Button>
        :
        <Sheet open={galleryOpen} onOpenChange={setGalleryOpen}>
          <SheetTrigger asChild>
            <Button variant="secondary">
              <ZoomIn />
              Open Gallery
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-3/4 bg-neutral-100 px-24 py-8">
            <div className="flex flex-col gap-y-12 items-center justify-center">
              <div className="flex items-center justify-center gap-x-4">
                {logoComponent &&
                  React.cloneElement(logoComponent, {
                    className: "h-8 w-auto"
                  })
                }
                <h2 className="m-0 text-xl">{title}</h2>
              </div>
              <QuickCarousel images={gallery} />
            </div>
          </SheetContent>
        </Sheet>
        }
      </div>
    </div>
  )
};