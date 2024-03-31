import type { Metadata } from "next";
import "./globals.css";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import { SiteHeader } from "@/ui";
import { fontRoboto } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "Christopher Mendes | Frontend Developer",
  description: "CV and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontRoboto.className}>
        <div className="container mx-auto min-h-screen flex flex-col gap-y-16 p-24 justify-between">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-slate-300 pt-4 text-xs font-sans text-slate-500">
            &copy; 2024 Christopher Mendes
          </footer>
        </div>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
