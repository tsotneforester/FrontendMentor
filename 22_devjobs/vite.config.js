import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
  ],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: "assets/[name].[hash][ext]", // Ensure proper output path
  //     },
  //   },
  // },
});
