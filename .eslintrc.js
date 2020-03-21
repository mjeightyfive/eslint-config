module.exports = {
    env: {
        es6: true,
        browser: true,
        jest: true,
        node: true
    },
    globals: {
        document: false,
        navigator: false,
        window: false
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    extends: ['airbnb', 'react-app', 'prettier'],
    plugins: ['prettier', 'json', 'import', 'node', 'promise', 'react-hooks', 'jsx-a11y'],
    rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'comma-dangle': ['error', 'never'],
        'import/extensions': ['error', 'always', { ignorePackages: true }],
        'keyword-spacing': ['error', { before: true, after: true }],
        'key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
        'object-curly-spacing': ['error', 'always'],
        'max-len': ['off'],
        'eol-last': ['error', 'always'],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }],
        'react/jsx-fragments': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};
