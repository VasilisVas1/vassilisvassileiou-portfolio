import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    host: "0.0.0.0",
    port: Number(process.env.PORT)||5173,
    allowedHosts: ["portfolio-website-7h533.ondigitalocean.app","vasilisvasileiou.com"]   
  }
})
