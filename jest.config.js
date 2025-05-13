module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  verbose: true,
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'clover'],
  coverageThreshold: {
    './src/test/setup.js': {
      statements: 84,
      branches: 70,
      functions: 80,
      lines: 83
    },
    global: {
      branches: 50,
      functions: 20,
      lines: 50,
      statements: 50
    },
    './src/controllers/**/*.js': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
    './src/middleware/**/*.js': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
    './src/models/**/*.js': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
    './src/routes/**/*.js': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
    './src/test/**/*.js': {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testTimeout: 10000,
  detectOpenHandles: true
};