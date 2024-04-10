"use server";

import { prismic } from "@/prismicio";
import type { Content } from '@prismicio/client'

export const fetchHomeData = async (): Promise<Content.HomepageDocumentData> => {
  const page = await prismic.getSingle<Content.HomepageDocument>("homepage", {
    fetchLinks: ["tech.name", "tech.icon"]
  });
  return page.data;
}