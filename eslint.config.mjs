import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const isProduction = process.env.NODE_ENV === "production";

const eslintConfig = isProduction
  ? [] // In production, disable all rules
  : [...compat.extends("next/core-web-vitals", "next/typescript")]; // In dev, enable normal lint

export default eslintConfig;
