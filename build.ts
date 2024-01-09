import sass from "sass";
import { writeFileSync } from "fs";

const result = sass.compile("./src/styles.scss");

writeFileSync("dist/styles.css", result.css);
