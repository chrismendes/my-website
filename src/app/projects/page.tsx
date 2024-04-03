import Link from "next/link";
import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { Button, SkillIcon } from "@/ui";

export default async function ProjectPage() {

  const page = await prismic.getByType("project_page", {
    // fetchLinks: ["project.title", "project.intro", "project.description", "project.gallery", "project.employer", "project.employer.employer_logo"],
    graphQuery: `
      {
        project_page {
          page_title
          projects {
            project {
              ...projectFields
              employer {
                ...employerFields
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

console.clear();
// console.log(content.projects[0]?.project.data);
console.log(content.projects[0]?.project.data.employer.data.employer_logo);
  
  return (
    <>
      <div className="flex flex-row gap-x-12 -mt-10">
        <div className="flex w-1/6 pt-10">
          <h1 className={`mb-6`}>{content.page_title}</h1>
        </div>
        <div className="flex w-5/6 self-end bg-neutral-50 p-12">
          <ul role="list" className="grid grid-cols-2 gap-x-32 gap-y-20">
            {content.projects?.map(({ project }, index) => (
              <li className="flex flex-col items-start gap-y-3 min-w-14" key={index}>
                <div className="h-[216px] overflow-hidden shadow-lg mb-4 flex items-center">
                  <Link href="/">
                    {project.data.gallery[0] &&
                      <PrismicNextImage field={project.data.gallery[0].picture} alt={project.data.gallery[0].picture.alt} />
                    }
                  </Link>
                </div>
                {project.data.employer.data.employer_logo &&
                  <div className="h-[40px] flex items-center">
                    <PrismicNextImage
                      field={project.data.employer.data.employer_logo}
                      alt={project.data.employer.data.employer_logo.alt}
                    />
                  </div>
                }
                <h2>{project.data.title}</h2>
                <p>{project.data.intro}</p>
                {/* {demo.data.tech_stack?.map(({ tech }, index) => (
                  <SkillIcon
                    image={<PrismicNextImage field={tech.icon} alt={tech.icon?.alt} key={index} />}
                    label={tech.name}
                    key={index}
                  />
                ))} */}
                <div className="flex gap-x-4">
                  <Button label="Read More" link={"/"} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}