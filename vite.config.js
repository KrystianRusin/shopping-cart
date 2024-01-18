import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/shopping-cart/",
  build: {
    rollupOptions: {
      external: ["react-responsive-carousel"],
    },
  },
});
