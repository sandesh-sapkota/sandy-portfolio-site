import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "three-fiber": ["@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
  optimizeDeps: {
    include: ["three", "@react-three/fiber"],
  },
});
