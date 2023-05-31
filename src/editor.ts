import Factory from './factory.js'

export const editorFactory = new Factory()

editorFactory.register('Cat', (format) => ({
  editor: 'list',
  editorParams: {
    values: format.categories,
    autocomplete: true,
    multiselect: false
  }
}))

editorFactory.register('Num', () => ({
  editor: 'number'
}))

editorFactory.register('Bin', () => ({
  editor: 'tickCross'
}))
