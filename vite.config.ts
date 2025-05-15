import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteImageOptimizer({
      jpg: {
        quality: 70,
        progressive: true,
      },
    }),
  ],
  base: process.env.BASE_URL || "/",
});
