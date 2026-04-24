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
  ],
})
