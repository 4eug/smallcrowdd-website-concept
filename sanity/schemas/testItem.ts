import { defineField, defineType } from 'sanity';

export const testItem = defineType({
  name: 'testItem',
  title: 'Test Item',
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
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'vimeoVideoId',
      title: 'Vimeo Video ID',
      type: 'string',
      description: 'Optional Vimeo video ID for this test',
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
    defineField({
      name: 'section',
      title: 'Section',
      type: 'number',
      description: 'Which section this test belongs to (1 or 2)',
      options: { list: [{ title: 'Section 1', value: 1 }, { title: 'Section 2', value: 2 }] },
      initialValue: 1,
    }),
    defineField({
      name: 'order',
      title: 'Sort Order',
      type: 'number',
      description: 'Order within the section (lower = first)',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Section & Order',
      name: 'sectionOrder',
      by: [
        { field: 'section', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'layout', media: 'thumbnail' },
  },
});
