import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";

/// <reference types="vite-plugin-pwa/client" />
// https://vitejs.dev/config/

export default defineConfig({

  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['background.png'],
      manifest: {
        name: 'Task Manager',
        short_name: 'Task Manager',
        description: 'A simple task management app',
        theme_color: '#3182ce',
        background_color: '#ffffff',
        icons: [
          {
            src: 'src/assets/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'src/assets/icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setupTests',
  },
});
