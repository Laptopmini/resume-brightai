#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

# tailwind.config.ts checks
assert "tailwind.config.ts exists" test -f "tailwind.config.ts"

assert_grep "has content with index.html" "./index.html" "tailwind.config.ts"
assert_grep "has content with src ts/tsx" "./src/**/*.{ts,tsx}" "tailwind.config.ts"

# Theme colors
assert_grep "has midnight color" "midnight" "tailwind.config.ts"
assert_grep "has midnight-deep color" "midnight-deep" "tailwind.config.ts"
assert_grep "has midnight-card color" "midnight-card" "tailwind.config.ts"
assert_grep "has paper color" "paper" "tailwind.config.ts"
assert_grep "has paper-muted color" "paper-muted" "tailwind.config.ts"
assert_grep "has ink color" "ink" "tailwind.config.ts"
assert_grep "has cyan-blue color" "cyan-blue" "tailwind.config.ts"

# Theme fontFamily
assert_grep "has sans font Inter" "Inter" "tailwind.config.ts"

# Theme backgroundImage gradients
assert_grep "has gradient-midnight" "gradient-midnight" "tailwind.config.ts"
assert_grep "has gradient-accent" "gradient-accent" "tailwind.config.ts"
assert_grep "has gradient-spectrum" "gradient-spectrum" "tailwind.config.ts"

# Theme maxWidth
assert_grep "has maxWidth content" "1100px" "tailwind.config.ts"

# postcss.config.js checks
assert "postcss.config.js exists" test -f "postcss.config.js"
assert_grep "has tailwindcss plugin" "tailwindcss" "postcss.config.js"
assert_grep "has autoprefixer plugin" "autoprefixer" "postcss.config.js"

report_results
