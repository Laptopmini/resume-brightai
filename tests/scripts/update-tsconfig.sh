#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

# tsconfig.json compilerOptions checks
assert_grep "has jsx react-jsx" "\"jsx\": \"react-jsx\"" "tsconfig.json"
assert_grep "has DOM lib" "\"DOM\"" "tsconfig.json"
assert_grep "has DOM.Iterable lib" "\"DOM.Iterable\"" "tsconfig.json"
assert_grep "has ES2022 lib" "\"ES2022\"" "tsconfig.json"
assert_grep "has Bundler moduleResolution" "\"moduleResolution\": \"Bundler\"" "tsconfig.json"
assert_grep "has ESNext module" "\"module\": \"ESNext\"" "tsconfig.json"
assert_grep "has allowSyntheticDefaultImports" "\"allowSyntheticDefaultImports\": true" "tsconfig.json"
assert_grep "has resolveJsonModule" "\"resolveJsonModule\": true" "tsconfig.json"
assert_grep "has isolatedModules" "\"isolatedModules\": true" "tsconfig.json"
assert_grep "has noEmit true" "\"noEmit\": true" "tsconfig.json"
assert_grep "has baseUrl" "\"baseUrl\": \".\"" "tsconfig.json"
assert_grep "has jest type" "\"jest\"" "tsconfig.json"
assert_grep "has @testing-library/jest-dom type" "@testing-library/jest-dom" "tsconfig.json"

# Paths alias
assert_grep "has paths alias" "\"@/*\": [\"src/*\"]" "tsconfig.json"

# References
assert_grep "has tsconfig.node.json reference" "tsconfig.node.json" "tsconfig.json"

# Include covers types declarations
assert_grep "includes types d.ts" "types/**/*.d.ts" "tsconfig.json"

report_results
