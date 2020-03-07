import eslint from 'eslint';

const { CLIEngine } = eslint;
const cli = new CLIEngine({
    useEslintrc: false,
    configFile: '.eslintrc.js'
});

test('load config in eslint to validate rule syntax is correct', () => {
    const code = 'const foo = 1;\nconst bar = function() {};\nbar(foo);\n(async () => {})();\n';
    expect(cli.executeOnText(code).errorCount).toBe(0);
});

test('import syntax is correct', () => {
    const code = `import { foo } from './index.js';\n`;
    expect(cli.executeOnText(code).errorCount).toBe(0);
});

test('key spacing', () => {
    const code = `const obj = { foo: 42 };\n`;
    expect(cli.executeOnText(code).errorCount).toBe(0);
});

test('comma dangle', () => {
    const code = `const obj = { foo: 42, bar: 29, };\n`;
    expect(cli.executeOnText(code).errorCount).toBe(1);
});
