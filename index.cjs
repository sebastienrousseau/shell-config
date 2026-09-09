const fs = require("fs");
const path = require("path");

const presets = [".shellcheckrc",".shfmt"];
const defaultPreset = ".shellcheckrc";
const content = fs.readFileSync(path.join(__dirname, defaultPreset), "utf8");

module.exports = {
  name: "@sebastienrousseau/shell-config",
  version: "0.0.1",
  presets,
  defaultPreset,
  content
};
