import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Маршруты, которые вы хотите проксировать
      "/api": {
        target: "https://live.devnimble.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
