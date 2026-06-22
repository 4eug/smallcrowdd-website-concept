import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      description: 'e.g. "© 2026 smallcrowdd llc"',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
      description: 'Fallback SEO for pages without their own SEO fields',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
});
