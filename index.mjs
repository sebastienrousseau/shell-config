import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const presets = [".shellcheckrc",".shfmt"];
const defaultPreset = ".shellcheckrc";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

const config = {
  name: "@sebastienrousseau/shell-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};

export default config;
