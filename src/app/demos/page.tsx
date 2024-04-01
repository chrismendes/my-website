import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { SkillIcon } from "@/ui";
import { fontRoboto } from "@/ui/fonts";

export default async function DemoPage() {

  const page = await prismic.getByType("demo_page", {
    fetchLinks: ["demo.title", "demo.description", "demo.picture", "demo.tech_stack", "demo.github", "demo.demo"]
  });
  if (!page.results_size) {
    return notFound();
  }
  const content = page.results[0].data;
  
  return (
    <>
      <div className="flex gap-x-12 items-center">
        <div className="w-3/5">
          <h1 className={`mb-6`}>{content.page_title}</h1>

          <div className="flex">
            <ul
              className=""
              role="list"
            >
              {content.demos.map(({ demo }, index) => (
                <li className="flex flex-col items-center justify-center gap-y-3 min-w-14" key={index}>
                  <PrismicNextImage field={demo.data.picture} className="framed" />
                  {demo.data.title}
                  <PrismicRichText field={demo.data.description} />
<button
  type="button"
  className="inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
  Button
</button>
                  {/* <SkillIcon
                    image={<PrismicNextImage field={tech.data.icon} key={index} />}
                    label={tech.data.name}
                  /> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}