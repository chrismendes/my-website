import React from "react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismicH from "@prismicio/helpers";
import type { RichTextField } from "@prismicio/client";
import { deepFindAndReplace } from "@/util";

const addPrismicComponent = (value: any): JSX.Element | false => {
  if (typeof value === "object") {
    if (prismicH.isFilled.image(value)) {
      return <PrismicNextImage field={value} className="w-auto" />;
    }
    if (prismicH.isFilled.richText(value)) {
      return <PrismicRichText field={value as RichTextField} />;
    }
    if (prismicH.isFilled.link(value)) {
      return <PrismicNextLink field={value} />;
    }
  }
  return false;
};

const isPrismicField = (value: any): boolean => {
  if (typeof value === "object") {
    if (prismicH.isFilled.image(value)) {
      return true;
    }
    if (prismicH.isFilled.richText(value) && value[0].type) { // (Extra criteria needed as `.richText` erroneously returning true on non-richText fields)
      return true;
    }
    if (prismicH.isFilled.link(value)) {
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
