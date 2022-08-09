export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2022-06-20',
};

export const sanityPreviewConfig = {
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
};
