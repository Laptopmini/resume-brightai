#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

assert "src/styles/globals.css exists" test -f "src/styles/globals.css"

# @tailwind directives
assert_grep "has @tailwind base" "@tailwind base" "src/styles/globals.css"
assert_grep "has @tailwind components" "@tailwind components" "src/styles/globals.css"
assert_grep "has @tailwind utilities" "@tailwind utilities" "src/styles/globals.css"

# :root CSS variables
assert_grep "has --midnight variable" "--midnight" "src/styles/globals.css"
assert_grep "has --midnight-deep variable" "--midnight-deep" "src/styles/globals.css"
assert_grep "has --midnight-card variable" "--midnight-card" "src/styles/globals.css"
assert_grep "has --paper variable" "--paper" "src/styles/globals.css"
assert_grep "has --paper-muted variable" "--paper-muted" "src/styles/globals.css"
assert_grep "has --ink variable" "--ink" "src/styles/globals.css"
assert_grep "has --cyan-blue variable" "--cyan-blue" "src/styles/globals.css"
assert_grep "has --vivid-purple variable" "--vivid-purple" "src/styles/globals.css"
assert_grep "has --electric-from variable" "--electric-from" "src/styles/globals.css"
assert_grep "has --electric-to variable" "--electric-to" "src/styles/globals.css"
assert_grep "has --gradient-midnight variable" "--gradient-midnight" "src/styles/globals.css"
assert_grep "has --gradient-accent variable" "--gradient-accent" "src/styles/globals.css"
assert_grep "has --gradient-spectrum variable" "--gradient-spectrum" "src/styles/globals.css"

# Body rule
assert_grep "has body rule with midnight background" "background-color: var(--midnight)" "src/styles/globals.css"
assert_grep "has Inter font in body" "Inter" "src/styles/globals.css"

# HTML rule
assert_grep "has smooth scroll" "scroll-behavior: smooth" "src/styles/globals.css"

report_results
