/** @type {import('ts-jest').JestConfigWithTsJest} */
export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const collectCoverage = true;
export const collectCoverageFrom = ['src/**/*.ts'];
export const coverageDirectory = 'coverage';
