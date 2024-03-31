import Link from "next/link";
import { IconGitHub, IconLinkedIn } from "@/ui/icons";

export const SiteHeader = () => (
  <div className="max-w-7xl w-full items-center justify-between lg:flex">
    <div className="flex flex-col gap-y-2">
      <p className="text-3xl font-bold">Christopher Mendes</p>
      <p>Experienced Frontend Developer</p>
    </div>
    <div className="flex">
      <Link className="p-2 text-slate-500 hover:text-black" href="/">
        Home
      </Link>
      <Link className="p-2 text-slate-500 hover:text-black" href="/cv">
        CV
      </Link>
      <Link className="p-2 text-slate-500 hover:text-black" href="/projects">
        Projects
      </Link>
      <Link className="p-2 text-slate-500 hover:text-black" href="/demos">
        Demos
      </Link>
      <Link className="p-2 text-slate-500 hover:text-black" href="/about">
        About Me
      </Link>
      <Link className="p-2 text-slate-500 hover:text-black" href="/contact">
        Get In Touch
      </Link>
      <Link className="p-2 text-slate-500 hover:text-black" href="https://github.com/chrismendes/" target="_blank">
        <IconGitHub />
      </Link>
      <Link className="p-2 text-slate-500 hover:text-black" href="https://www.linkedin.com/in/chrismendes/" target="_blank">
        <IconLinkedIn />
      </Link>
    </div>
  </div>
);