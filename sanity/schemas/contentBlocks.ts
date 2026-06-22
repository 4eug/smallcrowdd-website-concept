import { defineField, defineType, defineArrayMember } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      options: { accept: 'video/*' },
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaLink',
      title: 'Secondary CTA Link',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'headline' },
    prepare: ({ title }) => ({ title: title || 'Hero Section' }),
  },
});

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'service',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' }),
            defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: ({ title }) => ({ title: title || 'Services Section' }),
  },
});

export const caseStudiesSection = defineType({
  name: 'caseStudiesSection',
  title: 'Case Studies Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'caseStudy' }] }],
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: ({ title }) => ({ title: title || 'Case Studies Section' }),
  },
});

export const testimonialsSection = defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: ({ title }) => ({ title: title || 'Testimonials Section' }),
  },
});

export const teamSection = defineType({
  name: 'teamSection',
  title: 'Team Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: ({ title }) => ({ title: title || 'Team Section' }),
  },
});

export const textSection = defineType({
  name: 'textSection',
  title: 'Text Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } },
      ],
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Centered', value: 'centered' },
          { title: 'Two Column', value: 'two-column' },
        ],
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: ({ title }) => ({ title: title || 'Text Section' }),
  },
});

export const imageSection = defineType({
  name: 'imageSection',
  title: 'Image Section',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({ name: 'fullWidth', title: 'Full Width', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'caption', media: 'image' },
    prepare: ({ title, media }) => ({ title: title || 'Image Section', media }),
  },
});
