
import { SkillIcon } from "@/ui";

export interface Skill {
  name: string;
  image: JSX.Element;
}

interface ComponentProps {
  summaryText: JSX.Element;
  skillsPrimary: Skill[];
  skillsSecondary: JSX.Element;
}

export const CvSummary = ({ summaryText, skillsPrimary, skillsSecondary }: ComponentProps) => (
  <div className="bg-gray-100 p-12">
    <h2>Summary</h2>
    <div className="flex gap-x-24">
      <div className="flex flex-col w-1/2">
        {summaryText}
      </div>
      <div className="flex flex-col w-1/2 gap-y-4">
        <div className="flex flex-col">
          <h3>Key Skills</h3>
          <div className="flex flex-row gap-y-8 mb-2 mt-6">
            {skillsPrimary.map((skill, index) => (
              <SkillIcon
                label={skill.name}
                image={skill.image}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col text-sm">
          {skillsSecondary}
        </div>
      </div>
    </div>
  </div>
);