import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
    allowedHosts: ['all']
  },
  preview: {
    host: true,
    port: Number(process.env.PORT) || 3000,
    allowedHosts: ['all']
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})