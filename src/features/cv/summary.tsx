import React from "react";
import { SkillIcon } from "@/ui";
import { TechViewModel } from "@/features/tech";

interface ComponentProps {
  summaryText: JSX.Element | string;
  skillsPrimary: TechViewModel[];
  skillsSecondary: JSX.Element | string;
}

export const CvSummary = ({ summaryText, skillsPrimary, skillsSecondary }: ComponentProps) => (
  <div className="bg-gray-100 p-12">
    <h2>Summary</h2>
    <div className="flex flex-col xl:flex-row gap-x-24 gap-y-6">
      <div className="flex flex-col xl:w-1/2">
        {React.isValidElement(summaryText) ?
          <>{summaryText}</>
        :
          typeof summaryText === "string" &&
            <p>{summaryText}</p>
        }
      </div>
      <div className="flex flex-col xl:w-1/2 gap-y-4">
        <div className="flex flex-col">
          <h3>Key Skills</h3>
          <div className="flex flex-row flex-wrap gap-y-8 gap-x-4 mb-2 mt-6">
            {skillsPrimary.map((skill, index) => (
              <SkillIcon
                label={skill.name}
                icon={skill.icon}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col text-sm">
          {React.isValidElement(skillsSecondary) ?
            <>{skillsSecondary}</>
          :
            typeof skillsSecondary === "string" &&
              <p>{skillsSecondary}</p>
          }
        </div>
      </div>
    </div>
  </div>
);