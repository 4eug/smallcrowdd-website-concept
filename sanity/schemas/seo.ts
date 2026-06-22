import { defineField, defineType } from 'sanity';

export const seoFields = [
  defineField({
    name: 'metaTitle',
    title: 'Meta Title',
    type: 'string',
    description: 'Override the default page title for SEO',
    validation: (Rule) => Rule.max(60).warning('Keep under 60 characters'),
  }),
  defineField({
    name: 'metaDescription',
    title: 'Meta Description',
    type: 'text',
    rows: 3,
    description: 'Brief description for search engines',
    validation: (Rule) => Rule.max(160).warning('Keep under 160 characters'),
  }),
  defineField({
    name: 'ogImage',
    title: 'Open Graph Image',
    type: 'image',
    description: 'Image shown when shared on social media (1200x630 recommended)',
    options: { hotspot: true },
  }),
  defineField({
    name: 'noIndex',
    title: 'No Index',
    type: 'boolean',
    description: 'Prevent search engines from indexing this page',
    initialValue: false,
  }),
];

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: seoFields,
});
