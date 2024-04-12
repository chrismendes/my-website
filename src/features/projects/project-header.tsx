import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  logo?: JSX.Element;
  intro: string;
}

export const ProjectHeader = ({ title, logo, intro }: Props) => (
  <>
    <Link href="/projects" className="mb-6 flex gap-x-2">
      <ArrowLeft />Back
    </Link>

    <h1 className="mb-6 text-center">{title}</h1>
    {logo && React.isValidElement(logo) &&
      <div className="mx-auto mt-2">
        {logo}
      </div>
    }
    {intro &&
      <p className="text-lg mt-20 max-w-4xl mx-auto">{intro}</p>
    }
  </>
);