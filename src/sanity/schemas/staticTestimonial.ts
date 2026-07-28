import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'staticTestimonial',
  title: 'Static Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (ID)',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g., knee-pain, back-pain',
    }),
    defineField({
      name: 'patientWords',
      title: 'Patient Words (Main Content)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Image Override',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { title, category } = selection
      return {
        ...selection,
        subtitle: category ? `[${category}]` : '',
      }
    },
  },
})
