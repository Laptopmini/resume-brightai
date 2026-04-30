#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

# Runtime dependencies
assert_json "react in dependencies" "_.dependencies.react" "package.json"
assert_json "react-dom in dependencies" "_.dependencies['react-dom']" "package.json"
assert_json "framer-motion in dependencies" "_.dependencies['framer-motion']" "package.json"

# Dev dependencies
assert_json "vite in devDependencies" "_.devDependencies.vite" "package.json"
assert_json "@vitejs/plugin-react in devDependencies" "_.devDependencies['@vitejs/plugin-react']" "package.json"
assert_json "tailwindcss in devDependencies" "_.devDependencies.tailwindcss" "package.json"
assert_json "postcss in devDependencies" "_.devDependencies.postcss" "package.json"
assert_json "autoprefixer in devDependencies" "_.devDependencies.autoprefixer" "package.json"
assert_json "jest-environment-jsdom in devDependencies" "_.devDependencies['jest-environment-jsdom']" "package.json"
assert_json "@testing-library/react in devDependencies" "_.devDependencies['@testing-library/react']" "package.json"
assert_json "@testing-library/jest-dom in devDependencies" "_.devDependencies['@testing-library/jest-dom']" "package.json"
assert_json "@types/react in devDependencies" "_.devDependencies['@types/react']" "package.json"
assert_json "@types/react-dom in devDependencies" "_.devDependencies['@types/react-dom']" "package.json"
assert_json "identity-obj-proxy in devDependencies" "_.devDependencies['identity-obj-proxy']" "package.json"

# Scripts
assert_json "has dev script" "_.scripts.dev === 'vite'" "package.json"
assert_json "has build script" "_.scripts.build === 'vite build'" "package.json"
assert_json "has preview script" "_.scripts.preview === 'vite preview'" "package.json"
assert_json "check-types script preserved" "_.scripts['check-types'] === 'tsc --noEmit'" "package.json"

report_results
