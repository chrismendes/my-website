"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, SkillIcon } from "@/ui";
import { TechViewModel } from "@/features/tech";
import { ProjectQuickView } from "@/features/projects";
import { ZoomIn } from "lucide-react";

interface Props {
  title: string;
  description: string;
  picture?: JSX.Element;
  logo?: JSX.Element;
  tech?: TechViewModel[];
  techDistinctOnly?: TechViewModel[];
  url?: string;
  gallery: JSX.Element[];
}

export const ProjectCard = ({ title, description, picture, logo, tech, techDistinctOnly, url, gallery }: Props) => {
  
  const logoCn = "w-auto max-h-[46px]";
  const pictureCn = "w-full shadow-lg cursor-pointer";
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const logoWithProps = (logo) ? React.cloneElement(logo, {
    className: logoCn
  }) : null;
  const pictureWithProps = (picture) ? React.cloneElement(picture, {
    className: pictureCn,
    onClick: () => setQuickViewOpen(true)
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

  
  return (
    <div className="flex flex-col items-start gap-y-3 min-w-14 p-6 bg-neutral-50 xl:p-0 xl:bg-none">
      <div className="w-full h-auto xl:h-[160px] 2xl:h-[210px] overflow-hidden mb-4">
        {pictureComponent}
      </div>
      {logoComponent &&
        <div className="h-[46px] flex items-center">
          <>{logoComponent}</>
        </div>
      }
      <div>
        {title &&
          <h2>{title}</h2>
        }
        {description &&
          <p>{description}</p>
        }
      </div>
      {(techDistinctOnly && techDistinctOnly.length > 0) &&
        <div className="flex flex-row mb-4 -ml-3">
          {techDistinctOnly.length && techDistinctOnly.map((tech, index) => {
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
      <div className="flex items-center gap-x-4">
        {/* {url &&
          <Button asChild>
            <Link href={url}>Read More</Link>
          </Button>
        } */}
        <ProjectQuickView
          title={title}
          description={description}
          logo={logoComponent}
          tech={tech}
          pictures={gallery}
          isOpen={quickViewOpen}
          setIsOpen={setQuickViewOpen}
        >
          {/* <Button variant="secondary">
            <ZoomIn />
            Quick View
          </Button> */}
          <Button>
            <ZoomIn />
            Open Gallery
          </Button>
        </ProjectQuickView>
      </div>
    </div>
  )
};