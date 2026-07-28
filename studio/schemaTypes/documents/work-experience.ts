import {CaseIcon} from '@sanity/icons/Case'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const workExperience = defineType({
  name: 'workExperience',
  title: 'Work Experience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'introText', title: 'Intro Text', type: 'string'}),
    defineField({
      name: 'jobs',
      title: 'Jobs',
      type: 'array',
      of: [defineArrayMember({type: 'job'})],
    }),
  ],
})
