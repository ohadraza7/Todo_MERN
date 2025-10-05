import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // ✅ important for Vercel or any subfolder deploy
  build: {
    outDir: "dist",
  },
});
