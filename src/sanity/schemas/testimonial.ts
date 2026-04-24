import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main headline for the testimonial card and page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Check this if the testimonial should be in the "Top 3" featured section.',
      initialValue: false,
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Used for ordering. Lower numbers come first.',
      initialValue: 0,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Knee Pain', value: 'knee-pain' },
          { title: 'Back Pain', value: 'back-pain' },
          { title: 'Shoulder Pain', value: 'shoulder-pain' },
          { title: 'Neck Pain', value: 'neck-pain' },
          { title: 'Ankle & Foot', value: 'ankle-foot' },
          { title: 'Wrist Pain', value: 'wrist-pain' },
          { title: 'Sports Injury', value: 'sports-injury' },
          { title: 'Post-Surgery Rehab', value: 'post-surgery-rehab' },
          { title: 'Chronic Pain', value: 'chronic-pain' },
          { title: 'Sprained Ankle', value: 'sprained-ankle' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Impact Quote',
      type: 'string',
      description: 'A short, powerful quote (e.g., "I came back because it worked.")',
    }),
    defineField({
      name: 'summary',
      title: 'Card Summary',
      type: 'text',
      description: 'A brief summary of the case for the card view.',
    }),
    defineField({
      name: 'details',
      title: 'Case Details',
      type: 'object',
      fields: [
        defineField({ name: 'conditionTag', title: 'Condition Tag', type: 'string', description: 'e.g., [Frozen Shoulder]' }),
        defineField({ name: 'caseType', title: 'Case Type', type: 'string', description: 'e.g., [International Case]' }),
        defineField({ name: 'severity', title: 'Severity', type: 'string', description: 'e.g., Chronic' }),
        defineField({ name: 'location', title: 'Location', type: 'string', description: 'e.g., Overseas -> Malaysia' }),
      ],
    }),
    defineField({
      name: 'before',
      title: 'BEFORE (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What the patient experienced before treatment.',
    }),
    defineField({
      name: 'treatment',
      title: 'TREATMENT (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What treatment was provided.',
    }),
    defineField({
      name: 'outcome',
      title: 'OUTCOME (Bullet Points)',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'What the result was.',
    }),
    defineField({
      name: 'patientWords',
      title: 'Patient Words (Full Story)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The full testimonial text.',
    }),
    defineField({
      name: 'relatedConditions',
      title: 'Related Conditions',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of related conditions or URL paths.',
    }),
    defineField({
      name: 'image',
      title: 'Patient Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare(selection) {
      const { category } = selection
      return { ...selection, subtitle: category ? `Category: ${category}` : '' }
    },
  },
})
