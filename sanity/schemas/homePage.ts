import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'file',
      options: { accept: 'video/*' },
      description: 'Background video on the home page',
    }),
    defineField({
      name: 'awards',
      title: 'Award Badges',
      type: 'array',
      description: 'Award badge images shown on the home page (max 10)',
      validation: (Rule) => Rule.max(10),
      of: [
        {
          type: 'object',
          name: 'awardBadge',
          fields: [
            defineField({
              name: 'image',
              title: 'Badge Image',
              type: 'image',
              options: { accept: 'image/*' },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'alt', media: 'image' },
          },
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Home Page' }),
  },
});
