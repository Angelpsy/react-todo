module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "react-app",
  ],
  plugins: [
    "react-hooks"
  ],
  // add your custom rules here
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "max-len": ["error", {"code": 120}],
    "quotes": ["error", "double"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "semi": [2, "always"]
  }
};

