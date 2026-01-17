import nextConfig from "eslint-config-next";
import eslintConfigPrettier from "eslint-config-prettier";

const config = [
  ...nextConfig,
  eslintConfigPrettier,
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
    },
  },
  {
    ignores: [".next/*", "node_modules/*"],
  },
];

export default config;
