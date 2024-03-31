import Image from "next/image";
import { IconGitHub, IconLinkedIn } from "@/ui/icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-7xl w-full items-center justify-between lg:flex">
        <div className="flex flex-col gap-y-2">
          <p className="text-3xl font-bold">Christopher Mendes</p>
          <p className="text-lg">Experienced Frontend Developer</p>
        </div>
        <div className="flex">
          <a
            className="p-2 text-slate-500 hover:text-black"
            href="https://github.com/chrismendes/"
            target="_blank"
          >
            <IconGitHub />
          </a>
          <a
            className="p-2 text-slate-500 hover:text-black"
            href="https://www.linkedin.com/in/chrismendes/"
            target="_blank"
          >
            <IconLinkedIn />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center ">
        <p>Page content</p>
      </div>

    </main>
  );
}
