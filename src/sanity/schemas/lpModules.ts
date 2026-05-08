import { defineType, defineField } from 'sanity'

export const heroModule = defineType({
  name: 'heroModule',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Main Headline',
      type: 'string',
      description: 'Leave blank to use the default translation',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Leave blank to use the default translation',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Hero Section (Default Text)',
        subtitle: 'Hero Section',
      }
    }
  }
})

export const conditionModule = defineType({
  name: 'conditionModule',
  title: 'Condition Content',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: 'Custom Condition Content',
      }
    }
  }
})

export const leadFormModule = defineType({
  name: 'leadFormModule',
  title: 'Lead Form Section',
  type: 'object',
  fields: [
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
      readOnly: true,
      initialValue: 'This will render the standard booking form.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Booking Lead Form',
      }
    }
  }
})

export const predefinedModule = defineType({
  name: 'predefinedModule',
  title: 'Predefined Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          { title: 'Rolling Hook', value: 'rollingHook' },
          { title: 'Differentiation', value: 'differentiation' },
          { title: 'Why Choose Us', value: 'whyChooseUs' },
          { title: 'Scientific Proof', value: 'scientificProof' },
          { title: 'Compatibility', value: 'compatibility' },
          { title: 'Clinical Results', value: 'clinicalResults' },
          { title: 'Branches', value: 'branches' },
          { title: 'FAQ', value: 'faq' },
          { title: 'Final CTA', value: 'finalCta' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'sectionType',
    },
    prepare(selection) {
      const titles: Record<string, string> = {
        rollingHook: 'Rolling Hook',
        differentiation: 'Differentiation',
        whyChooseUs: 'Why Choose Us',
        scientificProof: 'Scientific Proof',
        compatibility: 'Compatibility',
        clinicalResults: 'Clinical Results',
        branches: 'Branches',
        faq: 'FAQ',
        finalCta: 'Final CTA',
      };
      return {
        title: titles[selection.title as string] || 'Unknown Section',
        subtitle: 'Predefined Standard Section',
      }
    }
  }
})
