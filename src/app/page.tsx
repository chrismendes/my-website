import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { SkillIcon } from "@/ui";
import { fontRoboto } from "@/ui/fonts";

export default async function Home() {

  const page = await prismic.getByType("homepage", {
    fetchLinks: ["tech.name", "tech.icon"]
  });
  if (!page.results_size) {
    return notFound();
  }
  const content = page.results[0].data;
  
  return (
    <>
      <div className="flex gap-x-12 items-center">
        <div className="w-3/5">
          <h1 className={`mb-6 ${fontRoboto.className} text-6xl font-bold`}>{content.headline}</h1>
          {/* <h1 className="mb-6">{content.headline}</h1> */}
          <PrismicRichText field={content.intro} />

          <div className="flex items-center gap-x-6 mt-12">
            <span className="font-bold">Tech Stack</span>
            <ul
              className="flex gap-x-4 lg:before:content-['{'] before:text-8xl before:text-slate-200 before:mt-[-10px] lg:after:content-['}'] after:text-8xl after:text-slate-200 after:mt-[-10px]"
              role="list"
            >
              {content.key_skills.map(({ tech }, index) => (
                <li className="flex flex-col items-center justify-center gap-y-3 min-w-14">
                  <SkillIcon
                    image={<PrismicNextImage field={tech.data.icon} key={index} />}
                    label={tech.data.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <PrismicNextImage field={content.picture} className="border framed" width="400" />
        </div>
      </div>
    </>
  );
}