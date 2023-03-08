import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { md } from './src/lib/plugins/md';

const config: UserConfig = {
  plugins: [sveltekit(), md()]
};

export default config;
