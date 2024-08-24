import React from "react";
import { SkillIcon } from "@/ui";
import type { ComponentProps as SkillIconProps } from "@/ui";

interface Props {
  bodyText: JSX.Element;
  tech?: SkillIconProps[];
}

export const ProjectBody = ({ bodyText, tech }: Props) => (
  <div className="flex flex-col md:flex-row mt-28 gap-12">
    {bodyText && React.isValidElement(bodyText) &&
      <div className="md:w-3/5 text-lg">
        {bodyText}
      </div>
    }
    <div className="md:w-2/5">
      <ul className="grid grid-cols-4 gap-y-8 gap-x-8">
        {tech?.map((tech, index) => (
          <li key={index}>
            <SkillIcon
              icon={tech.icon}
              label={tech.name}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);