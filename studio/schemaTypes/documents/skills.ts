import {SparklesIcon} from '@sanity/icons/Sparkles'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const skills = defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'introText', title: 'Intro Text', type: 'string'}),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'categoryTitle',
              title: 'Category Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'skillsList',
              title: 'Skills',
              type: 'array',
              of: [defineArrayMember({type: 'skill'})],
            }),
          ],
          preview: {
            select: {title: 'categoryTitle', skills: 'skillsList'},
            prepare: ({title, skills}) => ({
              title,
              subtitle: `${skills?.length ?? 0} skills`,
            }),
          },
        }),
      ],
    }),
  ],
})
