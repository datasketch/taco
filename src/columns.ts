import { Field } from './types.js'

function getColumnDefinitions (dictionary: Field[]) {
  if (!Array.isArray(dictionary)) {
    throw new Error('Dictionary must be an array')
  }
  return dictionary.map(field => ({
    title: field.label,
    field: field.id
  }))
}

export { getColumnDefinitions }
