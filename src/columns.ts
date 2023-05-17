import { getEditor } from './editor/index.js'

type Field = {
  id: string
  label: string
  hdType: string
  format: Record<string, any>
}

function getColumnDefinitions (dictionary: Field[]) {
  if (!Array.isArray(dictionary)) {
    throw new Error('Dictionary must be an array')
  }
  return dictionary.map(field => {
    const { editor, editorParams } = getEditor(field.hdType, field.format)
    return {
      title: field.label,
      field: field.id,
      editor,
      editorParams
    }
  })
}

export { getColumnDefinitions }
