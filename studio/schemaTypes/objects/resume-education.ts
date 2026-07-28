import {BookIcon} from '@sanity/icons/Book'
import {defineField, defineType} from 'sanity'

export const resumeEducation = defineType({
  name: 'resumeEducation',
  title: 'Resume Education',
  type: 'object',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'institution',
      title: 'Institution',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'credential',
      title: 'Credential',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
      options: {dateFormat: 'MMM YYYY'},
    }),
  ],
  preview: {
    select: {title: 'credential', subtitle: 'institution'},
  },
})
