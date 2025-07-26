import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // این بخش باعث می‌شه مسیرهای React Router مثل /dashboard کار کنن
    historyApiFallback: true,
  },
});
