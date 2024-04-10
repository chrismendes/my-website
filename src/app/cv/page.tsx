import { notFound } from "next/navigation";
import { fetchCvData, CvViewModel, CvSummary, CvJob } from "@/features/cv";

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

      <div className="px-12 mt-6">
        <h2>Experience</h2>
        <div className="flex flex-col gap-y-10">
          {viewModel.jobs?.map((job, index) => {
            if (job) {
              return (
                <CvJob
                  dateFrom={"May 2023 - Feb 2024"}
                  dateTo={"May 2023 - Feb 2024"}
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
        </div>
      </div>
      
    </div>
  );
}