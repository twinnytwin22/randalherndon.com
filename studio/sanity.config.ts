import {colorInput} from '@sanity/color-input'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'RandalHerndon.com',
  projectId: 'm6eglsww',
  dataset: 'production',
  plugins: [structureTool(), colorInput(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  
})

