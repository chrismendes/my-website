import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Button, SkillIcon } from "@/ui";
import type { Content, KeyTextField, ImageField } from "@prismicio/client";

interface Props {
  title: KeyTextField;
  description: KeyTextField;
  picture?: ImageField;
  logo?: ImageField;
  tech?: Content.TechDocumentData[];
  url?: string;
  index?: number;
}

export const ProjectCard = ({ title, description, picture, logo, tech, url, index }: Props) => (
  <li className="flex flex-col items-start gap-y-3 min-w-14 p-6 bg-neutral-50 xl:p-0 xl:bg-none" key={index}>
    <div className="h-[216px] overflow-hidden shadow-lg mb-4">
      {url &&
        <Link href={url}>
          {picture &&
            <PrismicNextImage field={picture} className="w-full" />
          }
        </Link>
      }
    </div>
    {logo &&
      <div className="h-[40px] flex items-center">
        <PrismicNextImage field={logo} />
      </div>
    }
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    {(tech && tech.length > 0) &&
      <div className="flex flex-row mb-4">
        {tech.map((item, index) => (
          <SkillIcon
            image={<PrismicNextImage field={item.icon} title={item.name} key={index} height={30} />}
            label={item.name}
            showLabel={false}
            key={index}
          />
        ))}
      </div>
    }
    <div className="flex gap-x-4">
      {url &&
        <Button asChild>
          <Link href={url}>Read More</Link>
        </Button>
      }
    </div>
  </li>
);