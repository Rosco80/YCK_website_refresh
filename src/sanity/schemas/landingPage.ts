import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'internalName',
      title: 'Internal Name (e.g. Knee Pain Ad)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'internalName',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Used for the browser tab and search engines',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Used for search engines',
    }),
    defineField({
      name: 'modules',
      title: 'Page Modules',
      description: 'Build your landing page by adding and ordering sections below.',
      type: 'array',
      of: [
        { type: 'heroModule' },
        { type: 'conditionModule' },
        { type: 'predefinedModule' },
        { type: 'leadFormModule' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'internalName',
      subtitle: 'slug.current',
    },
  },
})
