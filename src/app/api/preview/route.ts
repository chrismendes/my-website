import { NextRequest } from "next/server";
import { redirectToPreviewURL } from "@prismicio/next";

import { prismic } from "@/prismicio";

export async function GET(request: NextRequest) {
  return await redirectToPreviewURL({ client: prismic, request });
}
