#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

assert "tsconfig.json exists" test -f tsconfig.json

assert_grep "jsx react-jsx" '"jsx": "react-jsx"' "tsconfig.json"
assert_grep "lib includes ES2022" '"ES2022"' "tsconfig.json"
assert_grep "lib includes DOM" '"DOM"' "tsconfig.json"
assert_grep "lib includes DOM.Iterable" '"DOM.Iterable"' "tsconfig.json"
assert_grep "moduleResolution Bundler" '"moduleResolution": "Bundler"' "tsconfig.json"
assert_grep "module ESNext" '"module": "ESNext"' "tsconfig.json"
assert_grep "allowSyntheticDefaultImports true" '"allowSyntheticDefaultImports": true' "tsconfig.json"
assert_grep "resolveJsonModule true" '"resolveJsonModule": true' "tsconfig.json"
assert_grep "isolatedModules true" '"isolatedModules": true' "tsconfig.json"
assert_grep "noEmit true" '"noEmit": true' "tsconfig.json"
assert_grep "baseUrl dot" '"baseUrl": "."' "tsconfig.json"

# paths alias
assert_grep "paths @/* alias" '"@/*"' "tsconfig.json"

# types array includes jest, node, @testing-library/jest-dom
assert_grep "types has jest" '"jest"' "tsconfig.json"
assert_grep "types has node" '"node"' "tsconfig.json"
assert_grep "types has testing-library jest-dom" '"@testing-library/jest-dom"' "tsconfig.json"

# include covers ts and tsx
assert_grep "include covers .ts" '"**/*.ts"' "tsconfig.json"
assert_grep "include covers .tsx" '"**/*.tsx"' "tsconfig.json"
assert_grep "include covers types d.ts" '"types/**/*.d.ts"' "tsconfig.json"

# references tsconfig.node.json
assert_grep "references tsconfig.node.json" '"path": "./tsconfig.node.json"' "tsconfig.json"

report_results
