import type { Content, ImageField } from "@prismicio/client";

export class TechViewModel {

  _name: string;
  _icon: ImageField;
  _nonDistinct: boolean;

  constructor(cmsData: Content.TechDocumentData) {
    this._name = cmsData.name as string;
    this._icon = cmsData.icon;
    this._nonDistinct = cmsData.nondistinct;
  }

  get name (): string {
    return this._name;
  }
  get icon (): ImageField {
    return this._icon;
  }
  get nonDistinct (): boolean {
    return this._nonDistinct;
  }

}