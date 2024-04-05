import Link from "next/link";
import { prismic } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { SkillIcon } from "@/ui";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs";
import { Monitor, Smartphone, ArrowLeft } from "lucide-react";

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
          employer {
            ...employerFields
          }
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
  const employer = content.data.employer.data;

console.clear();
console.log(project);
// console.log(content.projects[0]?.project.data.tech[0].tech.data);
  
  return (
    <div className="flex flex-col">
      <Link href="/projects" className="mb-6 flex gap-x-2">
        <ArrowLeft />Back
      </Link>

      <h1 className="mb-6 text-center">{project.title}</h1>
      {employer.employer_logo &&
        <PrismicNextImage field={employer.employer_logo} className="mx-auto mt-2" />
      }
      {project.intro &&
        <p className="text-lg mt-20 max-w-4xl mx-auto">{project.intro}</p>
      }

      <Tabs defaultValue="desktop" className="mt-20">
        <div className="flex">
          <TabsList className="mx-auto mb-2">
            <TabsTrigger value="desktop">
              <Monitor size={20} className="mr-2" />
              Desktop View
            </TabsTrigger>
            <TabsTrigger value="mobile">
              <Smartphone size={20} className="mr-2" />
              Mobile View
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="desktop">
          <Carousel>
            <CarouselContent>
              {project.gallery.map(({ picture }, index) => (
                <CarouselItem key={index}>
                  <PrismicNextImage field={picture.large} className="w-auto m-auto" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
        <TabsContent value="mobile">
          <Carousel>
            <CarouselContent>
              {project.gallery_mobile.map(({ picture }, index) => (
                <CarouselItem key={index}>
                  <PrismicNextImage field={picture} className="w-auto m-auto" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </TabsContent>
      </Tabs>

      <div className="flex mt-28 gap-x-12">
        <div className="w-3/5 text-lg">
          <PrismicRichText field={project.description} />
        </div>
        <div className="w-2/5">
          <ul className="grid grid-cols-4 gap-y-8">
            {project.tech.map(({ tech }, index) => (
              <li className="flex flex-col items-center justify-center gap-y-3 min-w-14" key={index}>
                <SkillIcon
                  image={<PrismicNextImage field={tech.data.icon} />}
                  label={tech.data.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}