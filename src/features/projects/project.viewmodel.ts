import type { Content, RichTextField, ImageField, LinkField } from "@prismicio/client";
import type { CarouselTab } from "@/ui";
import { TechViewModel } from "@/features/tech";

export class ProjectViewModel {
  _url: string;
  _title: string;
  _intro: string;
  _coverPicture?: ImageField;
  _date: string;
  _employer: Content.JobDocumentData;
  _logo?: ImageField;
  _description: RichTextField;
  _tech: TechViewModel[];
  _techDistinctOnly: TechViewModel[];
  _gallery: ImageField[];
  _galleryMobile: ImageField[];
  _galleryBefore: ImageField[];
  _galleries: CarouselTab[];
  
  _link: LinkField;

  constructor(cmsData: Content.ProjectDocumentData, url: string) {
    this._url = url;
    this._title = cmsData.title as string;
    this._intro = cmsData.intro as string;
    this._coverPicture = cmsData.cover_picture;
    this._date = cmsData.date as string;
    this._employer = cmsData.employer?.data;
    this._logo = cmsData.logo_override || cmsData.employer?.data?.employer_logo;
    this._description = cmsData.description;
    this._tech = cmsData.tech
      .filter(item => item.tech.data)
      .map(({ tech }) => new TechViewModel(tech.data));
    this._techDistinctOnly = cmsData.tech
      .filter(item => item.tech.data)
      .map(({ tech }) => new TechViewModel(tech.data))
      .filter((tech: TechViewModel) => !tech.nonDistinct)
    this._gallery = cmsData.gallery as ImageField[];
    this._galleryMobile = cmsData.gallery_mobile as ImageField[];
    this._galleryBefore = cmsData.gallery_before as ImageField[];
    this._galleries = [];
    this._link = cmsData.link;
  }

  get url () {
    return this._url;
  }
  get title () {
    return this._title;
  }
  get intro () {
    return this._intro;
  }
  get coverPicture () {
    return this._coverPicture;
  }
  get date () {
    const dateObj = new Date(this._date);
    if (isNaN(dateObj.valueOf())) {
      throw "Invalid input string for project date object";
    }
    const month = dateObj.toLocaleString("default", { month: "long" }).substring(0, 3);
    return `${month} ${dateObj.getFullYear()}`;
  }
  get employer () {
    return this._employer;
  }
  get logo () {
    return this._logo;
  }
  get description () {
    return this._description;
  }
  get tech (): TechViewModel[] {
    return this._tech;
  }
  set tech (newTech: TechViewModel[]) {
    this._tech = newTech;
  }
  get techDistinctOnly (): TechViewModel[] {
    return this._techDistinctOnly;
  }
  get galleries () {
    if(this._gallery.length) {
      this._galleries.push({
        tabLabel: "Desktop View",
        tabIcon: "Monitor",
        pictures: this._gallery.map((item) => item.picture.large)
      });
    }
    if(this._galleryMobile.length) {
      this._galleries.push({
        tabLabel: "Mobile View",
        tabIcon: "Smartphone",
        pictures: this._galleryMobile.map((item) => item.picture)
      });
    }
    return this._galleries;
  }
  get link () {
    return this._link;
  }

}