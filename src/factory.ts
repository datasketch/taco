class Factory {
  registry: Record<string, Function>

  constructor () {
    this.registry = {}
  }

  register (vector: string, props: (format: Record<string, any>) => Record<string, any>) {
    this.registry[vector] = props
  }

  create (vector: string, format?: Record<string, any>): Record<string, any> {
    if (!Object.prototype.hasOwnProperty.call(this.registry, vector)) {
      console.warn(`Vector "${vector}" is not registered. Using default values from tabulator.`)
      return {}
    }
    return this.registry[vector](format)
  }
}

export default Factory
