import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/Natalia-dev-rgb/Rio-Spa',
  plugins: [react()],
})
