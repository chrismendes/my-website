import React from "react";
import Image from "next/image";
import { SkillIcon } from "@/ui";
import type { ComponentProps as SkillIconProps } from "@/ui";

interface Props {
  headline: string;
  intro?: JSX.Element;
  keySkills?: SkillIconProps[];
  picture: JSX.Element;
}

export const HomeHero = ({ headline, intro, keySkills, picture }: Props) => {

  const pictureCn = "shadow";
  const pictureComponent = React.cloneElement(picture, {
    className: pictureCn
  });
  
  return (
    <div className="flex flex-col lg:flex-row w-full gap-x-12 items-center self-center -mt-10">
      <div className="lg:w-3/5 text-center lg:text-left">
        <h1 className="mb-6 text-6xl before:hidden after:hidden">{headline}</h1>
        {intro && React.isValidElement(intro) &&
          <>{intro}</>
        }
        <div className="flex flex-col xl:flex-row items-center lg:items-start xl:items-center gap-6 mt-12">
          <span className="italic text-nowrap hidden lg:inline">Tech Stack</span>
          <ul
            className="flex w-full flex-wrap gap-4 justify-center lg:justify-start before:hidden xl:before:block xl:before:content-['{'] before:text-8xl before:text-slate-200 before:mt-[-10px] after:hidden xl:after:block xl:after:content-['}'] after:text-8xl after:text-slate-200 after:mt-[-10px]"
            role="list"
          >
            {keySkills?.map((tech, index) => (
              <li className="flex flex-col items-center justify-center gap-y-3 min-w-14" key={index}>
                <SkillIcon
                  icon={tech.icon}
                  small={true}
                  label={tech.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-1 justify-end max-w-80 lg:max-w-none mt-10 lg:mt-0">
        {React.isValidElement(pictureComponent) ?
          <>{pictureComponent}</>
        :
          typeof picture === "string" &&
            <Image
              src={picture}
              alt={headline}
              width={500}
              className={pictureCn}
            />
        }
      </div>
    </div>
  );
};