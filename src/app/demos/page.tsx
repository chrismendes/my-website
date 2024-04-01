import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { Button, SkillIcon } from "@/ui";
import { IconPlay, IconGitHub } from "@/ui/icons";

export default async function DemoPage() {

  const page = await prismic.getByType("demo_page", {
    // fetchLinks: ["demo.title", "demo.description", "demo.picture", "demo.github", "demo.tech_stack"],
    graphQuery: `
      {
        demo_page {
          page_title
          demos {
            demo {
              ...demoFields
              tech_stack {
                tech {
                  ...techFields
                }
              }
            }
          }
        }
      }
    `
  });
  if (!page.results_size) {
    return notFound();
  }
  const content = page.results[0].data;
// content.demos.push({...content.demos[0]});
// content.demos.push({...content.demos[0]});

// console.clear();
// console.log(content.demos);
// console.log(content.demos[0]?.demo.data);
// console.log(content.demos[0]?.demo.data?.tech_stack);
  
  return (
    <>
      <div className="flex flex-row gap-x-12 -mt-10">
        <div className="flex w-1/6 pt-10">
          <h1 className={`mb-6`}>{content.page_title}</h1>
        </div>
        <div className="flex w-5/6 self-end bg-neutral-50 p-12">
          <ul role="list" className="grid grid-cols-2 gap-32">
            {content.demos?.map(({ demo }, index) => (
              <li className="flex flex-col items-start gap-y-3 min-w-14" key={index}>
                {demo.data.picture &&
                  <div className="h-[280px] overflow-hidden shadow-lg mb-4">
                    <PrismicNextImage field={demo.data.picture} alt={demo.data.picture.alt} />
                  </div>
                }
                <h2>{demo.data.title}</h2>
                <PrismicRichText field={demo.data.description} />
                {/* {demo.data.tech_stack?.map(({ tech }, index) => (
                  <SkillIcon
                    image={<PrismicNextImage field={tech.icon} alt={tech.icon?.alt} key={index} />}
                    label={tech.name}
                    key={index}
                  />
                ))} */}
                <div className="flex gap-x-4">
                  <Button label="View Demo" link={"/"} icon={<IconPlay />} />
                  <Button label="Source Code" link={"/"} style="secondary" icon={<IconGitHub />} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}