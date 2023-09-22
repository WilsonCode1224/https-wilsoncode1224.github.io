import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://wilsoncode1224.github.io/WilsonCode1224-github.io-swiftEdge/",
  plugins: [react()],
  // predeploy: "npm run build",
  // deploy: "gh-pages -d dist",
});
