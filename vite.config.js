import { defineConfig } from 'vite'

export default defineConfig({
    root: "./src",
    server: {
        port: 3001,
    },
    build: {
        outDir: "../dist",
    }
})