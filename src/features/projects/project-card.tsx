import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, SkillIcon } from "@/ui";
import { TechViewModel } from "@/features/tech";

interface Props {
  title: string;
  description: string;
  picture?: JSX.Element;
  logo?: JSX.Element;
  tech?: TechViewModel[];
  url?: string;
}

export const ProjectCard = ({ title, description, picture, logo, tech, url }: Props) => {

  const pictureCn = "w-full";
  const pictureComponent = (picture) ? React.cloneElement(picture, {
    className: pictureCn
  }) : null;
  const logoCn = "w-auto max-h-full";
  const logoComponent = (logo) ? React.cloneElement(logo, {
    className: logoCn
  }) : null;

  return (
    <div className="flex flex-col items-start gap-y-3 min-w-14 p-6 bg-neutral-50 xl:p-0 xl:bg-none">
      <div className="h-[216px] overflow-hidden shadow-lg mb-4">
        {url &&
          <Link href={url}>
            {pictureComponent && React.isValidElement(pictureComponent) ?
              <>{pictureComponent}</>
            :
              typeof picture === "string" &&
                <Image
                  src={picture}
                  alt={title}
                  width={500}
                  className={pictureCn}
                />
            }
          </Link>
        }
      </div>
      {React.isValidElement(logoComponent) ?
        <>{logoComponent}</>
      :
        typeof logo === "string" &&
          <Image
            src={logo}
            alt={""}
            width={500}
            className={logoCn}
          />
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
        <div className="flex flex-row mb-4">
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
        {url &&
          <Button asChild>
            <Link href={url}>Read More</Link>
          </Button>
        }
      </div>
    </div>
  )
};