#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

assert "jest.config.mjs exists" test -f "jest.config.mjs"

# testEnvironment: "jsdom"
assert_grep "has jsdom testEnvironment" "jsdom" "jest.config.mjs"

# moduleNameMapper with CSS proxy
assert_grep "maps CSS to identity-obj-proxy" "identity-obj-proxy" "jest.config.mjs"

# moduleNameMapper with @/ alias
assert_grep "maps @/ to src/" "\"^@/(.*)\$\"" "jest.config.mjs"

# setupFilesAfterEach with @testing-library/jest-dom
assert_grep "has @testing-library/jest-dom setup" "@testing-library/jest-dom" "jest.config.mjs"

# Preserve existing transform
assert_grep "has swc transform" "@swc/jest" "jest.config.mjs"

# Preserve testMatch for unit tests
assert_grep "has testMatch for unit" "tests/unit/**/*.test" "jest.config.mjs"

report_results
