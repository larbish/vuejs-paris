// nuxt.schema.ts
import { field } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    socials: {
      $schema: {
        title: 'Socials links',
        tags: ['@studioIcon i-mdi-web']
      },
      twitter: field({
        type: 'string',
        title: 'Twitter',
        description: 'Twitter social handle',
        icon: 'i-mdi-twitter'
      }),
      github: field({
        type: 'string',
        title: 'Github',
        description: 'Github social handle',
        icon: 'i-mdi-github'
      })
    },
    header: {
      $schema: {
        title: 'Header configuration',
        tags: ['@studioIcon i-mdi-page-layout-header']
      },
      title: field({
        type: 'string',
        title: 'Header',
        description: 'Header title to display if no icon is provided',
        icon: 'i-mdi-format-title'
      }),
      icon: field({
        type: 'icon',
        title: 'Icon',
        description: 'Header icon',
        icon: 'i-mdi-image-filter-center-focus-strong-outline'
      })
    },
    footer: {
      $schema: {
        title: 'Footer configuration',
        tags: ['@studioIcon i-mdi-page-layout-footer']
      },
      display: field({
        type: 'boolean',
        title: 'Display',
        description: 'Hide or display the footer',
        icon: 'i-mdi-page-layout-footer'
      })
    }
  }
})
