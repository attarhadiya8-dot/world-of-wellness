import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // The GitHub Pages path is used only for the production build
  base: command === "build" ? "/world-of-wellness/" : "/",
}));