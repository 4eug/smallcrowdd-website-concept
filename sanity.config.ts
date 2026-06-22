import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

// Singleton document types — only one instance each
const SINGLETONS = ['siteSettings', 'homePage', 'testsPage', 'studioPage', 'theRisingTimesPage'];

export default defineConfig({
  name: 'smallcrowdd',
  title: 'Smallcrowdd Studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons at the top
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('Studio Page')
              .id('studioPage')
              .child(S.document().schemaType('studioPage').documentId('studioPage')),
            S.listItem()
              .title('Tests Page')
              .id('testsPage')
              .child(S.document().schemaType('testsPage').documentId('testsPage')),
            S.listItem()
              .title('The Rising Times')
              .id('theRisingTimesPage')
              .child(S.document().schemaType('theRisingTimesPage').documentId('theRisingTimesPage')),
            S.divider(),
            // Collections
            S.documentTypeListItem('workProject').title('Work Projects'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Prevent creating new singletons from the "new document" button
    newDocumentOptions: (prev) =>
      prev.filter((item) => !SINGLETONS.includes(item.templateId)),
  },
});
