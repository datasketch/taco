import { editorFactory } from './editor.js'
import { formatterFactory } from './formatter.js'

type Field = {
  id: string
  label: string
  hdType: string
  format?: Record<string, any>
}

function getColumnDefinitions (dictionary: Field[]) {
  if (!Array.isArray(dictionary)) {
    throw new Error('Dictionary must be an array')
  }
  return dictionary.map(field => {
    return {
      title: field.label,
      field: field.id,
      ...editorFactory.create(field.hdType, field.format),
      ...formatterFactory.create(field.hdType, field.format)
    }
  })
}

export { getColumnDefinitions }
