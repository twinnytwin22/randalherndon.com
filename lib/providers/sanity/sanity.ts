import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

const projectId = 
  process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset =
  process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = "2022-03-07";

const isPreviewMode = process.env.PREVIEW_MODE || process.env.NEXT_PUBLIC_PREVIEW_MODE || false;

export const client = createClient({
    projectId: projectId,
    dataset: dataset,
    useCdn: isPreviewMode ? false : true,
    apiVersion,
    perspective: isPreviewMode ? "previewDrafts" : "published",
    token: isPreviewMode ? process.env.SANITY_PREVIEW_TOKEN : undefined,
    ignoreBrowserTokenWarning: isPreviewMode ? true : false,
    });

export default isPreviewMode;

export const getPortfolio = async ({projectId}: {projectId?: string | null}) => {
  const query = projectId
    ? "*[_type == 'portfolio' && _id == $projectId][0]"
    : "*[_type == 'portfolio']";
  const res = await client.fetch(query, projectId ? { projectId } : {});
  return res;
};

const builder = createImageUrlBuilder(client);

export function imageBuilder(source: unknown) {
  if (!source) return "";
  return builder.image(source).auto("format").url();
}
