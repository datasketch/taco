import Factory from './factory.js'

export const formatterFactory = new Factory()

formatterFactory.register('Bin', () => ({
  formatter: 'tickCross'
}))

formatterFactory.register('Img', () => ({
  formatter: 'image',
  formatterParams: {
    height: '150px'
  }
}))
