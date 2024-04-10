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
      <div className="flex flex-col lg:flex-row w-full gap-x-12 items-center self-center -mt-10">
        <div className="lg:w-3/5 text-center lg:text-left">
          <h1 className="mb-6 text-6xl before:hidden after:hidden">{content.headline}</h1>
          <PrismicRichText field={content.intro} />

          <div className="flex flex-col xl:flex-row items-center lg:items-start xl:items-center gap-6 mt-12">
            <span className="italic text-nowrap hidden lg:inline">Tech Stack</span>
            <ul
              className="flex w-full flex-wrap gap-4 justify-center lg:justify-start before:hidden xl:before:block xl:before:content-['{'] before:text-8xl before:text-slate-200 before:mt-[-10px] after:hidden xl:after:block xl:after:content-['}'] after:text-8xl after:text-slate-200 after:mt-[-10px]"
              role="list"
            >
              {content.key_skills.map(({ tech }, index) => (
                <li className="flex flex-col items-center justify-center gap-y-3 min-w-14" key={index}>
                  <SkillIcon
                    image={<PrismicNextImage field={tech.data.icon} className="h-[30px] lg:h-auto w-auto" />}
                    label={tech.data.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-1 justify-end max-w-80 lg:max-w-none mt-10 lg:mt-0">
          <PrismicNextImage field={content.picture} className="border shadow" width="500" />
        </div>
      </div>
    </>
  );
}