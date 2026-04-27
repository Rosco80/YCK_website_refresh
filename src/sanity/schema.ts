import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './schemas/siteSettings'
import websiteImages from './schemas/websiteImages'
import physiotherapist from './schemas/physiotherapist'
import article from './schemas/article'
import testimonial from './schemas/testimonial'
import testimonialImageOverride from './schemas/testimonialImageOverride'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, websiteImages, physiotherapist, article, testimonial, testimonialImageOverride],
}
