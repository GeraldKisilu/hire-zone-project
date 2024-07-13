// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Change this to the desired port
    open: true, // Automatically open the browser on server start
    proxy: {
      '/api': 'http://localhost:5000', // Example of setting up a proxy
    },
  },
});
