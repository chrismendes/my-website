import React from "react";
import { SkillIcon } from "@/ui";
import type { ComponentProps as SkillIconProps } from "@/ui";

interface Props {
  bodyText: JSX.Element;
  tech?: SkillIconProps[];
}

export const ProjectBody = ({ bodyText, tech }: Props) => (
  <div className="flex mt-28 gap-x-12">
    {bodyText && React.isValidElement(bodyText) &&
      <div className="w-3/5 text-lg">
        {bodyText}
      </div>
    }
    <div className="w-2/5">
      <ul className="grid grid-cols-4 gap-y-8">
        {tech?.map((tech, index) => (
          <li className="flex flex-col items-center justify-center gap-y-3 min-w-14" key={index}>
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