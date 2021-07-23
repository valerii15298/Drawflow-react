import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteFonts({
      google: {
        families: ["Roboto"],
      },
    }),
    reactRefresh(),
  ],
  esbuild: {
    jsxInject: "import React from 'react'",
  },
});
