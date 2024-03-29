import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        short_name: 'Learn Spanish',
        name: 'Learn Spanish',
        description: 'The funniest way to learn Spanish words!',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'icons/android-icon-36x36.png',
            type: 'image/png',
            sizes: '36x36',
          },
          {
            src: 'icons/android-icon-48x48.png',
            type: 'image/png',
            sizes: '48x48',
          },
          {
            src: 'icons/android-icon-72x72.png',
            type: 'image/png',
            sizes: '72x72',
          },
          {
            src: 'icons/android-icon-96x96.png',
            type: 'image/png',
            sizes: '96x96',
          },
          {
            src: 'icons/android-icon-144x144.png',
            type: 'image/png',
            sizes: '144x144',
          },
          {
            src: 'icons/android-icon-192x192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'icons/icon.png',
            type: 'image/png',
            sizes: '512x512',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#663CE2',
        background_color: '#663CE2',
        orientation: 'portrait',
        scope: '/',
      },
    }),
  ],
});
