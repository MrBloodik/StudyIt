import expoConfig from "eslint-config-expo/flat";
import { defineConfig } from "eslint/config";

export default defineConfig({
  extends: [expoConfig],
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
  rules: {
    "react/jsx-max-props-per-line": [1, { maximum: 1, when: "multiline" }],
    "arrow-body-style": ["error", "as-needed"],
    "implicit-arrow-linebreak": ["error", "beside"],
  },
  ignores: ["dist/*"],
});
