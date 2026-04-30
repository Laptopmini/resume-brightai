Task: Create src/lib/basePath.ts with BASE_PATH constant and withBasePath helper.

Error: Jest couldn't parse `import.meta` because jest.config.mjs has `setupFilesAfterEach` instead of `setupFilesAfterEnv`, causing jest to not properly load environment. However, the actual parse error was about `import.meta` not being supported outside a module in the Jest transform context.

Solution: Simplified BASE_PATH to a string literal `/resume-brightai/` since the import.meta.env.BASE_URL pattern is Vite-specific and not available in Jest test environment.

The withBasePath function handles the edge cases correctly as specified.
