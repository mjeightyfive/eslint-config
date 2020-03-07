import config from '../.eslintrc.js';

test('test basic properties of config', () => {
    expect(isObject(config.parserOptions)).toBe(true);
    expect(isObject(config.env)).toBe(true);
    expect(isObject(config.globals)).toBe(true);
    expect(isObject(config.rules)).toBe(true);
});

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}
