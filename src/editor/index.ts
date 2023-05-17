import { factories } from './factories.js'

function getEditor (hdType: string, format: Record<string, any> = {}): { editor: string | Function; editorParams: Record<string, any> } {
  const factory = factories[hdType]
  if (!factory) {
    return {
      editor: 'input',
      editorParams: {}
    }
  }
  return { editor: factory.name, editorParams: factory.config(format) }
}

export { getEditor }
