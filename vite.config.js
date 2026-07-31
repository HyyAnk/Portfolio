import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/motion') || id.includes('node_modules/framer-motion')) return 'motion';
          if (id.includes('node_modules/react')) return 'react-vendor';
          return undefined;
        },
      },
    },
  },
});
