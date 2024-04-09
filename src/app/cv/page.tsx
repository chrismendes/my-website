import { notFound } from "next/navigation";
import { prismic } from "@/prismicio";
import type { Content } from '@prismicio/client'
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { CvSummary, CvJob } from "@/features/cv";

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

  const summaryText = <PrismicRichText field={content.summary} />;
  const skillsPrimary = content.key_skills?.filter(({ tech }) => tech?.data).map(({ tech }, index) => {
    return {
      name: tech.data.name,
      image: <PrismicNextImage field={tech.data.icon} key={index} height={30} />
    }
  });
  const skillsSecondary = <PrismicRichText field={content.secondary_skills} />;

  return (
    <div className="flex flex-col gap-y-16">
      <h1 className={`mb-6`}>{content.page_title}</h1>

      <CvSummary
        summaryText={summaryText}
        skillsPrimary={skillsPrimary}
        skillsSecondary={skillsSecondary}
      />

      <div className="px-12 mt-6">
        <h2>Experience</h2>
        <div className="flex flex-col gap-y-10">
          {content.jobs?.map((item, index) => {
            const job = item.job.data;
            if (job) {
              return (
                <CvJob
                  dateFrom={"May 2023 - Feb 2024"}
                  dateTo={"May 2023 - Feb 2024"}
                  jobTitle={job.job_title}
                  jobDescription={<PrismicRichText field={job.description} />}
                  companyName={job.employer}
                  companyLogo={(job.employer_logo) ? <PrismicNextImage field={job.employer_logo} className="max-h-12 w-auto" /> : null}
                  companyDescription={job.employer_summary}
                  companyIndustry={job.industry}
                  companyWebsite={job.employer_website?.url}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
      
    </div>
  );
}