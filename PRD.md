# PRD: GitHub Pages Deploy Workflow

## Tasks

- [ ] Create `.github/workflows/deploy.yml` with `name: Deploy to GitHub Pages`, triggers `on: { push: { branches: [main] }, workflow_dispatch: {} }`, top-level `permissions: { contents: read, pages: write, id-token: write }`, `concurrency: { group: pages, cancel-in-progress: false }`. Define one `build` job on `ubuntu-latest` with steps: `actions/checkout@v4`; `actions/setup-node@v4` with `node-version: '24'` and `cache: 'npm'`; `npm ci`; `npm run build`; `actions/configure-pages@v5`; `actions/upload-pages-artifact@v3` with `path: ./dist`. Define a second `deploy` job that `needs: build`, runs on `ubuntu-latest`, has `environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }`, and a single step `actions/deploy-pages@v4` with `id: deployment`. Do NOT modify any file under `.github/scripts/` or `.github/prompts/`. `[test: bash tests/scripts/create-deploy-workflow.sh]`
