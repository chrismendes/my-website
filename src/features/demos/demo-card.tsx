import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, SkillIcon } from "@/ui";
import { TechViewModel } from "@/features/tech";
import { IconPlay, IconGitHub } from "@/ui/icons";

interface Props {
  title: string;
  description: JSX.Element;
  picture?: JSX.Element;
  tech: TechViewModel[];
  linkDemo: JSX.Element | string;
  linkSoureCode: JSX.Element | string;
}

export const DemoCard = ({ title, description, picture, tech, linkDemo, linkSoureCode }: Props) => (
  <div className="flex flex-row gap-x-14 items-center">
    {picture &&
      <div className="w-1/2 h-[300px] overflow-hidden shadow-lg flex items-center">
        {React.isValidElement(picture) &&
          <>{picture}</>
        }
        {typeof picture === "string" &&
          <Image
            src={picture}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        }
      </div>
    }
    <div className="w-1/2 flex flex-col gap-y-4">
      <div>
        <h2>{title}</h2>
        {React.isValidElement(description) &&
          <>{description}</>
        }
      </div>
      <div className="flex gap-x-4 mb-2">
        {tech.map(( tech: TechViewModel, index: number) => {
          return <SkillIcon
            icon={tech.icon}
            label={tech.name}
            key={index}
            small
          />
        })}
      </div>
      <div className="flex gap-x-4">
        {linkDemo &&
          <Button asChild>
            {React.isValidElement(linkDemo) ?
              <>{linkDemo}</>
            :
              typeof linkDemo === "string" &&
                <Link href={linkDemo} target="_blank">
                  <IconPlay />
                  View Demo
                </Link>
            }
          </Button>
        }
        {linkSoureCode &&
          <Button variant="secondary" asChild>
            {React.isValidElement(linkSoureCode) ?
              <>{linkSoureCode}</>
            :
              typeof linkSoureCode === "string" &&
                <Link href={linkSoureCode} target="_blank">
                  <IconGitHub />
                  Source Code
                </Link>
            }
          </Button>
        }
      </div>
    </div>
  </div>
);