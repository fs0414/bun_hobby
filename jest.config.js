module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src/test'],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // テストファイルの命名規則
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };