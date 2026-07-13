import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'E.g., G-XXXXXXXXXX',
    }),
    defineField({
      name: 'googleTagManagerId',
      title: 'Google Tag Manager ID',
      type: 'string',
      description: 'E.g., GTM-XXXXXXX',
    }),
    defineField({
      name: 'metaPixelId',
      title: 'Meta Pixel ID',
      type: 'string',
      description: 'E.g., 1234567890',
    }),
    defineField({
      name: 'googleSiteVerificationId',
      title: 'Google Site Verification ID',
      type: 'string',
      description: 'The verification code for Google Search Console HTML tag method (e.g., "AbC123Xyz...")',
    }),
    defineField({
      name: 'websiteWhatsappMessages',
      title: 'Website WhatsApp Messages',
      type: 'object',
      description: 'Manage the pre-filled WhatsApp messages for various pages across the main website.',
      fields: [
        defineField({
          name: 'localizedDefaultMessage',
          title: 'Default Message',
          type: 'object',
          description: 'The fallback message used if a specific page message is not set (e.g., "Hi YAPCHANKOR, I would like to book an assessment").',
          fields: [
            { name: 'en', title: 'English', type: 'text' },
            { name: 'ms', title: 'Malay', type: 'text' },
            { name: 'zh', title: 'Chinese', type: 'text' }
          ]
        }),
        defineField({
          name: 'localizedConditionMessage',
          title: 'Condition Message Template',
          type: 'object',
          description: 'Used on condition pages. Use {condition} as a placeholder for the condition name.',
          fields: [
            { name: 'en', title: 'English', type: 'text' },
            { name: 'ms', title: 'Malay', type: 'text' },
            { name: 'zh', title: 'Chinese', type: 'text' }
          ]
        }),
        defineField({
          name: 'localizedConditionOverrides',
          title: 'Specific Condition Messages',
          type: 'array',
          description: 'Optional: Provide a specific message for individual conditions. This overrides the Template above.',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'condition',
                  title: 'Condition',
                  type: 'string',
                  description: 'Select the condition to override.',
                  options: {
                    list: [
                      { title: 'Back Pain', value: 'back-pain' },
                      { title: 'Slipped Disc', value: 'slipped-disc' },
                      { title: 'Sciatica', value: 'sciatica' },
                      { title: 'Knee Pain', value: 'knee-pain' },
                      { title: 'Knee Osteoarthritis', value: 'osteoarthritis-knee' },
                      { title: 'Frozen Shoulder', value: 'frozen-shoulder' },
                      { title: 'Sports Injury', value: 'sports-injury' },
                      { title: 'Post-Surgery Rehabilitation', value: 'post-surgery-rehab' },
                      { title: 'Chronic Pain', value: 'chronic-pain' },
                      { title: 'Hip Pain', value: 'hip-pain' },
                    ]
                  }
                },
                {
                  name: 'message',
                  title: 'Message',
                  type: 'object',
                  description: 'The specific WhatsApp message for this condition.',
                  fields: [
                    { name: 'en', title: 'English', type: 'text' },
                    { name: 'ms', title: 'Malay', type: 'text' },
                    { name: 'zh', title: 'Chinese', type: 'text' }
                  ]
                }
              ],
              preview: {
                select: {
                  title: 'condition',
                  subtitle: 'message.en'
                }
              }
            }
          ]
        }),
      ],
    }),
  ],
})
