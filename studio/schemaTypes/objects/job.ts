import {CaseIcon} from '@sanity/icons/Case'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const job = defineType({
  name: 'job',
  title: 'Job',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'duration', title: 'Duration', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({
      name: 'achievements',
      title: 'Achievements',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  preview: {
    select: {title: 'role', company: 'company', duration: 'duration'},
    prepare: ({title, company, duration}) => ({
      title,
      subtitle: [company, duration].filter(Boolean).join(' · '),
    }),
  },
})
