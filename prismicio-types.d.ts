// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Demo → Tech Stack*
 */
export interface DemoDocumentDataTechStackItem {
  /**
   * Tech field in *Demo → Tech Stack*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: demo.tech_stack[].tech
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tech: prismic.ContentRelationshipField<"tech">;
}

/**
 * Content for Demo documents
 */
interface DemoDocumentData {
  /**
   * Title field in *Demo*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: demo.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Demo*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: demo.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Picture field in *Demo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: demo.picture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;

  /**
   * Tech Stack field in *Demo*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: demo.tech_stack[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tech_stack: prismic.GroupField<Simplify<DemoDocumentDataTechStackItem>>;

  /**
   * GitHub field in *Demo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: demo.github
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github: prismic.LinkField;

  /**
   * Demo field in *Demo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: demo.demo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  demo: prismic.LinkField;
}

/**
 * Demo document from Prismic
 *
 * - **API ID**: `demo`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DemoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<DemoDocumentData>, "demo", Lang>;

/**
 * Item in *Demo Page → Demos*
 */
export interface DemoPageDocumentDataDemosItem {
  /**
   * Demo field in *Demo Page → Demos*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: demo_page.demos[].demo
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  demo: prismic.ContentRelationshipField<"demo">;
}

type DemoPageDocumentDataSlicesSlice = never;

/**
 * Content for Demo Page documents
 */
interface DemoPageDocumentData {
  /**
   * Page Title field in *Demo Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: demo_page.page_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  page_title: prismic.KeyTextField;

  /**
   * Demos field in *Demo Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: demo_page.demos[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  demos: prismic.GroupField<Simplify<DemoPageDocumentDataDemosItem>>;

  /**
   * Slice Zone field in *Demo Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: demo_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<DemoPageDocumentDataSlicesSlice> /**
   * Meta Description field in *Demo Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: demo_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Demo Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: demo_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Demo Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: demo_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Demo Page document from Prismic
 *
 * - **API ID**: `demo_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DemoPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<DemoPageDocumentData>,
    "demo_page",
    Lang
  >;

/**
 * Item in *Home Page → Key Skills*
 */
export interface HomepageDocumentDataKeySkillsItem {
  /**
   * Tech field in *Home Page → Key Skills*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.key_skills[].tech
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tech: prismic.ContentRelationshipField<"tech">;
}

type HomepageDocumentDataSlicesSlice = never;

/**
 * Content for Home Page documents
 */
interface HomepageDocumentData {
  /**
   * Headline field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.headline
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  headline: prismic.KeyTextField;

  /**
   * Intro field in *Home Page*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Picture field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.picture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  picture: prismic.ImageField<never>;

  /**
   * Key Skills field in *Home Page*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.key_skills[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  key_skills: prismic.GroupField<Simplify<HomepageDocumentDataKeySkillsItem>>;

  /**
   * Slice Zone field in *Home Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice> /**
   * Meta Description field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home Page document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Tech documents
 */
interface TechDocumentData {
  /**
   * Name field in *Tech*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: tech.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Icon field in *Tech*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: tech.icon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;
}

/**
 * Tech document from Prismic
 *
 * - **API ID**: `tech`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TechDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TechDocumentData>, "tech", Lang>;

export type AllDocumentTypes =
  | DemoDocument
  | DemoPageDocument
  | HomepageDocument
  | PageDocument
  | TechDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      DemoDocument,
      DemoDocumentData,
      DemoDocumentDataTechStackItem,
      DemoPageDocument,
      DemoPageDocumentData,
      DemoPageDocumentDataDemosItem,
      DemoPageDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataKeySkillsItem,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      TechDocument,
      TechDocumentData,
      AllDocumentTypes,
    };
  }
}
