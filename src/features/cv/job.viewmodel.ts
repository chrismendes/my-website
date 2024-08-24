import type { Content, KeyTextField, RichTextField, SelectField, DateField, ImageField, LinkField } from "@prismicio/client";
import { TechViewModel } from "@/features/tech";
import { friendlyURL } from "@/util";

export class JobViewModel {

  _dateStart: DateField;
  _dateEnd: DateField;
  _employer: KeyTextField;
  _employerLogo: ImageField;
  _employerSummary: KeyTextField;
  _employerWebsite: LinkField;
  _industry: KeyTextField;
  _position: KeyTextField;
  _type: SelectField;
  _description: RichTextField;
  _tech: TechViewModel[];
  
  constructor(rawData: Content.JobDocumentData) {
    this._dateStart = rawData.date_start;
    this._dateEnd = rawData.date_end;
    this._employer = rawData.employer;
    this._employerLogo = rawData.employer_logo;
    this._employerSummary = rawData.employer_summary;
    this._employerWebsite = rawData.employer_website;
    this._industry = rawData.industry;
    this._position = rawData.job_title;
    this._type = rawData.type;
    this._description = rawData.description;
    // @ts-expect-error (TODO: Resolve `item` TS error)
    this._tech = rawData.tech?.map(item => new TechViewModel(item));
  }

  get dateStart () {
    const startDate = new Date(this._dateStart as string);
    const startMonth = startDate.toLocaleString("default", { month: "long" }).substring(0, 3);
    return `${startMonth} ${startDate.getFullYear()}`;
  }
  get dateEnd () {
    if (!this._dateEnd) return 'Present'
    const endDate = new Date(this._dateEnd as string);
    const endMonth = endDate.toLocaleString("default", { month: "long" }).substring(0, 3);
    return `${endMonth} ${endDate.getFullYear()}`;
  }
  get employer () {
    return this._employer;
  }
  get employerLogo () {
    return this._employerLogo;
  }
  get employerSummary () {
    return this._employerSummary;
  }
  get employerWebsiteURL () {
    return this._employerWebsite;
  }
  get industry () {
    return this._industry;
  }
  get position () {
    if (this._type === "Contract") {
      return `${this._position} (Contract)`;
    }
    return this._position;
  }
  get type() {
    return this._type;
  }
  get description () {
    return this._description;
  }
  get tech () {
    return this._tech;
  }

}