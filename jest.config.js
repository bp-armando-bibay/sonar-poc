module.exports = {
  preset: 'ts-jest/presets/js-with-babel', // Use ts-jest preset for TypeScript with Babel
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',  // Use babel-jest to transform TypeScript and JSX files
    '^.+\\.(js|jsx)$': 'babel-jest',  // Use babel-jest to transform JavaScript and JSX files
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',  // For CSS imports in tests
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Add jest-dom for extended matchers
  transformIgnorePatterns: [
    '/node_modules/(?!next|@babel|@testing-library).+\\.js$',  // Ensure certain node_modules are transformed
  ],
};
