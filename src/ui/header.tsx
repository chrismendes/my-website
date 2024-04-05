"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconGitHub, IconLinkedIn } from "@/ui/icons";
import { fontOswald } from "@/ui/fonts";

export const SiteHeader = () => {

  const currentPath = usePathname();
  
  return (
    <div className="w-full items-center justify-between lg:flex">
      <div className="flex flex-col">
        <Link href="/" className="p-3 -m-3 hover:text-inherit">
          <span className={`${fontOswald.className} text-3xl uppercase`}>Christopher Mendes</span>
        </Link>
      </div>
      <div className="flex">
        <Link className="px-3 text-black hover:text-accent flex" href="/">
          <span className={`border-b-2 py-2 ${(currentPath !== "/") ? "border-transparent" : ""}`}>
            Home
          </span>
        </Link>
        <Link className="px-3 text-black hover:text-accent flex" href="/cv">
          <span className={`border-b-2 py-2 ${(currentPath !== "/cv") ? "border-transparent" : ""}`}>
            CV
          </span>
        </Link>
        <Link className="px-3 text-black hover:text-accent flex" href="/skills">
          <span className={`border-b-2 py-2 ${(currentPath !== "/skills") ? "border-transparent" : ""}`}>
            Skills
          </span>
        </Link>
        <Link className="px-3 text-black hover:text-accent flex" href="/projects">
          <span className={`border-b-2 py-2 ${(currentPath !== "/projects") ? "border-transparent" : ""}`}>
            Projects
          </span>
        </Link>
        <Link className="px-3 text-black hover:text-accent flex" href="/demos">
          <span className={`border-b-2 py-2 ${(currentPath !== "/demos") ? "border-transparent" : ""}`}>
            Demos
          </span>
        </Link>
        <Link className="px-3 text-black hover:text-accent flex" href="/about">
          <span className={`border-b-2 py-2 ${(currentPath !== "/about") ? "border-transparent" : ""}`}>
            About Me
          </span>
        </Link>
        <Link className="px-3 text-black hover:text-accent flex" href="/contact">
          <span className={`border-b-2 py-2 ${(currentPath !== "/contact") ? "border-transparent" : ""}`}>
            Get In Touch
          </span>
        </Link>
        <div className="flex flex-row ml-4">
          <Link className="py-2 px-2 flex items-center text-black" href="https://github.com/chrismendes/" target="_blank">
            <IconGitHub />
          </Link>
          <Link className="py-2 px-2 flex items-center text-black" href="https://www.linkedin.com/in/chrismendes/" target="_blank">
            <IconLinkedIn />
          </Link>
        </div>
      </div>
    </div>
  );
};