import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  base: '',
});
//npm create vite@latest
//npm i styled-components
//npm i vite-plugin-svgr
//npm i react-router-dom

//npm i react-icons
//npx json-server db.json
//npm i leaflet react-leaflet
//npm i react-hook-form

//npx depcheck
//npm prune
