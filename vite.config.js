import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The site is served from https://southwardsielts.com/champions-club/
// Asset URLs in the build are absolute, pointing at that location.
export default defineConfig({
  base: "https://southwardsielts.com/champions-club/",
  plugins: [react()],
});
