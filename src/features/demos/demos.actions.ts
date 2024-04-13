"use server";

import { prismic } from "@/prismicio";
import type { Content } from '@prismicio/client'

export const fetchDemoIndexData = async (): Promise<Content.DemoPageDocumentData> => {
  const page = await prismic.getSingle<Content.DemoPageDocument>("demo_page", {
    graphQuery: `
      {
        demo_page {
          page_title
          demos {
            demo {
              ...demoFields
              tech_stack {
                tech {
                  ...techFields
                }
              }
            }
          }
        }
      }
    `
  });
  return page.data;
}