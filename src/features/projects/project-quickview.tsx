"use client";

import React from "react";
import { SkillIcon, Sheet, SheetContent, SheetTrigger } from "@/ui";
import { TechViewModel } from "@/features/tech";
import { CircleChevronDown } from "lucide-react";

interface Props {
  title: string;
  description: JSX.Element | string;
  logo?: JSX.Element | false;
  tech?: TechViewModel[];
  pictures: JSX.Element[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: JSX.Element;
}

export const ProjectQuickView = ({ title, description, logo, tech, pictures, isOpen, setIsOpen, children }: Props) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="bottom" className="h-3/4 sm:h-2/3 xl:h-3/4 px-8 lg:px-24 py-8 overflow-y-scroll">
        <div className="flex flex-col gap-y-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {logo}
            <h2 className="mb-0 text-base lg:text-2xl">{title}</h2>
          </div>
          <div className="flex justify-center gap-x-3 text-neutral-400 text-lg uppercase font-sans select-none">
            <CircleChevronDown />
            Scroll Down
          </div>
          <div className="flex justify-center">
            {React.isValidElement(description) ?
              <>{description}</>
            :
              typeof description === "string" &&
                <p>{description}</p>
            }
          </div>
          {(tech && tech.length > 0) &&
            <div className="flex flex-row justify-center gap-8 flex-wrap">
              {tech.length && tech.map((tech, index) => {
                return (
                <SkillIcon
                  icon={tech.icon}
                  label={tech.name}
                  key={index}
                />
                )
              })}
            </div>
          }
          {pictures && pictures.length &&
            <div className="flex flex-col gap-y-12 xl:gap-y-24">
              {pictures.map((picture, index) => (
                React.isValidElement(picture) &&
                  <div className="flex items-center justify-center bg-neutral-100 p-4" key={index}>
                    {picture}
                  </div>
                ))}
            </div>
          }
        </div>
      </SheetContent>
    </Sheet>
  );
};