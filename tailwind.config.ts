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
        primary: '#9c0500',
        'primary-light': '#c41e19',
        'primary-dark': '#7a0400',
        secondary: '#1f2937',
        accent: '#f59e0b',
      },
    },
  },
  plugins: [],
}
export default config
