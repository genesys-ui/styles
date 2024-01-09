import type { StorybookConfig } from "@storybook/html-vite";

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
