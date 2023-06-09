import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/taco.es.js',
      format: 'es'
    },
    {
      file: 'dist/taco.min.js',
      format: 'iife',
      name: 'Taco'
    }
  ],
  plugins: [
    typescript(),
    terser()
  ]
})
