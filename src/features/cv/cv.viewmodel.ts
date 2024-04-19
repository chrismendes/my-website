import type { Content, KeyTextField, RichTextField, LinkToMediaField } from "@prismicio/client";
import { JobViewModel, EducationViewModel } from "@/features/cv";

export class CvViewModel {

  _pageTitle: KeyTextField;
  _pdf: LinkToMediaField;
  _summaryText: RichTextField;
  _skillsPrimary: Content.CvPageDocumentDataKeySkillsItem[];
  _skillsSecondary: RichTextField;
  _jobs: JobViewModel[] | Content.CvPageDocumentDataJobsItem[];
  _education: JobViewModel[] | Content.CvPageDocumentDataEducationItem[];
  
  constructor(rawData: Content.CvPageDocumentData) {
    this._pageTitle = rawData.page_title;
    this._pdf = rawData.pdf;
    this._summaryText = rawData.summary;
    this._skillsPrimary = rawData.key_skills;
    this._skillsSecondary = rawData.secondary_skills;
    this._jobs = rawData.jobs;
    this._education = rawData.education;
  }

  get pageTitle () {
    return this._pageTitle;
  }
  get pdf () {
    return this._pdf;
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
  get jobs (): JobViewModel[] {
    return this._jobs.filter(item => item.job.data).map(({ job }) => {
      return new JobViewModel(job.data);
    });
  }
  get education (): EducationViewModel[] {
    return this._education.filter(item => item.edu.data).map(({ edu }) => {
      return new EducationViewModel(edu.data);
    });
  }

}