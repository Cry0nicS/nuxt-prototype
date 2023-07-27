"use strict";

module.exports = {
    extends: [
        "@nuxtjs/eslint-config-typescript",
        "plugin:vue/vue3-recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    plugins: ["simple-import-sort"],
    root: true,
    env: {
        browser: true,
        node: true
    },
    // Lint .*.js files in the project root directory.
    ignorePatterns: ["!/.*.js", "types/generated.d.ts"],
    // TODO: check the clashes with "index" routing in nuxt.
    rules: {
        "vue/multi-word-component-names": 0
    }
};
