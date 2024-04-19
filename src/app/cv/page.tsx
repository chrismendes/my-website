import React from "react";
import { notFound } from "next/navigation";
import { fetchCvData, CvViewModel, CvSection, CvSummary, CvJob, CvEducation } from "@/features/cv";
import Link from "next/link";
import { Button } from "@/ui";
import { FileDown } from "lucide-react";
import { withPrismicFieldComponents } from "@/ui";
import { JobViewModel, EducationViewModel } from "@/features/cv";

export default async function CVPage() {

  const data = await fetchCvData();
  if (!data) {
    return notFound();
  }
  const viewModel = new CvViewModel(data);
  const Summary = withPrismicFieldComponents(CvSummary);
  const Job = withPrismicFieldComponents(CvJob);
  const Education = withPrismicFieldComponents(CvEducation);
  
  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-16">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-6">
        <h1 className="text-center sm:text-left">{viewModel.pageTitle}</h1>
        {viewModel.pdf.url &&
          <Button asChild>
            <Link href={viewModel.pdf.url} target="_blank">
              <FileDown />
              Download CV (PDF)
            </Link>
          </Button>
        }
      </div>
      <Summary
        summaryText={viewModel.summaryText}
        skillsPrimary={viewModel.skillsPrimary}
        skillsSecondary={viewModel.skillsSecondary}
      />
      <CvSection heading="Experience">
        {viewModel.jobs?.map((job: JobViewModel, index: number) => {
          if (job) {
            return (
              <Job
                dateFrom={job.dateStart}
                dateTo={job.dateEnd}
                jobTitle={job.position}
                jobDescription={job.description}
                companyName={job.employer}
                companyLogo={job.employerLogo}
                companyDescription={job.employerSummary}
                companyIndustry={job.industry}
                companyWebsite={job.employerWebsiteURL}
                key={index}
              />
            );
          }
        })}
      </CvSection>
      <CvSection heading="Education">
        {viewModel.education?.map((edu: EducationViewModel, index: number) => {
          if (edu) {
            return (
              <React.Fragment key={index}>
                <Education
                  degree={edu.degree as string}
                  institutionName={edu.institution as string}
                  institutionLogo={edu.institutionLogo}
                  dateFrom={edu.dateStart}
                  dateTo={edu.dateEnd}
                  description={edu.description}
                />
              </React.Fragment>
            );
          }
        })}
      </CvSection>
    </div>
  );
}