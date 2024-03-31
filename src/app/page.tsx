import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { SkillIcon } from "@/ui";

export default async function Home() {

  const page = await prismic.getByType("homepage", {
    fetchLinks: ["skill.name", "skill.icon"]
  });
  if (!page.results_size) {
    return notFound();
  }
  const content = page.results[0].data;
  
  return (
    <>
      <div className="flex gap-x-12 items-center">
        <div className="w-3/5">
          <h1 className="text-4xl font-bold mb-6">{content.headline}</h1>
          <PrismicRichText field={content.intro} />

          <div className="flex items-center gap-x-6 mt-12">
            <span className="font-bold">Tech Stack</span>
            <div className="flex gap-x-4 lg:before:content-['{'] before:text-8xl before:text-slate-200 before:mt-[-10px] lg:after:content-['}'] after:text-8xl after:text-slate-200 after:mt-[-10px]">
              {content.key_skills.map(({ skill }, index) => (
                <div className="flex flex-col items-center justify-center gap-y-3 min-w-14">
                  <PrismicNextImage field={skill.data.icon} key={index} />
                  <span className="text-sm font-sans text-slate-500">{skill.data.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <PrismicNextImage field={content.picture} className="border rounded-full" />
        </div>
      </div>
    </>
  );
}