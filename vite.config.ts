import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        services: path.resolve(__dirname, 'services.html'),
        about: path.resolve(__dirname, 'about.html'),
        clients: path.resolve(__dirname, 'clients.html'),
        blog: path.resolve(__dirname, 'blog.html'),
        portfolio: path.resolve(__dirname, 'portfolio.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        react: path.resolve(__dirname, 'react-index.html'),
      },
    },
  },
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
