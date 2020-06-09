module.exports = {
  parser : "@typescript-eslint/parser",
  parserOptions : {
    project: "tsconfig.json",
    tsconfigRootDir: ".",
    ecmaVersion: 2020,
    sourceType: "module"
  },
  extends : [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    // "prettier/@typescript-eslint",
  ],
  plugins : [
    "@typescript-eslint",
    "react",
    "react-hooks"
  ],
  rules : {
    "react-hooks/rules-of-hooks": "error", // Проверяем правила хуков
    "react-hooks/exhaustive-deps": "warn", // Проверяем зависимости эффекта
    "@typescript-eslint/no-explicit-any": "off",
    "no-return-await": "error", // disallow unnecessary return await
    "prefer-arrow-callback": "warn", // require using arrow functions for callbacks
    "prefer-destructuring": "error", // require destructuring from arrays and/or objects
    "rest-spread-spacing": ["error", "never"], // enforce spacing between rest and spread operators and their expressions
    
  }
}