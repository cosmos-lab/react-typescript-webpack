const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  testMatch: ["**/?(*.)+(test).[t]s?(x)"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.css$": "identity-obj-proxy",
  },
};

export default config;
