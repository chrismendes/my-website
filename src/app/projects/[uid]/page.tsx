import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { SkillIcon, TabbedCarousel, withPrismicFieldComponents } from "@/ui";
import { ArrowLeft } from "lucide-react";
import { fetchProjectData, ProjectViewModel } from "@/features/projects";
import type { Content } from '@prismicio/client'
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    uid: string
  }
}

export default async function ProjectPage({ params: { uid } }: PageProps) {

  const data: Content.ProjectDocumentData | null = await fetchProjectData(uid);
  if (!data) {
    return notFound();
  }
  const viewModel = new ProjectViewModel(data);
  const ProjectGallery = withPrismicFieldComponents(TabbedCarousel);
  
  return (
    <div className="flex flex-col">
      <Link href="/projects" className="mb-6 flex gap-x-2">
        <ArrowLeft />Back
      </Link>

      <h1 className="mb-6 text-center">{viewModel.title}</h1>
      {viewModel.employer.employer_logo &&
        <PrismicNextImage field={viewModel.employer.employer_logo} className="mx-auto mt-2" />
      }
      {viewModel.intro &&
        <p className="text-lg mt-20 max-w-4xl mx-auto">{viewModel.intro}</p>
      }

      <ProjectGallery carousels={viewModel.galleries} />

      <div className="flex mt-28 gap-x-12">
        <div className="w-3/5 text-lg">
          <PrismicRichText field={viewModel.description} />
        </div>
        <div className="w-2/5">
          <ul className="grid grid-cols-4 gap-y-8">
            {viewModel.tech.map((tech, index) => (
              <li className="flex flex-col items-center justify-center gap-y-3 min-w-14" key={index}>
                <SkillIcon
                  image={<PrismicNextImage field={tech.icon} />}
                  label={tech.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}