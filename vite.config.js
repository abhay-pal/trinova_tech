import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/trinova_tech/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        products: resolve(__dirname, 'products.html'),
        pos: resolve(__dirname, 'pos.html'),
        erp: resolve(__dirname, 'erp.html'),
        analytics: resolve(__dirname, 'analytics.html'),
        automation: resolve(__dirname, 'automation.html'),
        webDevelopment: resolve(__dirname, 'web-development.html'),
        mobileApps: resolve(__dirname, 'mobile-apps.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});