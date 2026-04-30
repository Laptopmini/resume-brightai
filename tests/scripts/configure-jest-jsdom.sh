#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

assert "jest.config.mjs exists" test -f jest.config.mjs

# testEnvironment must be jsdom
assert_grep "testEnvironment jsdom" '"jsdom"' "jest.config.mjs"

# moduleNameMapper must include css proxy and path alias
assert_grep "css moduleNameMapper" "identity-obj-proxy" "jest.config.mjs"
assert_grep "path alias moduleNameMapper" '^@/(.*)$' "jest.config.mjs"

# setupFilesAfterEach must include @testing-library/jest-dom exactly
assert_grep "setupFilesAfterEach" "@testing-library/jest-dom" "jest.config.mjs"

# Existing config must be preserved
assert_grep "transform still present" "transform" "jest.config.mjs"
assert_grep "testMatch still present" "testMatch" "jest.config.mjs"
assert_grep "roots still present" "roots" "jest.config.mjs"

report_results
