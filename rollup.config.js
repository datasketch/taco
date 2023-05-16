import { defineConfig } from 'rollup'
import terser from '@rollup/plugin-terser'

export default defineConfig({
  input: 'src/index.js',
  output: [
    {
      file: 'dist/taco.esm.js',
      format: 'es'
    },
    {
      file: 'dist/taco.js',
      format: 'iife',
      name: 'taco'
    }
  ],
  plugins: [terser()]
})
