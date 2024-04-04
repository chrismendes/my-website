import Link from "next/link";
import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { Button, SkillIcon } from "@/ui";

interface PageProps {
  params: {
    uid: string
  }
}

export default async function ProjectPage({ params: { uid } }: PageProps) {

  const content = await prismic.getByUID("project", uid, {
    graphQuery: `
      {
        project {
          ...projectFields
          tech {
            tech {
              ...techFields
            }
          }
        }
      }
    `
  });
  if (!content) {
    return notFound();
  }
  const project = content.data;

console.clear();
console.log(content);
// console.log(content.projects[0]?.project.data.tech[0].tech.data);
  
  return (
    <>
      <div className="flex flex-row gap-x-12 -mt-10">
        <div className="flex w-1/6 pt-10">
          <h1 className={`mb-6`}>{content.data.title}</h1>
        </div>
        {/* <div className="flex w-5/6 self-end bg-neutral-50 p-12">
          <ul role="list" className="grid grid-cols-2 gap-x-32 gap-y-20">
            {content.projects?.map(({ project }, index) => (
              <li className="flex flex-col items-start gap-y-3 min-w-14" key={index}>
                <div className="h-[216px] overflow-hidden shadow-lg mb-4 flex items-center">
                  <Link href="/">
                    {project.data.gallery[0] &&
                      <PrismicNextImage field={project.data.gallery[0].picture} />
                    }
                  </Link>
                </div>
                {(project.data.employer.data.employer_logo || project.data.logo_override) &&
                  <div className="h-[40px] flex items-center">
                    <PrismicNextImage
                      field={project.data.logo_override || project.data.employer.data.employer_logo}
                    />
                  </div>
                }
                <h2>{project.data.title}</h2>
                <p>{project.data.intro}</p>
                {(project.data.tech.length > 0) &&
                  <div className="flex flex-row mb-4">
                    {project.data.tech?.filter(({ tech }) => !tech.data.nondistinct).map(({ tech }, index) => (
                      <SkillIcon
                        image={<PrismicNextImage field={tech.data.icon} title={tech.data.name} key={index} height={30} />}
                        label={tech.data.name}
                        showLabel={false}
                        key={index}
                      />
                    ))}
                  </div>
                }
                <div className="flex gap-x-4">
                  <Button label="Read More" link={"/"} />
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </>
  );
}