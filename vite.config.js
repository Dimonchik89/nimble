import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  // base: '/nimble/',
  server: {
    proxy: {
      '/api': {
        target: 'https://live.devnimble.com',
        changeOrigin: true,
        secure: false
      }
    }
  }
});
