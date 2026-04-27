import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonialImageOverride',
  title: 'Testimonial Image Override',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonialId',
      title: 'Static Testimonial ID or Slug',
      type: 'string',
      description: 'The ID (e.g., testimonial-0) or slug (e.g., knee-pain) of the static testimonial to override.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Patient Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'testimonialId',
      media: 'image',
    },
  },
})
