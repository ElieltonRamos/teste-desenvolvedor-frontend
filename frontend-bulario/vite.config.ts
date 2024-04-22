import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setupTests.ts'],
    coverage: {provider: 'v8', exclude: ['src/main.tsx', '.eslintrc.cjs']}
  },
})
