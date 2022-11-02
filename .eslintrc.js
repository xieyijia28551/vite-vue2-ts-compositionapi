module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true
    },
    parser: 'vue-eslint-parser',
    extends: [
      'plugin:vue/recommended',
      'eslint:recommended',
      // 'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      '@vue/prettier'
    ],
    parserOptions: {
      parser: {
        js: 'espree',
        ts: '@typescript-eslint/parser',
        txs: '@typescript-eslint/parser',
        '<template>': 'espree'
      },
      ecmaVersion: 13,
      ecmaFeatures: {
        jsx: true
      },
      sourceType: 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'import/no-absolute-path': 'off',
      'import/no-extraneous-dependencies': 'off',
      'vue/no-multiple-template-root': 'off',
      // "prettier/prettier": "off",
      // 'no-param-reassign': [
      //   'error',
      //   {
      //     props: true,
      //     ignorePropertyModificationsFor: ['state', 'config']
      //   }
      // ],
      'no-param-reassign': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-empty-interface': 0,
      'vue/multi-word-component-names': 0
    }
  }
  