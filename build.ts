import sass from "sass";
import { writeFileSync, cpSync, rmSync, mkdirSync } from "fs";

// Prepare environment
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
mkdirSync('dist/css');

// Create css
const lightResult = sass.compile("./light.scss");
writeFileSync("dist/css/light.css", lightResult.css);

const darkResult = sass.compile("./dark.scss");
writeFileSync("dist/css/dark.css", darkResult.css);

// Copy SCSS files
cpSync("src/_styles.scss", "dist/scss/_styles.scss");
cpSync("src/components", "dist/scss/components", { recursive: true });
cpSync("src/layout", "dist/scss/layout", { recursive: true });
cpSync("src/utils", "dist/scss/utils", { recursive: true });
cpSync("src/vendors", "dist/scss/vendors", { recursive: true });
