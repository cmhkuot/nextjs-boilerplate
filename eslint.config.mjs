import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const isProd = process.env.NODE_ENV === "production";

const eslintConfig = [...next, ...nextCoreWebVitals, ...nextTypescript, ...compat.config({
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],

  rules: {
    "prettier/prettier": "error",
    "no-console": "off",
    "no-constant-condition": "warn",
    "no-debugger": isProd ? "warn" : "off",
    "no-unused-expressions": "off",
    "no-async-promise-executor": "off",
    "react/react-in-jsx-scope": "off",
    "react/prefer-destructuring-assignment": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
  }
}), {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;
