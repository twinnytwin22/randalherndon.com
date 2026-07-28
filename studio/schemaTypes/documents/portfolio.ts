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
      name: 'logoImage',
      title: 'Logo Image',
      description: 'Optional project logo shown in the Work grid. The project initials are used when omitted.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'images',
      title: 'Showcase Images',
      description: 'Optional images displayed one at a time in the project detail slider.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
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
      logoImage: 'logoImage',
      showcaseImage: 'images.0',
    },
    prepare({title, subtitle, logoImage, showcaseImage}) {
      return {title, subtitle, media: logoImage || showcaseImage}
    },
  },
})
