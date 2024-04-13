import type { Content, KeyTextField } from "@prismicio/client";
import { TechViewModel } from "@/features/tech";

export class DemoIndexViewModel {

  _pageTitle: KeyTextField;
  _demos: Content.DemoPageDocumentDataDemosItem[];
  
  constructor(rawData: Content.DemoPageDocumentData) {
    this._pageTitle = rawData.page_title;
    this._demos = rawData.demos;
  }

  get pageTitle () {
    return this._pageTitle;
  }
  get demos (): Content.DemoDocumentData[] {
    return this._demos.filter(item => item.demo.data).map(({ demo }) => {
      const demoData = { ...demo.data };
      demoData.tech = demo.data.tech_stack
        .filter((item: Content.TechDocument) => !item.tech.data.nondistinct)
        .map((item: Content.TechDocument) => new TechViewModel(item.tech.data));
      return demoData;
    });
  }

}