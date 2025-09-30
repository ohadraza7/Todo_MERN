import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ must match vercel.json
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
