import React from "react";
import type { Content } from '@prismicio/client'
import { notFound } from "next/navigation";
import { fetchDemoIndexData, DemoIndexViewModel, DemoCard } from "@/features/demos";
import { withPrismicFieldComponents } from "@/ui";

export default async function DemoPage() {

  const data: Content.DemoPageDocumentData = await fetchDemoIndexData();
  if (!data) {
    return notFound();
  }
  const viewModel = new DemoIndexViewModel(data);
  const Card = withPrismicFieldComponents(DemoCard);

  return (
    <div className="flex flex-row gap-x-12 w-full">
      <div className="flex w-1/6 pt-10">
        <h1>{viewModel.pageTitle}</h1>
      </div>
      <div className="flex w-5/6 self-end bg-neutral-50 p-12">
        <ul role="list" className="flex flex-col gap-y-28">
          {viewModel.demos?.map((demo, index) => (
            <React.Fragment key={index}>
              <Card
                title={demo.title}
                description={demo.description}
                picture={demo.picture}
                tech={demo.tech}
                linkDemo={demo.demo?.url}
                linkSoureCode={demo.github?.url}
              />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
}