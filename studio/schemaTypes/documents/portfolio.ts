import {CodeIcon} from '@sanity/icons/Code'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Project URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'previewBGColor',
      title: 'Preview Background Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'images.0',
    },
  },
})
