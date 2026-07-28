import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article / Insight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Snippet',
      type: 'text',
      description: 'A brief summary that will appear under the title and as the "Key Takeaways" on the website.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'The name of the author (e.g., YCK Pain Treatment Centre).',
      initialValue: 'YCK Pain Treatment Centre',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        }
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image', options: { hotspot: true } }
      ],
      description: 'The main body of the article. Similar to the "Start writing..." area in Substack.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'coverImage',
      date: 'publishedAt',
    },
    prepare({ title, media, author, date }) {
      return {
        title,
        subtitle: author ? `By ${author}` : (date ? new Date(date).toLocaleDateString() : ''),
        media,
      }
    },
  },
})
