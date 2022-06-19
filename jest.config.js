module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coverageDirectory: 'jest/coverage',
  moduleNameMapper: {
    '\\.(svg|jpg|png|css)$': '<rootDir>/jest/empty-module.js'
  },
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  moduleDirectories: ['node_modules', 'src']
};
