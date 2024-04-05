import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
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
    <div className="flex flex-row gap-x-12">
      <div className="flex w-1/6 pt-10">
        <h1 className={`mb-6`}>{content.page_title}</h1>
      </div>
      <div className="flex w-5/6 self-end bg-neutral-50 p-12">
        <ul role="list" className="flex flex-col gap-y-12">
          {content.demos?.map(({ demo }, index) => (
            <li className="flex flex-row gap-x-14 items-center" key={index}>
              {demo.data.picture &&
                <div className="w-2/5 h-[240px] overflow-hidden shadow-lg mb-4 flex items-center">
                  <PrismicNextImage field={demo.data.picture} />
                </div>
              }
              <div className="w-3/5 flex flex-col gap-y-4">
                <h2>{demo.data.title}</h2>
                <PrismicRichText field={demo.data.description} />
                {/* {demo.data.tech_stack?.map(({ tech }, index) => (
                  <SkillIcon
                    image={<PrismicNextImage field={tech.icon} key={index} />}
                    label={tech.name}
                    key={index}
                  />
                ))} */}
                <div className="flex gap-x-4">
                  {demo.data.demo &&
                    <Button asChild>
                      <Link href={demo.data.demo.url} target="_blank">
                        <IconPlay />
                        View Demo
                      </Link>
                    </Button>
                  }
                  {demo.data.github &&
                    <Button variant="secondary" asChild>
                      <Link href={demo.data.github.url} target="_blank">
                        <IconGitHub />
                        Source Code
                      </Link>
                    </Button>
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}