import { defineField, defineType } from 'sanity';

export const theRisingTimesPage = defineType({
  name: 'theRisingTimesPage',
  title: 'The Rising Times',
  type: 'document',
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Large hero image at the top of the page',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 6,
      description: 'Description text displayed in grey below the title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'The Rising Times' }),
  },
});
