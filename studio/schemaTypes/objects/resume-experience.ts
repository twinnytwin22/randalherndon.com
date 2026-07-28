import {CaseIcon} from '@sanity/icons/Case'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const resumeExperience = defineType({
  name: 'resumeExperience',
  title: 'Resume Experience',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      initialValue: 'professional',
      options: {
        layout: 'radio',
        list: [
          {title: 'Professional Experience', value: 'professional'},
          {title: 'Additional Experience', value: 'additional'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {dateFormat: 'MMM YYYY'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {dateFormat: 'MMM YYYY'},
      hidden: ({parent}) => Boolean(parent?.current),
    }),
    defineField({
      name: 'current',
      title: 'Current Role',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'role',
      company: 'company',
      startDate: 'startDate',
      endDate: 'endDate',
      current: 'current',
    },
    prepare: ({title, company, startDate, endDate, current}) => ({
      title,
      subtitle: `${company ?? ''} · ${startDate ?? ''}–${current ? 'Present' : (endDate ?? '')}`,
    }),
  },
})
