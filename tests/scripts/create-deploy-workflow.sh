#!/usr/bin/env bash
set -euo pipefail

source "$(cd "$(dirname "$0")" && pwd)/../helpers/assert.sh"

WORKFLOW=".github/workflows/deploy.yml"

# --- File existence ---
assert "deploy.yml exists" test -f "$WORKFLOW"

# --- Top-level metadata ---
assert_grep "has name" "name: Deploy to GitHub Pages" "$WORKFLOW"

# --- Triggers ---
assert_grep "has push trigger" "push:" "$WORKFLOW"
assert_grep "push targets main" "branches: [main]" "$WORKFLOW"
assert_grep "has workflow_dispatch trigger" "workflow_dispatch:" "$WORKFLOW"

# --- Permissions ---
assert_grep "has permissions block" "permissions:" "$WORKFLOW"
assert_grep "has contents: read" "contents: read" "$WORKFLOW"
assert_grep "has pages: write" "pages: write" "$WORKFLOW"
assert_grep "has id-token: write" "id-token: write" "$WORKFLOW"

# --- Concurrency ---
assert_grep "has concurrency block" "concurrency:" "$WORKFLOW"
assert_grep "has group: pages" "group: pages" "$WORKFLOW"
assert_grep "cancel-in-progress false" "cancel-in-progress: false" "$WORKFLOW"

# --- Build job ---
assert_grep "has build job" "build:" "$WORKFLOW"
assert_grep "build on ubuntu-latest" "runs-on: ubuntu-latest" "$WORKFLOW"

# Build steps
assert_grep "checkout step" "actions/checkout@v4" "$WORKFLOW"
assert_grep "setup-node step" "actions/setup-node@v4" "$WORKFLOW"
assert_grep "node-version 24" "node-version:" "$WORKFLOW"
assert_grep_regex "node-version is '24'" "node-version: ['\"]24['\"]" "$WORKFLOW"
assert_grep "npm cache" "cache: 'npm'" "$WORKFLOW"
assert_grep "npm ci" "npm ci" "$WORKFLOW"
assert_grep "npm run build" "npm run build" "$WORKFLOW"
assert_grep "configure-pages step" "actions/configure-pages@v5" "$WORKFLOW"
assert_grep "upload-pages-artifact step" "actions/upload-pages-artifact@v3" "$WORKFLOW"
assert_grep "artifact path ./dist" "path: ./dist" "$WORKFLOW"

# --- Deploy job ---
assert_grep "has deploy job" "deploy:" "$WORKFLOW"
assert_grep "deploy needs build" "needs: build" "$WORKFLOW"
assert_grep "deploy on ubuntu-latest" "runs-on: ubuntu-latest" "$WORKFLOW"
assert_grep "deploy environment" "environment:" "$WORKFLOW"
assert_grep "environment name github-pages" "name: github-pages" "$WORKFLOW"
assert_grep "environment url" "steps.deployment.outputs.page_url" "$WORKFLOW"
assert_grep "deploy-pages step" "actions/deploy-pages@v4" "$WORKFLOW"
assert_grep "deployment id" "id: deployment" "$WORKFLOW"

# --- Guard: no files under .github/scripts/ or .github/prompts/ were modified ---
# Check git diff against HEAD to ensure protected directories are untouched
protected_dirs_clean() {
  local changed
  changed=$(git diff --name-only HEAD -- .github/scripts/ .github/prompts/ 2>/dev/null || true)
  if [ -z "$changed" ]; then
    return 0
  fi
  return 1
}
assert "no changes to .github/scripts/ or .github/prompts/" protected_dirs_clean

report_results
