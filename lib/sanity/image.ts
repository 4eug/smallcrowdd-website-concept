import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImage } from '@/types';
import { sanityConfig } from './config';

const builder = createImageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});

export function urlFor(source: SanityImage) {
  return builder.image(source);
}

export function getImageDimensions(image: SanityImage) {
  if (image.asset.metadata?.dimensions) {
    return image.asset.metadata.dimensions;
  }
  const ref = image.asset._ref;
  if (!ref) return { width: 0, height: 0, aspectRatio: 1 };
  const [, , dimensions] = ref.split('-');
  const [width, height] = dimensions.split('x').map(Number);
  return { width, height, aspectRatio: width / height };
}

export function optimizedImageUrl(image: SanityImage, width = 1200) {
  return urlFor(image).width(width).auto('format').quality(80).url();
}
