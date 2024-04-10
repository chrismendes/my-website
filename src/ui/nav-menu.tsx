import Link from "next/link";
import { IconGitHub, IconLinkedIn } from "@/ui/icons";

interface Props {
  currentPath: string;
  vertical?: boolean;
}

const activeStyle = ( href: string, currentPath: string, vertical?: boolean ) => {
  const activeHorizontal = "border-b-2";
  const activeVertical = "border-l-4 border-accent pl-4";
  if (href === currentPath) {
     return (vertical) ? activeVertical : activeHorizontal;
  }
  return "";
}

export const NavMenu = ({ currentPath, vertical }: Props) => (
  <>
    <Link className="px-3 text-black hover:text-accent flex text-nowrap" href="/">
      <span className={`py-2 ${activeStyle("/", currentPath, vertical)}`}>
        Home
      </span>
    </Link>
    <Link className="px-3 text-black hover:text-accent flex text-nowrap" href="/cv">
      <span className={`py-2 ${activeStyle("/cv", currentPath, vertical)}`}>
        CV
      </span>
    </Link>
    <Link className="px-3 text-black hover:text-accent flex text-nowrap" href="/skills">
      <span className={`py-2 ${activeStyle("/skills", currentPath, vertical)}`}>
        Skills
      </span>
    </Link>
    <Link className="px-3 text-black hover:text-accent flex text-nowrap" href="/projects">
      <span className={`py-2 ${activeStyle("/projects", currentPath, vertical)}`}>
        Projects
      </span>
    </Link>
    <Link className="px-3 text-black hover:text-accent flex text-nowrap" href="/demos">
      <span className={`py-2 ${activeStyle("/demos", currentPath, vertical)}`}>
        Demos
      </span>
    </Link>
    <Link className="px-3 text-black hover:text-accent flex text-nowrap" href="/about">
      <span className={`py-2 ${activeStyle("/about", currentPath, vertical)}`}>
        About Me
      </span>
    </Link>
    <Link className="px-3 text-black hover:text-accent flex text-nowrap" href="/contact">
      <span className={`py-2 ${activeStyle("/contact", currentPath, vertical)}`}>
        Get In Touch
      </span>
    </Link>
    <div className={`flex flex-row ${(!vertical) ? "ml-4" : "mt-4 border-t-2 pt-6"}`}>
      <Link className="py-2 px-2 flex text-black" href="https://github.com/chrismendes/" target="_blank">
        <IconGitHub />
      </Link>
      <Link className="py-2 px-2 flex text-black" href="https://www.linkedin.com/in/chrismendes/" target="_blank">
        <IconLinkedIn />
      </Link>
    </div>
  </>
);