import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";

export default defineConfig({
  plugins: [svelte(), screenGraphPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
  },
});
