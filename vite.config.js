import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/S2CitiesEc/', // Asegúrate de que esto sea correcto
  assetsInclude: ['**/*.JPG'],
});
