module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/lib/jest/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/lib/jest/cssTransform.js',
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    "^hoc": "<rootDir>/hoc",
    "^utils": "<rootDir>/utils",
    "^hooks": "<rootDir>/hooks",
    "^pages": "<rootDir>/pages",
    "^styles": "<rootDir>/styles",
    "^components$": "<rootDir>/components",
    "^components\/queries$": "<rootDir>/components/queries.js",
  },
}