import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// For GitHub Pages: use "/" if repo is username.github.io, or "/repo-name/" for project pages
// Since your repo is "achinvarshney.github.io" under username "achinrocker", use the repo name as base
const base = process.env.GITHUB_PAGES_BASE ?? "/achinvarshney.github.io/";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // Copy index.html to 404.html so GitHub Pages serves the SPA for all routes (client-side routing)
    {
      name: "copy-404",
      closeBundle() {
        const outDir = "dist";
        const index = path.join(outDir, "index.html");
        const notFound = path.join(outDir, "404.html");
        if (fs.existsSync(index)) {
          fs.copyFileSync(index, notFound);
        }
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
