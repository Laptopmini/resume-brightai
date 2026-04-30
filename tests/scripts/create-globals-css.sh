#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

assert "src/styles/globals.css exists" test -f src/styles/globals.css

# Tailwind directives
assert_grep "@tailwind base" "@tailwind base" "src/styles/globals.css"
assert_grep "@tailwind components" "@tailwind components" "src/styles/globals.css"
assert_grep "@tailwind utilities" "@tailwind utilities" "src/styles/globals.css"

# CSS variables
assert_grep "var --midnight" "--midnight: #0a0e2c" "src/styles/globals.css"
assert_grep "var --midnight-deep" "--midnight-deep: #050720" "src/styles/globals.css"
assert_grep "var --midnight-card" "--midnight-card: #11154a" "src/styles/globals.css"
assert_grep "var --paper" "--paper: #f4f5fb" "src/styles/globals.css"
assert_grep "var --paper-muted" "--paper-muted: #a4abd1" "src/styles/globals.css"
assert_grep "var --ink" "--ink: #10112d" "src/styles/globals.css"
assert_grep "var --cyan-blue" "--cyan-blue: #0693e3" "src/styles/globals.css"
assert_grep "var --vivid-purple" "--vivid-purple: #9b51e0" "src/styles/globals.css"
assert_grep "var --electric-from" "--electric-from: #2874fc" "src/styles/globals.css"
assert_grep "var --electric-to" "--electric-to: #020381" "src/styles/globals.css"

# Gradient variables
assert_grep "gradient-midnight" "--gradient-midnight: linear-gradient(135deg, #020381 0%, #2874fc 100%)" "src/styles/globals.css"
assert_grep "gradient-accent" "--gradient-accent: linear-gradient(135deg, #0693e3 0%, #9b51e0 100%)" "src/styles/globals.css"
assert_grep "gradient-spectrum" "--gradient-spectrum: linear-gradient(" "src/styles/globals.css"
assert_grep "gradient-spectrum 4aeadc" "#4aeadc 0%" "src/styles/globals.css"
assert_grep "gradient-spectrum 9778d1" "#9778d1 20%" "src/styles/globals.css"
assert_grep "gradient-spectrum cf2aba" "#cf2aba 40%" "src/styles/globals.css"
assert_grep "gradient-spectrum ee2c82" "#ee2c82 60%" "src/styles/globals.css"
assert_grep "gradient-spectrum fb6962" "#fb6962 80%" "src/styles/globals.css"
assert_grep "gradient-spectrum fef84c" "#fef84c 100%" "src/styles/globals.css"

# Body rule
assert_grep "body background-color" "background-color: var(--midnight)" "src/styles/globals.css"
assert_grep "body color" "color: var(--paper)" "src/styles/globals.css"

# HTML rule
assert_grep "html scroll-behavior" "scroll-behavior: smooth" "src/styles/globals.css"

report_results
