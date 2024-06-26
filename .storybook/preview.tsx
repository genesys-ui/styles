import * as React from "react";
import { Preview } from "@storybook/html";
import { create } from "@storybook/theming";

import "@devoinc/genesys-base-styles/dist/css/styles.min.css";
import "./preview.scss";

type ComponentsMap = {
  [key in keyof Partial<React.ReactHTML>]: React.FC<any>;
};
export const createCustomComponents = (tagsList: (keyof React.ReactHTML)[]) => {
  return tagsList.reduce<ComponentsMap>((acc, tag) => {
    acc[tag] = ({ children, ...props }) => {
      const CUSTOM_CLASSES = `sbdocs sbdocs-${tag}`;
      const className = `${CUSTOM_CLASSES} ${props.className || ""}`;
      return React.createElement(tag, { ...props, className }, children);
    };
    return acc;
  }, {});
};

const customTheme = create({
  base: "light",
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
  // Text colors
  textColor: "#5B6870",
  textInverseColor: "rgba(255,255,255,0.9)",
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: customTheme,
      components: createCustomComponents([
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "a",
        "ul",
        "ol",
        "li",
        "blockquote",
        "hr",
        "img",
        "pre",
        "code",
        "em",
        "small",
        "strong",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
      ]),
    },
  },
};

export default preview;
