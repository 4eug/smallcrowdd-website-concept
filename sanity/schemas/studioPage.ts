import { defineField, defineType, defineArrayMember } from 'sanity';

export const studioPage = defineType({
  name: 'studioPage',
  title: 'Studio Page',
  type: 'document',
  fields: [
    defineField({
      name: 'introCopy',
      title: 'Intro Copy',
      type: 'text',
      rows: 6,
      description: 'Intro text displayed in black at the top of the page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'partnershipCopy',
      title: 'Partnership Copy',
      type: 'text',
      rows: 3,
      description: 'Text below the intro (grey on mobile, black on desktop)',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'title' },
          },
        }),
      ],
    }),
    defineField({
      name: 'achievementHeading',
      title: 'Achievement Heading',
      type: 'text',
      rows: 2,
      description: 'Heading above the awards grid',
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'award',
          fields: [
            defineField({
              name: 'image',
              title: 'Award Image',
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
        }),
      ],
    }),
    defineField({
      name: 'collaborationHeading',
      title: 'Collaboration Heading',
      type: 'text',
      rows: 2,
      description: 'Heading above the brands grid',
    }),
    defineField({
      name: 'brands',
      title: 'Brand Partners',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'brand',
          fields: [
            defineField({
              name: 'image',
              title: 'Brand Logo',
              type: 'image',
              options: { accept: 'image/*' },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'alt',
              title: 'Brand Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'alt', media: 'image' },
          },
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Studio Page' }),
  },
});
