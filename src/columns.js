function getColumnDefinitions (dictionary) {
  if (!Array.isArray(dictionary)) {
    throw new Error('Dictionary must be an array')
  }
  return dictionary.map(field => ({
    title: field.label,
    field: field.id
  }))
}

export { getColumnDefinitions }
