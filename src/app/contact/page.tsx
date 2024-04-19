import React from "react";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default async function ContactPage() {

  return (
    <div className="flex flex-row gap-x-12 w-full">
      <div className="flex w-1/6 pt-10">
        <h1>Contact</h1>
      </div>
      <div className="flex flex-col gap-y-6 w-5/6 self-end bg-neutral-50 p-12">
        <p>Feel free to get in touch via email or LinkedIn.</p>
        <div className="flex gap-x-4 items-center">
          <Mail size="24" className="text-accent" />
          <span className="email">work@chris<b>.work</b>mendes.uk</span>
        </div>
        <div className="flex gap-x-4 items-center">
          <Linkedin size="24" className="text-accent" />
          <Link href="https://linkedin.com/in/chrismendes">linkedin.com/in/chrismendes</Link>
        </div>
      </div>
    </div>
  );
}