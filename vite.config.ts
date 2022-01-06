import graphql from "@rollup/plugin-graphql";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    graphql(),
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
  server: {
    port: 4000,
  },
});
