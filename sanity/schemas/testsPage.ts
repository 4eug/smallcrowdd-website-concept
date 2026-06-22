import { defineField, defineType, defineArrayMember } from 'sanity';

export const testsPage = defineType({
  name: 'testsPage',
  title: 'Tests Page',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'text',
      rows: 5,
      description: 'Main headline text on the Tests page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 5,
      description: 'Secondary text below the headline (grey)',
    }),
    defineField({
      name: 'section1Videos',
      title: 'Section 1 Videos',
      type: 'array',
      description: 'Videos shown after the headline (up to 5). Thumbnail is auto-fetched from the video URL.',
      validation: (Rule) => Rule.max(5),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testVideo',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'fullVideoUrl',
              title: 'Video URL',
              type: 'url',
              description: 'Vimeo URL — thumbnail auto-extracted',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'credits',
              title: 'Credits',
              type: 'text',
              rows: 6,
              description: 'Credits text shown in the details modal',
            }),
            defineField({
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  { title: 'Default (half-width)', value: 'default' },
                  { title: 'Extended (full-width)', value: 'extended' },
                ],
              },
              initialValue: 'default',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'layout' },
          },
        }),
      ],
    }),
    defineField({
      name: 'midSectionText',
      title: 'Mid-Section Text',
      type: 'text',
      rows: 4,
      description: 'Text that appears between section 1 and section 2 videos',
    }),
    defineField({
      name: 'section2Videos',
      title: 'Section 2 Videos',
      type: 'array',
      description: 'Videos shown after the mid-section text (up to 3). Thumbnail is auto-fetched from the video URL.',
      validation: (Rule) => Rule.max(3),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'testVideo',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'fullVideoUrl',
              title: 'Video URL',
              type: 'url',
              description: 'Vimeo URL — thumbnail auto-extracted',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'credits',
              title: 'Credits',
              type: 'text',
              rows: 6,
              description: 'Credits text shown in the details modal',
            }),
            defineField({
              name: 'layout',
              title: 'Layout',
              type: 'string',
              options: {
                list: [
                  { title: 'Default (half-width)', value: 'default' },
                  { title: 'Extended (full-width)', value: 'extended' },
                ],
              },
              initialValue: 'default',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'layout' },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Tests Page' }),
  },
});
