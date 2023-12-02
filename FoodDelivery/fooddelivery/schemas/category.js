import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: rule=> rule.required()
    },
    {
      name: 'description',
      title: 'Category description',
      type: 'string',
      validation: rule=> rule.required()
    },
    {
      name: 'image',
      title: 'image of the category',
      type: 'image'
    }
  ],
})
