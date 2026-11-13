import {CogIcon} from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

const richText = [
  defineArrayMember({
    type: 'block',
    styles: [
      {title: 'Normal', value: 'normal'},
      {title: 'Heading 2', value: 'h2'},
      {title: 'Heading 3', value: 'h3'},
    ],
  }),
]

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      description: 'Positioning line used in metadata, the share image, and RH·OS fallbacks.',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'Short pitch, e.g. "Built like a developer. Wired like a marketer."',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      description: 'Meta description for search results and link previews (~155 characters).',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(170),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Public Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'array',
      of: richText,
    }),
    defineField({
      name: 'termsConditions',
      title: 'Terms & Conditions',
      type: 'array',
      of: richText,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description', media: 'logo'},
  },
})
