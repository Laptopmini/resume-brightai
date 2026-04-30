#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

# vite.config.ts must exist
assert "vite.config.ts exists" test -f vite.config.ts

# Content assertions for vite.config.ts
assert_grep "imports defineConfig from vite" 'import { defineConfig } from "vite"' "vite.config.ts"
assert_grep "imports react from @vitejs/plugin-react" 'import react from "@vitejs/plugin-react"' "vite.config.ts"
assert_grep "exports default defineConfig" "export default defineConfig" "vite.config.ts"
assert_grep "has react plugin" "plugins: [react()]" "vite.config.ts"
assert_grep "has base path" 'base: "/resume-brightai/"' "vite.config.ts"
assert_grep "has outDir dist" 'outDir: "dist"' "vite.config.ts"
assert_grep "has emptyOutDir true" "emptyOutDir: true" "vite.config.ts"

# tsconfig.node.json must exist
assert "tsconfig.node.json exists" test -f tsconfig.node.json

# Content assertions for tsconfig.node.json
assert_grep "composite true" '"composite": true' "tsconfig.node.json"
assert_grep "module ESNext" '"module": "ESNext"' "tsconfig.node.json"
assert_grep "moduleResolution bundler" '"moduleResolution": "bundler"' "tsconfig.node.json"
assert_grep "allowSyntheticDefaultImports" '"allowSyntheticDefaultImports": true' "tsconfig.node.json"
assert_grep "skipLibCheck" '"skipLibCheck": true' "tsconfig.node.json"
assert_grep "includes vite.config.ts" '"vite.config.ts"' "tsconfig.node.json"

# Verify noEmit is NOT present (TS6310 conflict with composite)
assert_not_grep() {
  local desc="$1" pattern="$2" file="$3"
  if [ ! -f "$file" ]; then
    _fail "$desc (file not found: $file)"
    return 0
  fi
  if grep -qF -- "$pattern" "$file" 2>/dev/null; then
    _fail "$desc"
  else
    _pass "$desc"
  fi
}
assert_not_grep "does NOT set noEmit" '"noEmit"' "tsconfig.node.json"

report_results
