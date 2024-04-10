import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { SiteHeader } from "@/ui";
import { fontRoboto, fontOswald } from "@/ui/fonts";
import "./globals.css";

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
      <body className={`${fontRoboto.className} ${fontOswald.variable}`}>
        <div className="container mx-auto min-h-screen flex flex-col gap-y-20 p-8 md:p-12 lg:p-24 justify-between">
          <SiteHeader />
          <main className="flex flex-1 w-full items-start">
            {children}
          </main>
        </div>
        <footer className="border-t border-gray-100 bg-gray-500 p-6 text-xs font-sans text-white text-center">
          &copy; 2024 Christopher Mendes
        </footer>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
