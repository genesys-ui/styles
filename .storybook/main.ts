import type { StorybookConfig } from "@storybook/html-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  core: {
    disableWhatsNewNotifications: true,
  },
  stories: ["../docs/**/*.@(mdx|stories.ts)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["@storybook/theming", "@storybook/blocks"],
      },
    });
  },
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["assets"],
};

export default config;
