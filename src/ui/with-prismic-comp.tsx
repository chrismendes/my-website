import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import type { RichTextField } from "@prismicio/client";
import { deepFindAndReplace } from "@/util";

const isImageField = (value: any) => {
  return (prismicH.isFilled.image(value) && value.dimensions);
}
const isRichTextField = (value: any) => {
  return (prismicH.isFilled.richText(value) && value[0].type);
}
const isLinkField = (value: any) => {
  return (prismicH.isFilled.link(value) && value.link_type);
}

const addPrismicComponent = (value: any): JSX.Element | false => {
  if (typeof value === "object") {
    if (isImageField(value)) {
      return <PrismicNextImage field={value} />;
    }
    if (isRichTextField(value)) {
      return <PrismicRichText field={value as RichTextField} />;
    }
    if (isLinkField(value)) {
      return <PrismicNextLink field={value} />;
    }
  }
  return false;
};

const isPrismicField = (value: any): boolean => {
  if (typeof value === "object") {
    if (isImageField(value)) {
      return true;
    }
    if (isRichTextField(value)) {
      return true;
    }
    if (isLinkField(value)) {
      return true;
    }
  }
  return false;
};

export const withPrismicFieldComponents = (BaseComponent: React.FC) => {
  return function EnhancedComponent(props: any) {
    const updatedProps = deepFindAndReplace(
      props,
      isPrismicField,
      addPrismicComponent
    );
    return <BaseComponent {...updatedProps} />;
  };
};
