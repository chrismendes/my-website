import type { Content, KeyTextField, RichTextField, ImageField } from "@prismicio/client";

export class HomeViewModel {

  _headline: KeyTextField;
  _intro?: RichTextField;
  _keySkills?: Content.TechDocumentData[];
  _picture: ImageField
  
  constructor(rawData: Content.HomepageDocumentData) {
    this._headline = rawData.headline;
    this._intro = rawData.intro;
    this._keySkills = rawData.key_skills.filter(item => item.tech.data).map(({ tech }) => tech.data);
    this._picture = rawData.picture;
  }

  get headline () {
    return this._headline;
  }
  get intro () {
    return this._intro;
  }
  get keySkills () {
    return this._keySkills;
  }
  get picture () {
    return this._picture;
  }

}