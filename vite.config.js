import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Root alias
      "@": path.resolve(__dirname, "src"),
      // Public alias
      "@public": path.resolve(__dirname, "public"),
    },
  },
});
