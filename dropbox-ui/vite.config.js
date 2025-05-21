import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/gpthani/', // ensures assets load correctly on Pages
  plugins: [react()],
})
