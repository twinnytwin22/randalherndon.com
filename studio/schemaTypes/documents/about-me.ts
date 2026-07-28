import {UserIcon} from '@sanity/icons/User'
import {defineArrayMember, defineField, defineType} from 'sanity'

const percentageValidation = (rule: any) => rule.min(0).max(100)

export const aboutMe = defineType({
  name: 'aboutMe',
  title: 'About Me',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({name: 'introText', title: 'Intro Text', type: 'string'}),
    defineField({
      name: 'aboutMe',
      title: 'Biography',
      type: 'text',
      rows: 8,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headlines',
      title: 'Headlines',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'skills',
      title: 'Featured Skills',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'percentage',
              title: 'Percentage',
              type: 'number',
              validation: percentageValidation,
            }),
          ],
          preview: {
            select: {title: 'name', percentage: 'percentage'},
            prepare: ({title, percentage}) => ({
              title,
              subtitle: `${percentage ?? 0}%`,
            }),
          },
        }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Value', type: 'number'}),
            defineField({name: 'suffix', title: 'Suffix', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', value: 'value', suffix: 'suffix'},
            prepare: ({title, value, suffix}) => ({
              title,
              subtitle: `${value ?? ''}${suffix ?? ''}`,
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'introText', subtitle: 'aboutMe', media: 'profileImage'},
  },
})
