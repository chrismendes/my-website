import type { Content, KeyTextField, RichTextField } from "@prismicio/client";

export class CvViewModel {

  _pageTitle: KeyTextField;
  _summaryText: RichTextField;
  _skillsPrimary: Content.TechDocumentData[];
  _skillsSecondary: RichTextField;
  _jobs: Content.JobDocumentData[];
  
  constructor(rawData: Content.CvPageDocumentData) {

    this._pageTitle = rawData.page_title;
    this._summaryText = rawData.summary;
    this._skillsPrimary = rawData.key_skills.filter(item => item.tech.data).map(({ tech }) => tech.data);
    this._skillsSecondary = rawData.secondary_skills;
    this._jobs = rawData.jobs.filter(item => item.job.data).map(({ job }) => {
      const jobData = { ...job.data };
      jobData.tech = job.data.tech.map((item: Content.TechDocument) => item.tech.data);
      return jobData;
    });
  }

  get pageTitle () {
    return this._pageTitle;
  }
  get summaryText () {
    return this._summaryText;
  }
  get skillsPrimary () {
    return this._skillsPrimary;
  }
  get skillsSecondary () {
    return this._skillsSecondary;
  }
  get jobs () {
    return this._jobs;
  }

}