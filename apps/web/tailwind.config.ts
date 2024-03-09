import baseConfig from '@repo/config/tailwind.config.ts';
import type { Config } from 'tailwindcss';

const config: Pick<Config, 'presets'> = {
  presets: [{ ...baseConfig }],
};

export default config;
