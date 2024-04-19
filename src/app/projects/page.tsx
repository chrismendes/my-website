import { fetchProjectIndexData, ProjectIndexViewModel, ProjectCard } from "@/features/projects";
import type { Content } from '@prismicio/client'
import { withPrismicFieldComponents } from "@/ui";
import { notFound } from "next/navigation";

export default async function ProjectPage() {

  const pageData: Content.ProjectPageDocumentData = await fetchProjectIndexData();
  if (!pageData) {
    return notFound();
  }
  const viewModel = new ProjectIndexViewModel(pageData);
  const Card = withPrismicFieldComponents(ProjectCard);
  
  return (
    <div className="flex flex-col xl:flex-row gap-x-12">
      <div className="flex xl:w-1/6 pt-10">
        <h1 className="mb-6">{viewModel.pageTitle}</h1>
      </div>
      <div className="flex xl:w-5/6 self-end xl:bg-neutral-50 xl:p-12">
        <ul role="list" className="flex flex-col xl:grid xl:grid-cols-2 gap-x-32 gap-y-12 xl:gap-y-20">
          {viewModel.projects?.map((project, index) => {
            return (
              <li key={index}>
                <Card
                  url={(project.description) ? project.url : null}
                  title={project.title}
                  description={project.intro}
                  picture={project.coverPicture}
                  logo={project.logo}
                  tech={project.tech}
                  techDistinctOnly={project.techDistinctOnly}
                  gallery={project.galleries[0].pictures}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}