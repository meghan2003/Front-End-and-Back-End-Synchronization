import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // ✅ Frontend runs on 5173
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // ✅ Backend is on 3000
        changeOrigin: true,
        secure: false
      }
    }
  }
});