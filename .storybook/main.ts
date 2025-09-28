import type { StorybookConfig } from "@storybook/html-vite";
import { mergeConfig } from "vite";
import { dirname, join } from 'node:path';

const config: StorybookConfig = {
  stories: ["../docs/**/*.@(mdx|stories.ts)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          // "@storybook/theming",
          // "@storybook/addon-docs/blocks"
        ],
      },
    });
  },
  framework: getAbsolutePath("@storybook/html-vite"),
  staticDirs: ["assets"],
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
