import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@views/(.*)": "<rootDir>/src/views/$1",
  },
};

export default config;
