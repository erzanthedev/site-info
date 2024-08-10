import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://erzanthedev.github.io/site-info/",
  plugins: [react()],
});
