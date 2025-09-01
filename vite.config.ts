import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://natalia-dev-rgb.github.io/Rio-Spa/',
  plugins: [react()],
})
