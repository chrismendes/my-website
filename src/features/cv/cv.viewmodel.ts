import type { Content, KeyTextField, RichTextField } from "@prismicio/client";

export class CvViewModel {

  _pageTitle: KeyTextField;
  _summaryText: RichTextField;
  _skillsPrimary: Content.CvPageDocumentDataKeySkillsItem[];
  _skillsSecondary: RichTextField;
  _jobs: Content.CvPageDocumentDataJobsItem[];
  
  constructor(rawData: Content.CvPageDocumentData) {
    this._pageTitle = rawData.page_title;
    this._summaryText = rawData.summary;
    this._skillsPrimary = rawData.key_skills;
    this._skillsSecondary = rawData.secondary_skills;
    this._jobs = rawData.jobs;
  }

  get pageTitle () {
    return this._pageTitle;
  }
  get summaryText () {
    return this._summaryText;
  }
  get skillsPrimary (): Content.TechDocumentData[] {
    return this._skillsPrimary
      .filter(item => item.tech.data)
      .map(({ tech }) => tech.data);
  }
  get skillsSecondary () {
    return this._skillsSecondary;
  }
  get jobs (): Content.JobDocumentData[] {
    return this._jobs.filter(item => item.job.data).map(({ job }) => {
      const jobData = { ...job.data };
      const startDate = new Date(jobData.date_start);
      const startMonth = startDate.toLocaleString("default", { month: "long" });
      const endDate = new Date(jobData.date_end);
      const endMonth = endDate.toLocaleString("default", { month: "long" });
      jobData.date_start = `${startMonth} ${startDate.getFullYear()}`;
      jobData.date_end = `${endMonth} ${endDate.getFullYear()}`;
      jobData.tech = job.data.tech.map((item: Content.TechDocument) => item.tech.data);
      return jobData;
    });;
  }

}