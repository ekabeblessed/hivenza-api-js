import { defineConfig } from 'tsup';

// ESM and CommonJS with their types; no dependencies, nothing happens at import.
export default defineConfig({
  entry: { index: 'src/index.ts', webhooks: 'src/webhooks.ts', connect: 'src/connect.ts' },
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  minify: false,
  clean: true,
  target: 'es2020',
  treeshake: true,
});
