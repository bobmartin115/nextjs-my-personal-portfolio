import { defineConfig } from "eslint/config";

export default defineConfig({
  extends: ["eslint-config-next"],
  ignorePatterns: [
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
});
