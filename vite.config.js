import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
const production = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      preprocess: [
        mdsvex({
          extensions: ["md", "svx"],
        }),
      ],
      hot: !production,
      emitCss: true,
    }),
  ],
  build: {
    polyfillDynamicImport: false,
    cssCodeSplit: false,
    // target: ["chrome61", "edge18", "es2019", "firefox60", "safari11"],
  },
  optimizeDeps: {
    exclude: ["@roxi/routify"],
  },
  resolve: {
    dedupe: ["@roxi/routify"],
  },
});
