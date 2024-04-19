import React from "react";

interface Props {
  degree: string;
  institutionName: string;
  dateFrom: string;
  dateTo: string;
  description: JSX.Element;
}

export const CvEducation = ({
  degree,
  institutionName,
  dateFrom,
  dateTo,
  description,
}: Props) => (
  <div className="flex flex-col gap-y-2">
    <div className="flex flex-col min-[460px]:flex-row items-center gap-x-6 gap-y-2 text-lg bg-neutral-50 p-4">
      <span className="flex flex-row items-center justify-center sm:justify-start w-full min-[460px]:w-auto lg:w-1/5 text-accent font-bold uppercase text-center text-sm sm:text-base">
        <span className="min-[460px]:w-[46px] xl:w-auto">{dateFrom}</span>
        <span className="min-[460px]:w-[20px] xl:w-auto px-2 text-center"> - </span>
        <span className="min-[460px]:w-[46px] xl:w-auto">{dateTo}</span>
      </span>
      <span className="w-5/6 lg:w-4/5 flex flex-col sm:flex-row gap-y-1 gap-x-4 items-center">
        <span className="font-bold text-center uppercase inline-block">
          {institutionName}
        </span>
        <span className="flex-1 text-center sm:text-left">{degree}</span>
      </span>
    </div>
    <div className="p-4">
      {React.isValidElement(description) ?
        <>{description}</>
      :
        typeof description === "string" &&
          <p>{description}</p>
      }
    </div>
  </div>
);
