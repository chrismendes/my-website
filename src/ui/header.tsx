"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavMenu,
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/ui";

import { fontOswald } from "@/ui/fonts";
import { Menu as IconMenu } from "lucide-react";

export const SiteHeader = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath])
  
  return (
    <div className="flex w-full items-center justify-between gap-x-8">
      <div className="flex flex-col">
        <Link href="/" className="p-3 -m-3 hover:text-inherit">
          <span className={`${fontOswald.className} text-3xl uppercase`}>Christopher Mendes</span>
        </Link>
      </div>
      <div className="lg:hidden">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger>
            <IconMenu />
          </SheetTrigger>
          <SheetContent className="w-[260px]">
            <div className="flex flex-col gap-y-4">
              <NavMenu
                currentPath={currentPath}
                vertical
              />
            </div>
          </SheetContent>
        </Sheet>

      </div>
      <div className="hidden lg:flex">
        <NavMenu currentPath={currentPath} />
      </div>
    </div>
  );
};