import { TabbedCarousel, withPrismicFieldComponents } from "@/ui";
import { fetchProjectData, ProjectViewModel, ProjectHeader, ProjectBody } from "@/features/projects";
import type { Content } from '@prismicio/client'
import { notFound } from "next/navigation";
import React from "react";

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
  const Header = withPrismicFieldComponents(ProjectHeader);
  const Gallery = withPrismicFieldComponents(TabbedCarousel);
  const Body = withPrismicFieldComponents(ProjectBody);
  
  return (
    <div className="flex flex-col">
      <Header
        title={viewModel.title}
        logo={viewModel.employer.employer_logo}
        intro={viewModel.intro}
      />
      <Gallery carousels={viewModel.galleries} />
      <Body
        bodyText={viewModel.description}
        tech={viewModel.tech}
      />
    </div>
  );

}