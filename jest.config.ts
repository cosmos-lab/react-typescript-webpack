import type { Config } from "jest";
import "ts-jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "@views/(.*)": "<rootDir>/src/views/$1",
  },
};

export default config;
