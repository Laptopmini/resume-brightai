#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

FILE="index.html"

# doctype
assert_grep "has doctype html" "<!DOCTYPE html>" "$FILE"

# html lang attribute
assert_grep "has html lang=en" '<html lang="en">' "$FILE"

# meta charset
assert_grep "has meta charset" '<meta charset="UTF-8" />' "$FILE"

# meta viewport
assert_grep "has meta viewport" '<meta name="viewport" content="width=device-width, initial-scale=1.0" />' "$FILE"

# meta description
assert_grep "has meta description" '<meta name="description" content="Paul-Valentin Mini — Senior Software Developer focused on Applied AI." />' "$FILE"

# title
assert_grep "has page title" "<title>Paul-Valentin Mini — Senior Software Developer</title>" "$FILE"

# Google Fonts preconnect (fonts.googleapis.com)
assert_grep "has Google Fonts preconnect to fonts.googleapis.com" "https://fonts.googleapis.com" "$FILE"

# Google Fonts preconnect (fonts.gstatic.com)
assert_grep "has Google Fonts preconnect to fonts.gstatic.com" "https://fonts.gstatic.com" "$FILE"

# Google Fonts stylesheet link
assert_grep "has Google Fonts stylesheet for Inter" "css2?family=Inter:wght@300;500;700;800" "$FILE"

# favicon link
assert_grep "has favicon link to profile.png" "profile.png" "$FILE"

# root div
assert_grep "has root div" '<div id="root"></div>' "$FILE"

# module script entry
assert_grep "has module script for main.tsx" 'src="/src/main.tsx"' "$FILE"

# closing body and html
assert_grep "has closing head tag" "</head>" "$FILE"
assert_grep "has closing body tag" "</body>" "$FILE"
assert_grep "has closing html tag" "</html>" "$FILE"

report_results
