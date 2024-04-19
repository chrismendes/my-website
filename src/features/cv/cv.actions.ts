"use server";

import { prismic } from "@/prismicio";
import type { Content } from '@prismicio/client'

export const fetchCvData = async (): Promise<Content.CvPageDocumentData> => {
  const page = await prismic.getSingle<Content.CvPageDocument>("cv_page", {
    graphQuery: `
      {
        cv_page {
          ...cv_pageFields
          key_skills {
            tech {
              ...techFields
            }
          }
          jobs {
            job {
              ...jobFields
              tech {
                ...techFields
              }
            }
          }
          education {
            edu {
              ...eduFields
            }
          }
        }
      }
    `
  });
  return page.data;
}