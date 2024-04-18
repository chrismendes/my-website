import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import type { KeyTextField, RichTextField, ImageField } from "@prismicio/client";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card";
import { friendlyURL } from "@/util";

interface Props {
  dateFrom: string;
  dateTo: string;
  jobTitle: KeyTextField;
  jobDescription: RichTextField
  companyName: KeyTextField;
  companyLogo?: ImageField | null;
  companyDescription: KeyTextField;
  companyIndustry: KeyTextField;
  companyWebsite?: string;
  index?: number;
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
  index
}: Props) => (
  <div className="flex flex-col gap-y-2" key={index}>
    <div className="flex flex-col min-[460px]:flex-row items-center gap-x-6 gap-y-2 text-lg bg-neutral-50 p-4">
      <span className="flex flex-row items-center justify-center sm:justify-start w-full min-[460px]:w-auto lg:w-1/5 text-accent font-bold uppercase text-center text-sm sm:text-base">
        <span className="min-[460px]:w-[46px] xl:w-auto">{dateFrom}</span>
        <span className="min-[460px]:w-[20px] xl:w-auto px-2 text-center"> - </span>
        <span className="min-[460px]:w-[46px] xl:w-auto">{dateTo}</span>
      </span>
      <span className="w-5/6 lg:w-4/5 flex flex-col sm:flex-row gap-y-1 gap-x-4 items-center">
        <HoverCard openDelay={0}>
          <HoverCardTrigger>
            <span className="font-bold text-center uppercase inline-block lg:border-b lg:border-black lg:border-dotted lg:cursor-default">
              {companyName}
            </span>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            className="flex flex-col gap-y-2 items-start text-sm font-sans"
          >
            {companyLogo &&
              <div className="max-h-16 w-auto mb-2">
                <PrismicNextImage field={companyLogo} className="max-h-12 w-auto" />
              </div>
            }
            <p className="m-0">
              <span className="font-bold uppercase inline-block mr-2">
                {companyName}
              </span>
              {companyWebsite && (
                <Link href={companyWebsite} target="_blank">
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
        <span className="flex-1 text-center sm:text-left">{jobTitle}</span>
      </span>
    </div>
    <div className="p-4">
      <PrismicRichText field={jobDescription} />
    </div>
  </div>
);
