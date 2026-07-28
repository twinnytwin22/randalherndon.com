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
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
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
