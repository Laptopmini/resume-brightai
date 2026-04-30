#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

# vite.config.ts checks
assert "vite.config.ts exists" test -f "vite.config.ts"
assert_grep "imports defineConfig from vite" "from \"vite\"" "vite.config.ts"
assert_grep "imports @vitejs/plugin-react" "@vitejs/plugin-react" "vite.config.ts"
assert_grep "has react plugin" "react()" "vite.config.ts"
assert_grep "has base path" "/resume-brightai/" "vite.config.ts"
assert_grep "has outDir dist" "\"dist\"" "vite.config.ts"

# tsconfig.node.json checks
assert "tsconfig.node.json exists" test -f "tsconfig.node.json"
assert_grep "has composite true" "\"composite\": true" "tsconfig.node.json"
assert_grep "has noEmit true" "\"noEmit\": true" "tsconfig.node.json"
assert_grep "has ESNext module" "\"ESNext\"" "tsconfig.node.json"
assert_grep "has bundler moduleResolution" "\"bundler\"" "tsconfig.node.json"
assert_grep "has allowSyntheticDefaultImports" "\"allowSyntheticDefaultImports\": true" "tsconfig.node.json"
assert_grep "has skipLibCheck" "\"skipLibCheck\": true" "tsconfig.node.json"
assert_grep "includes vite.config.ts" "vite.config.ts" "tsconfig.node.json"

report_results
