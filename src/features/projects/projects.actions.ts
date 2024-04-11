"use server";

import { prismic } from "@/prismicio";
import type { Content } from '@prismicio/client'

export const fetchProjectIndexData = async (): Promise<Content.ProjectPageDocumentData> => {
  const page = await prismic.getSingle<Content.ProjectPageDocument>("project_page", {
    graphQuery: `
      {
        project_page {
          page_title
          projects {
            project {
              ...projectFields
              employer {
                ...employerFields
              }
              tech {
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

export const fetchProjectData = async ( uid: string ): Promise<Content.ProjectDocumentData | null> => {
  if (!uid || typeof uid !== "string") {
    return null;
  }
  const content = await prismic.getByUID("project", uid, {
    graphQuery: `
      {
        project {
          ...projectFields
          employer {
            ...employerFields
          }
          tech {
            tech {
              ...techFields
            }
          }
        }
      }
    `
  });
  return content.data;
}