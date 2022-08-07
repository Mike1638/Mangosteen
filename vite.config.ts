import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/Mangosteen/dist/",  // 部署到github使用
  plugins: [vue()],
});
