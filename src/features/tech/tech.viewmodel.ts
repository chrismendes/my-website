import type { Content, ImageField } from "@prismicio/client";

export class TechViewModel {

  name: string;
  icon: ImageField;
  nonDistinct: boolean;

  constructor(cmsData: Content.TechDocumentData) {
    this.name = cmsData.name as string;
    this.icon = cmsData.icon;
    this.nonDistinct = cmsData.nondistinct;
  }

}