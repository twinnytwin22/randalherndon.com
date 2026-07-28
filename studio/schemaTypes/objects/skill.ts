import {SparklesIcon} from '@sanity/icons/Sparkles'
import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'object',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'number',
      validation: (rule) => rule.required().min(0).max(100),
    }),
  ],
  preview: {
    select: {title: 'name', level: 'level'},
    prepare: ({title, level}) => ({
      title,
      subtitle: `${level ?? 0}%`,
    }),
  },
})
