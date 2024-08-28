import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://github.com/prerna-gurung/Keeper-notes-app', 
  plugins: [react()],
})
