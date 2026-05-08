import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './schemas/siteSettings'
import websiteImages from './schemas/websiteImages'
import physiotherapist from './schemas/physiotherapist'
import article from './schemas/article'
import testimonial from './schemas/testimonial'
import staticTestimonial from './schemas/staticTestimonial'
import landingPage from './schemas/landingPage'
import { heroModule, conditionModule, leadFormModule, predefinedModule } from './schemas/lpModules'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings, 
    websiteImages, 
    physiotherapist, 
    article, 
    testimonial, 
    staticTestimonial,
    landingPage,
    heroModule,
    conditionModule,
    leadFormModule,
    predefinedModule
  ],
}
