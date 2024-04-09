import type { ComponentProps as ReactComponentProps } from "react";
import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card";
import { friendlyURL } from "@/util";

interface Props extends ReactComponentProps<"div"> {
  dateFrom: string;
  dateTo: string;
  jobTitle: string;
  jobDescription: JSX.Element;
  companyName: string;
  companyLogo?: JSX.Element | null;
  companyDescription: string;
  companyIndustry: string;
  companyWebsite?: string;
  key?: number;
}

export const CvJob = ({
  dateFrom,
  dateTo,
  jobTitle,
  jobDescription,
  companyName,
  companyLogo,
  companyDescription,
  companyIndustry,
  companyWebsite,
  key
}: Props) => (
  <div className="flex flex-col gap-y-2" key={key}>
    <div className="flex flex-row text-lg bg-gray-100 p-4">
      <span className="w-1/5 text-accent font-bold">{dateFrom}</span>
      <span className="w-4/5">
        <HoverCard openDelay={0}>
          <HoverCardTrigger>
            <span className="font-bold uppercase inline-block border-b border-black border-dotted cursor-default">
              {companyName}
            </span>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            className="flex flex-col gap-y-2 items-start text-sm font-sans"
          >
            {companyLogo &&
              <div className="max-h-16 w-auto mb-2">
                {companyLogo}
              </div>
            }
            <p className="m-0">
              <span className="font-bold uppercase inline-block mr-2">
                {companyName}
              </span>
              {companyWebsite && (
                <Link href={companyWebsite}>
                  {friendlyURL(companyWebsite)}
                </Link>
              )}
            </p>
            {companyIndustry && (
              <p className="m-0 italic">Industry: {companyIndustry}</p>
            )}
            {companyDescription && (
              <p className="m-0">{companyDescription}</p>
            )}
          </HoverCardContent>
        </HoverCard>
        <span className="ml-3">{jobTitle}</span>
      </span>
      <span className="hidden w-3/5">{jobTitle}</span>
    </div>
    <div className="p-4">
      {jobDescription}
    </div>
  </div>
);
