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
          key_skills {
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

      <div className="bg-gray-100 p-12">
        <h2>Summary</h2>
        <div className="flex gap-x-24">
          <div className="flex flex-col w-1/2">
            <PrismicRichText field={content.summary} />
          </div>
          <div className="flex flex-col w-1/2 gap-y-4">
            <div className="flex flex-col">
              <h3>Key Skills</h3>
              <div className="flex flex-row gap-y-8 mb-2 mt-6">
                {content.key_skills?.filter(({ tech }) => tech?.data).map(({ tech }, index) => (
                  <SkillIcon
                    image={<PrismicNextImage field={tech.data.icon} key={index} height={30} />}
                    label={tech.data.name}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-sm">
                Also:&nbsp; Restful APIs, Headless CMS, WordPress, Jest, Cypress, Storybook, Webpack, Git</p>
            </div>
          </div>
        </div>

      </div>

      <div className="px-12 mt-6">
        <h2>Experience</h2>
        <div className="flex flex-col gap-y-10">
          {content.jobs?.filter(({ job }) => job?.data).map(({ job }, index) => (
            <div className={`flex flex-col gap-y-2 ${(index % 2 !== 0) ? "" : ""}`} key={index}>
              <div className="flex flex-row text-lg bg-gray-100 p-4">
                <span className="w-1/5 text-accent font-bold">May 2023 - Feb 2024</span>
                <span className="w-4/5">
                  {/* <PrismicNextImage field={job.data?.employer_logo} className="max-h-16 w-auto" /> */}
                  <span className="font-bold uppercase">{job.data?.employer}</span>
                  <span className="ml-3">{job.data?.job_title}</span>
                </span>
                <span className="hidden w-3/5">{job.data?.job_title}</span>
              </div>
              <div className="p-4">
                <PrismicRichText field={job.data?.description} />
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}