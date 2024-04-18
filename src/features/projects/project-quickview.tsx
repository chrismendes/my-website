"use client";

import React from "react";
import Link from "next/link";
import { Button, SkillIcon, Sheet, SheetContent, SheetTrigger } from "@/ui";
import { TechViewModel } from "@/features/tech";
import { ZoomIn } from "lucide-react";

interface Props {
  title: string;
  description: string;
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
      <SheetContent side="bottom" className="h-1/2 sm:h-2/3 xl:h-3/4 px-8 lg:px-24 py-8 overflow-y-scroll">
        <div className="flex items-center justify-center gap-x-4 mb-16">
          {logo}
          <h2 className="mb-0 text-base lg:text-xl">{title}</h2>
        </div>
        {pictures && pictures.length &&
          <div className="flex flex-col gap-y-24">
            {pictures.map((picture, index) => (
              React.isValidElement(picture) &&
                <div className="flex items-center justify-center bg-neutral-100 p-4" key={index}>
                  {picture}
                </div>
              ))}
          </div>
        }
      </SheetContent>
    </Sheet>
  );
};