#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

# tailwind.config.ts
assert "tailwind.config.ts exists" test -f tailwind.config.ts

assert_grep "content index.html" "./index.html" "tailwind.config.ts"
assert_grep "content src ts tsx" "./src/**/*.{ts,tsx}" "tailwind.config.ts"

# Colors
assert_grep "color midnight" '"midnight": "#0a0e2c"' "tailwind.config.ts"
assert_grep "color midnight-deep" '"midnight-deep": "#050720"' "tailwind.config.ts"
assert_grep "color midnight-card" '"midnight-card": "#11154a"' "tailwind.config.ts"
assert_grep "color paper" '"paper": "#f4f5fb"' "tailwind.config.ts"
assert_grep "color paper-muted" '"paper-muted": "#a4abd1"' "tailwind.config.ts"
assert_grep "color ink" '"ink": "#10112d"' "tailwind.config.ts"
assert_grep "color cyan-blue" '"cyan-blue": "#0693e3"' "tailwind.config.ts"

# vivid-purple, electric-from, electric-to must NOT be in colors
local_vivid_in_colors() {
  if [ ! -f tailwind.config.ts ]; then
    return 1
  fi
  if grep -q '"vivid-purple"' tailwind.config.ts 2>/dev/null; then
    return 1
  fi
  return 0
}
if local_vivid_in_colors; then
  _pass "vivid-purple NOT in colors"
else
  _fail "vivid-purple NOT in colors"
fi

# Font family
assert_grep "fontFamily sans Inter" '"Inter"' "tailwind.config.ts"

# Background images
assert_grep "gradient-midnight" "var(--gradient-midnight)" "tailwind.config.ts"
assert_grep "gradient-accent" "var(--gradient-accent)" "tailwind.config.ts"
assert_grep "gradient-spectrum" "var(--gradient-spectrum)" "tailwind.config.ts"

# Max width
assert_grep "maxWidth content" '"content": "1100px"' "tailwind.config.ts"

# postcss.config.js
assert "postcss.config.js exists" test -f postcss.config.js
assert_grep "postcss tailwindcss plugin" "tailwindcss: {}" "postcss.config.js"
assert_grep "postcss autoprefixer plugin" "autoprefixer: {}" "postcss.config.js"

report_results
