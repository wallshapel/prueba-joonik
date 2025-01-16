import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
export default [
  {
    ignores: ["dist"], // Ignorar la carpeta "dist"
  },
  {
    files: ["**/*.{ts,tsx}"], // Aplicar solo a archivos .ts y .tsx
    languageOptions: {
      ecmaVersion: 2020, // Versión de ECMAScript
      globals: globals.browser, // Variables globales del navegador
      parser: typescriptParser, // Usar el parser de TypeScript
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Habilitar JSX para React
        },
      },
    },
    plugins: {
      prettier, // Plugin de Prettier
      "react-hooks": reactHooks, // Reglas para hooks de React
      "react-refresh": reactRefresh, // Reglas para React Refresh
      "@typescript-eslint": typescriptEslint, // Reglas para TypeScript
    },
    rules: {
      ...js.configs.recommended.rules, // Reglas recomendadas de ESLint
      ...typescriptEslint.configs.recommended.rules, // Reglas recomendadas de TypeScript
      ...reactHooks.configs.recommended.rules, // Reglas recomendadas para hooks de React
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ], // Reglas para React Refresh
      "prettier/prettier": "error", // Integrar Prettier
    },
  },
];
