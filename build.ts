import sass from "sass";
import { writeFileSync, cpSync, rmSync, mkdirSync } from "fs";

// Prepare environment
rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');

// Create css
const result = sass.compile("./src/styles.scss");
writeFileSync("dist/styles.css", result.css);

// Copy SCSS files
cpSync("src/", "dist/", { recursive: true });
