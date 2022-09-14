/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx, defineManifest } from '@crxjs/vite-plugin';
import manifestFile from './manifest.json';
import { version, description, homepage, author } from './package.json';

const manifest = defineManifest((env) => ({
  ...manifestFile,
  name: `UnyCon ${env.mode === 'development' ? '🚧' : '🦄'}`,
  version,
  description,
  homepage_url: homepage,
  author: author.name,
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
