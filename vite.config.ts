import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/resume-brightai/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
