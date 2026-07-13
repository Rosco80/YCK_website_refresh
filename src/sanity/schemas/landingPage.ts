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
      name: 'localizedWhatsappMessage',
      title: 'WhatsApp Message',
      type: 'object',
      description: 'The pre-filled message sent by the user on WhatsApp when they click a button on this landing page.',
      fields: [
        { name: 'en', title: 'English', type: 'text', description: 'e.g., "Hi YAPCHANKOR, I saw your Knee Pain Ad..."' },
        { name: 'ms', title: 'Malay', type: 'text' },
        { name: 'zh', title: 'Chinese', type: 'text' }
      ]
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
