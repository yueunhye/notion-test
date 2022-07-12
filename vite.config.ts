import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '~', replacement: `${__dirname}/src` }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @use "sass:list";
          @use "sass:map";
          @use "sass:math";
          @use "sass:meta";
          @use "sass:selector";
          @use "sass:string";
          @import "~/scss/variables";
        `
      }      
    }
  },
  server: {
    port: 2999
  },
  build: {
    rollupOptions: {
      output: {
        //[name](이 사이에 hash가 없기때문에 문제가 dist에서 불러온 render에 해시가 사라짐).js 
        entryFileNames: 'assets/[name].js',
        //chunk: 조각
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
