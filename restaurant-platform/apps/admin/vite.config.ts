import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@restaurant-platform/ui': resolve(__dirname, '../../packages/ui/src'),
      '@restaurant-platform/config': resolve(__dirname, '../../packages/config/src'),
      '@restaurant-platform/utils': resolve(__dirname, '../../packages/utils/src'),
      '@restaurant-platform/auth': resolve(__dirname, '../../packages/auth/src')
    }
  }
});
