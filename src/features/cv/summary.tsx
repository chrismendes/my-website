import type { Content, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { SkillIcon } from "@/ui";

interface ComponentProps {
  summaryText: RichTextField;
  skillsPrimary: Content.TechDocumentData[];
  skillsSecondary: RichTextField;
}

export const CvSummary = ({ summaryText, skillsPrimary, skillsSecondary }: ComponentProps) => (
  <div className="bg-gray-100 p-12">
    <h2>Summary</h2>
    <div className="flex flex-col xl:flex-row gap-x-24 gap-y-6">
      <div className="flex flex-col xl:w-1/2">
        <PrismicRichText field={summaryText} />
      </div>
      <div className="flex flex-col xl:w-1/2 gap-y-4">
        <div className="flex flex-col">
          <h3>Key Skills</h3>
          <div className="flex flex-row flex-wrap gap-y-8 gap-x-4 mb-2 mt-6">
            {skillsPrimary.map((skill, index) => (
              <SkillIcon
                label={skill.name}
                image={<PrismicNextImage field={skill.icon} />}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col text-sm">
          <PrismicRichText field={skillsSecondary} />
        </div>
      </div>
    </div>
  </div>
);