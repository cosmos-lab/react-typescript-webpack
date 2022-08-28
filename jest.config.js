/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@views/(.*)": "<rootDir>/src/views/$1",
  },
};
