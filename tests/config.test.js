import eslint from 'eslint';

test('load config in eslint to validate all rule syntax is correct', () => {
    const { CLIEngine } = eslint;
    const cli = new CLIEngine({
        useEslintrc: false,
        configFile: '.eslintrc.json'
    });

    const code = 'const foo = 1;\nconst bar = function() {};\nbar(foo);\n';
    expect(cli.executeOnText(code).errorCount).toBe(0);
});
