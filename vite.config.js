// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        checkout: resolve(__dirname, 'checkout/checkout.html'),
        productpage: resolve(__dirname, 'products/productpage.html'),
        viewall: resolve(__dirname, 'products/products.html'),
      },
    },
  },
})
