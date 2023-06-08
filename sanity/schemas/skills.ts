import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'skill',
      title: 'Skill',
      type: 'string',
    }),
    defineField({
        title: 'Logo',
        name: 'logo',
        type: 'image',
        options: {
          hotspot: true
        },
      }),
  ],
  preview: {
    select: {
      title: 'skill',
    }
  }
})
