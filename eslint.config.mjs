import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...astro.configs["flat/recommended"],

  {
    rules: {
      "no-unused-vars": "warn",
    },
  },
];
