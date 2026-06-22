import { defineField, defineType, defineArrayMember } from 'sanity';

export const workProject = defineType({
  name: 'workProject',
  title: 'Work Project',
  type: 'document',
  fields: [
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      description: 'Videos for the hero carousel (max 15). Each has its own thumbnail, metadata, preview & full video.',
      validation: (Rule) => Rule.max(15),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'heroVideo',
          fields: [
            defineField({
              name: 'thumbnail',
              title: 'Thumbnail Override',
              type: 'image',
              options: { hotspot: true },
              description: 'Optional — auto-fetched from the video URL if left empty',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Video title shown on the hero when selected',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'category',
              title: 'Category',
              type: 'string',
              description: 'e.g. "narrative short"',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'fullVideoUrl',
              title: 'Video URL',
              type: 'url',
              description: 'Vimeo URL — thumbnail & 30s preview are auto-extracted; full video plays on "watch"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'credits',
              title: 'Credits',
              type: 'text',
              rows: 8,
              description: 'Credits text shown in the credits modal',
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'category', media: 'thumbnail' },
          },
        }),
      ],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images (Stills)',
      type: 'array',
      description: 'Images for the stills gallery section — each with credit info',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'galleryImage',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'creditTitle',
              title: 'Credit Title',
              type: 'string',
              description: 'e.g. "Flo remembers"',
            }),
            defineField({
              name: 'creditShotBy',
              title: 'Shot By',
              type: 'string',
              description: 'e.g. "Shot by Laze"',
            }),
          ],
          preview: {
            select: { title: 'creditTitle', subtitle: 'creditShotBy', media: 'image' },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { videoCount: 'videos' },
    prepare({ videoCount }) {
      const count = videoCount?.length ?? 0;
      return {
        title: 'Work Page',
        subtitle: `${count} video${count !== 1 ? 's' : ''}`,
      };
    },
  },
});
