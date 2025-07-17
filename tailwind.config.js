/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
module.exports = {
  content: ['./src/renderer/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [typography]
}
