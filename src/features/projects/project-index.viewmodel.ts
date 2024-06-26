import type { Content, KeyTextField } from "@prismicio/client";
import { ProjectViewModel } from "@/features/projects";
import { TechViewModel } from "@/features/tech";

export class ProjectIndexViewModel {

  _pageTitle: KeyTextField;
  _projects: ProjectViewModel[];
  
  constructor(rawData: Content.ProjectPageDocumentData) {
    this._pageTitle = rawData.page_title;
    this._projects = rawData.projects.filter(item => item.project.data).map((item) => {
      return new ProjectViewModel(item.project.data, item.project.url);
    });
  }

  get pageTitle () {
    return this._pageTitle;
  }
  get projects (): ProjectViewModel[] {
    return this._projects;
  }

}