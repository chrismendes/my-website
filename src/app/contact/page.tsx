import React from "react";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default async function ContactPage() {

  return (
    <div className="flex flex-col xl:flex-row gap-12 w-full">
      <div className="flex w-1/6 pt-10">
        <h1>Contact</h1>
      </div>
      <div className="flex flex-col gap-y-6 w-full xl:w-5/6 self-end bg-neutral-50 p-12">
        <p>Feel free to get in touch via email or LinkedIn.</p>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Mail size="24" className="text-accent" />
          <span className="email">work@chris<b>.work</b>mendes.uk</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Linkedin size="24" className="text-accent" />
          <Link href="https://linkedin.com/in/chrismendes" className="break-all">
            linkedin.com/in/chrismendes
          </Link>
        </div>
      </div>
    </div>
  );
}