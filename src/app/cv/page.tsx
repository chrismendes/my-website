import { notFound } from "next/navigation";
import { fetchCvData, CvViewModel, CvSection, CvSummary, CvJob } from "@/features/cv";
import Link from "next/link";
import { Button } from "@/ui";
import { FileDown } from "lucide-react";
import { withPrismicFieldComponents } from "@/ui";

export default async function CVPage() {

  const data = await fetchCvData();
  if (!data) {
    return notFound();
  }
  const viewModel = new CvViewModel(data);
  const Summary = withPrismicFieldComponents(CvSummary);
  const Job = withPrismicFieldComponents(CvJob);
  
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
        {viewModel.jobs?.map((job, index) => {
          if (job) {
            return (
              <CvJob
                dateFrom={job.date_start}
                dateTo={job.date_end}
                jobTitle={job.job_title}
                jobDescription={job.description}
                companyName={job.employer}
                companyLogo={job.employer_logo}
                companyDescription={job.employer_summary}
                companyIndustry={job.industry}
                companyWebsite={job.employer_website?.url}
                key={index}
              />
            );
          }
        })}
      </CvSection>     
    </div>
  );
}