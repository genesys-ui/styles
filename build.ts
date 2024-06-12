import sass from "sass";
import { writeFileSync, cpSync, rmSync, mkdirSync } from "fs";

// Prepare environment
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
mkdirSync('dist/css');

// Create css
const lightResult = sass.compile("./src/light.scss");
writeFileSync("dist/css/light.css", lightResult.css);

const darkResult = sass.compile("./src/dark.scss");
writeFileSync("dist/css/dark.css", darkResult.css);

// Copy SCSS files
cpSync("src/", "dist/scss", { recursive: true });
