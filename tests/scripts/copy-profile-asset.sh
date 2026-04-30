#!/usr/bin/env bash
set -euo pipefail
source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

assert "public/profile.png exists" test -f "public/profile.png"
assert "public/profile.png is non-empty" test -s "public/profile.png"

report_results
