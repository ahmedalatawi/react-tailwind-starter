import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
    // If you'd prefer to not run the checkers during unit testing with Vitest, you can alter the config based on that. Example:
    // !process.env.VITEST ? checker({ typescript: true }) : undefined
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
});
