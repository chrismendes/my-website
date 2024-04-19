import type { Content, KeyTextField, RichTextField, DateField, ImageField } from "@prismicio/client";

export class EducationViewModel {

  _degree: KeyTextField;
  _institution: KeyTextField;
  _dateStart: DateField;
  _dateEnd: DateField;
  _description: RichTextField;
  
  constructor(rawData: Content.EducationDocumentData) {
    this._degree = rawData.degree;
    this._institution = rawData.institution;
    this._dateStart = rawData.date_from;
    this._dateEnd = rawData.date_to;
    this._description = rawData.description;
  }

  get degree () {
    return this._degree;
  }
  get institution () {
    return this._institution;
  }
  get dateStart () {
    const startDate = new Date(this._dateStart as string);
    const startMonth = startDate.toLocaleString("default", { month: "long" }).substring(0, 3);
    return `${startMonth} ${startDate.getFullYear()}`;
  }
  get dateEnd () {
    const endDate = new Date(this._dateEnd as string);
    const endMonth = endDate.toLocaleString("default", { month: "long" }).substring(0, 3);
    return `${endMonth} ${endDate.getFullYear()}`;
  }
  get description () {
    return this._description;
  }

}