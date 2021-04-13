import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";
import { resolve } from "path";

const production = process.env.NODE_ENV === "production";

export default defineConfig({
  server: {
    open: true,
  },
  clearScreen: false,
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
    alias: {
      $public: resolve(__dirname, "./public"),
      $components: resolve(__dirname, "./src/components"),
      $lib: resolve(__dirname, "./src/lib"),
      $actions: resolve(__dirname, "./src/actions"),
      $helpers: resolve(__dirname, "./src/helpers"),
      $data: resolve(__dirname, "./src/data"),
      $: resolve(__dirname, "./src"),
    },
  },
});
