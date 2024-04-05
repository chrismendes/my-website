import type { Content } from '@prismicio/client'
import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { Button, SkillIcon } from "@/ui";
import { IconPlay, IconGitHub } from "@/ui/icons";

export default async function CVPage() {

  const page = await prismic.getSingle<Content.CvPageDocument>("cv_page", {
    graphQuery: `
      {
        cv_page {
          ...cv_pageFields
          languages {
            lang {
              ...langFields
            }
          }
          technologies {
            tech {
              ...techFields
            }
          }
          jobs {
            job {
              ...jobFields
            }
          }
        }
      }
    `
  });
  if (!page || !page.data) {
    return notFound();
  }
  const content: Content.CvPageDocumentData = page.data;
  
// console.clear();
// console.log(content.languages[0]?.lang);
  
  return (
    <div className="flex flex-col gap-y-16">
      <h1 className={`mb-6`}>{content.page_title}</h1>

      <div>

        <div className="flex gap-x-24">
          <div className="flex flex-col w-2/5">
            <h2>Summary</h2>
            <PrismicRichText field={content.summary} />
          </div>
          <div className="flex flex-col w-3/5 gap-y-4">
            <div className="flex flex-col">
              <h3>Languages</h3>
              <div className="grid grid-cols-9 items-start gap-x-4 gap-y-8 mb-2 mt-6">
                {content.languages?.filter(({ lang }) => lang?.data).map(({ lang }, index) => (
                  <SkillIcon
                    image={<PrismicNextImage field={lang.data.icon} key={index} height={30} />}
                    label={lang.data.name}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3>Technologies</h3>
              <div className="grid grid-cols-9 items-start gap-x-4 gap-y-8 mb-2 mt-6">
                {content.technologies?.filter(({ tech }) => tech?.data).map(({ tech }, index) => (
                  <SkillIcon
                    image={<PrismicNextImage field={tech.data.icon} key={index} height={30} />}
                    label={tech.data.name}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}