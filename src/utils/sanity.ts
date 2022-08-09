import { sanityConfig } from '@/config';
import createImageUrlBuilder from '@sanity/image-url';
import { createPreviewSubscriptionHook } from 'next-sanity';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: string) => imageBuilder.image(source).auto('format').fit('max');

export const usePreviewSubscription = createPreviewSubscriptionHook(sanityConfig);
