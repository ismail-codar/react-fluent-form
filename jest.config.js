module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  collectCoverageFrom: ["src/**/*.+(ts|tsx)", "!src/index.ts"],
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"],
  globals: {
    "ts-jest": {
      tsconfig: {
        noUnusedLocals: false,
      },
    },
  },
};
