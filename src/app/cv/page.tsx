import { notFound } from "next/navigation";
import { fetchCvData, CvViewModel, CvSection, CvSummary, CvJob } from "@/features/cv";

export default async function CVPage() {

  const data = await fetchCvData();
  if (!data) {
    return notFound();
  }
  const viewModel = new CvViewModel(data);
  
  return (
    <div className="flex flex-col gap-y-16">
      <h1 className={`mb-6`}>{viewModel.pageTitle}</h1>
      <CvSummary
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