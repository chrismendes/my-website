import type { Content, KeyTextField } from "@prismicio/client";

export class ProjectIndexViewModel {

  _pageTitle: KeyTextField;
  _projects: Content.ProjectPageDocumentDataProjectsItem[];
  
  constructor(rawData: Content.ProjectPageDocumentData) {
    this._pageTitle = rawData.page_title;
    this._projects = rawData.projects;
  }

  get pageTitle () {
    return this._pageTitle;
  }
  get projects (): Content.ProjectDocumentData[] {
    return this._projects.filter(item => item.project.data).map(({ project }) => {
      const projectData = { ...project.data };
      projectData.tech = project.data.tech
        .filter((item: Content.TechDocument) => !item.tech.data.nondistinct)
        .map((item: Content.TechDocument) => item.tech.data);
      return projectData;
    });;
  }

}