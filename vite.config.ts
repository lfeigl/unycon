/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';
import manifestFile from './manifest.json';
import { version } from './package.json';

const manifest = defineManifest((env) => ({
  name: `UnyCon ${env.mode === 'development' ? '🚧🚧🚧' : '🦄'}`,
  version,
  ...manifestFile,
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
