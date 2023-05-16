function getColumnDefinitions (dictionary) {
  return dictionary.map(field => ({
    title: field.label,
    field: field.id
  }))
}

export { getColumnDefinitions }
