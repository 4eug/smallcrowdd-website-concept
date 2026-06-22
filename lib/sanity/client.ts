import { createClient } from '@sanity/client';

let sanityClientInstance: ReturnType<typeof createClient> | null = null;
let previewClientInstance: ReturnType<typeof createClient> | null = null;

// Mock client for when Sanity is not configured
const mockClient = {
  fetch: async <T>(): Promise<T | null> => null,
} as unknown as ReturnType<typeof createClient>;

function createSanityClient(preview = false) {
  // Completely disable Sanity if explicitly disabled or project ID is missing
  const isSanityDisabled = process.env.NEXT_PUBLIC_SANITY_DISABLED === 'true';
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  
  // Return a mock client if Sanity is disabled or project ID is missing
  if (isSanityDisabled || !projectId || projectId === 'your-project-id' || projectId.trim() === '') {
    return mockClient;
  }

  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';
  const useCdn = process.env.NODE_ENV === 'production';

  const baseConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn,
  };

  if (preview) {
    if (!previewClientInstance) {
      previewClientInstance = createClient({
        ...baseConfig,
        useCdn: false,
        token: process.env.SANITY_API_READ_TOKEN,
      });
    }
    return previewClientInstance;
  }

  if (!sanityClientInstance) {
    sanityClientInstance = createClient({
      ...baseConfig,
      stega: {
        enabled: false,
      },
    });
  }
  return sanityClientInstance;
}

export function getClient(preview = false) {
  return createSanityClient(preview);
}
