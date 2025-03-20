import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
    },
    build: {
      outDir: "dist",
      sourcemap: !isProduction, // Only generate sourcemaps in development
      minify: isProduction ? "terser" : false,
      terserOptions: {
        compress: {
          drop_console: isProduction, // Remove console.log in production
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom", "react-router-dom"],
            charts: ["chart.js", "react-chartjs-2"],
          },
        },
      },
    },
  };
});
