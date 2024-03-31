import Image from "next/image";
import { SiteHeader } from "@/ui/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SiteHeader />
      <div className="relative flex place-items-center ">
        <p>Page content</p>
      </div>
    </main>
  );
}