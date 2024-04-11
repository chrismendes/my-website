import { fetchProjectIndexData, ProjectIndexViewModel, ProjectCard } from "@/features/projects";
import type { Content, ImageField } from '@prismicio/client'
import { notFound } from "next/navigation";

export default async function ProjectPage() {

  const data: Content.ProjectPageDocumentData = await fetchProjectIndexData();
  if (!data) {
    return notFound();
  }
  const viewModel = new ProjectIndexViewModel(data);
  
  return (
    <div className="flex flex-col xl:flex-row gap-x-12">
      <div className="flex xl:w-1/6 pt-10">
        <h1 className={`mb-6`}>{viewModel.pageTitle}</h1>
      </div>
      <div className="flex xl:w-5/6 self-end xl:bg-neutral-50 xl:p-12">
        <ul role="list" className="flex flex-col xl:grid xl:grid-cols-2 gap-x-32 gap-y-12 xl:gap-y-20">
          {viewModel.projects?.map((project, index) => (
            <ProjectCard
              title={project.title}
              description={project.intro}
              picture={project.gallery[0]?.picture as ImageField}
              logo={project.logo_override || project.employer.data.employer_logo}
              tech={project.tech as Content.TechDocumentData[]}
              url={"/projects/" + project.uid}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}