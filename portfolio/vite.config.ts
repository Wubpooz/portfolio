import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Use the slim build of @posthog/react which does NOT import posthog-js.
      // This removes vendor-posthog from the modulepreload list so the 70 KB
      // chunk is never fetched on the critical path.
      "@posthog/react": path.resolve(__dirname, "node_modules/@posthog/react/dist/esm/slim/index.js"),
    },
    tsconfigPaths: true
  },
  build: {
    // Target modern browsers — eliminates Math.trunc / Array.at polyfills (~8 KB savings)
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split PostHog into its own chunk so it never blocks the main entry
          if (id.includes('posthog-js') || id.includes('@posthog')) return 'vendor-posthog';
          // Animation library
          if (id.includes('framer-motion') || id.includes('/motion/')) return 'vendor-motion';
          // i18n — only loaded once locale is determined
          if (id.includes('i18next') || id.includes('react-i18next')) return 'vendor-i18n';
          // Router — needed on every page but separable from app logic
          if (id.includes('react-router')) return 'vendor-router';
          // Remaining large Radix/shadcn primitives
          if (id.includes('@radix-ui') || id.includes('radix-ui')) return 'vendor-ui';
        },
      },
    },
  },
})
