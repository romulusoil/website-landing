import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     // Add an alias for the 'slick-carousel' module to resolve the import issue
  //     'slick-carousel': path.resolve(__dirname, 'node_modules/slick-carousel/slick'),
  //   },
  // },
    css: {
    preprocessorOptions: {
      scss: {
        // Add the 'includePaths' option to allow Vite to resolve the '~' path in SCSS files
        includePaths: ['node_modules'],
      },
    },
  },
  
})