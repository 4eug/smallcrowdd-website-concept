import { defineField, defineType } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'content',
      title: 'Page Content',
      type: 'array',
      of: [
        { type: 'heroSection' },
        { type: 'servicesSection' },
        { type: 'caseStudiesSection' },
        { type: 'testimonialsSection' },
        { type: 'teamSection' },
        { type: 'textSection' },
        { type: 'imageSection' },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare: ({ title, slug }) => ({
      title: title || 'Untitled Page',
      subtitle: `/${slug || ''}`,
    }),
  },
});
