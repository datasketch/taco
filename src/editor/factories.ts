export const factories: Record<string, { name: string, config: (format: Record<string, any>) => Record<string, any>}> = {
  Cat: {
    name: 'list',
    config: (format: Record<string, any>) => ({
      values: format.categories,
      autocomplete: true,
      multiselect: false
    })
  }
}
