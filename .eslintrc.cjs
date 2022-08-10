/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:tailwindcss/recommended",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
};
