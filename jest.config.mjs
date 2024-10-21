import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testTimeout: 60000,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// export default createJestConfig(config);

export default async () => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: [
    "node_modules/(?!(react-markdown|vfile|unist-util-stringify-position|unist-util-position|unist-util-visit|unist-util-is|unist-util-generated|unified|bail|is-plain-obj|trough|remark-parse|mdast-util-from-markdown|mdast-util-to-string|mdast-util-to-hast|micromark|decode-named-character-reference|character-entities|remark-rehype|trim-lines|mdast-util-definitions|property-information|hast-util-whitespace|space-separated-tokens|comma-separated-tokens))",
  ],
});
