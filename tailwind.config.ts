
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Soft grey & blue brand palette
        brand: {
          bg: '#0b0d10',
          surface: '#111418',
          blue: '#4da3ff',
          cyan: '#65c3ff',
          gray: '#aab2bd',
          accent: '#3b82f6'
        }
      }
    },
  },
  plugins: [],
}
export default config
