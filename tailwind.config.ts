import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-light': '#263C74',
        'primary-dark': '#9DB5F1',
        'secondary-light': '#4D67A8',
        'secondary-dark': '#C0CBE5',
        'surface-low-light': '#ECF2FE',
        'surface-low-dark': '#0F172A',
        'surface-high-light': '#D5E0FB',
        'surface-high-dark': '#16213A',
      },
      fontFamily: {
        'body': 'var(--font-body)',
        'display': 'var(--font-display)',
      },
      fontSize: {
        'display-lg': ['clamp(2.625rem, 0.5313rem + 6.7vw, 11rem)', {
          lineHeight: '1.05em',
          letterSpacing: '-0.03ch',
          fontWeight: '700',
        }],
        'display-md': ['clamp(1.875rem, 1.375rem + 1.6vw, 3.875rem)', {
          lineHeight: '1.2em',
          letterSpacing: '-0.012ch',
          fontWeight: '700',
        }],
        'display-sm': ['clamp(1.375rem, 1.1563rem + 0.7vw, 2.25rem)', {
          lineHeight: '1.3em',
          fontWeight: '700',
        }],
        'body': ['clamp(1rem, 0.9063rem + 0.3vw, 1.375rem)', {
          lineHeight: '1.6em',
        }]
      },
    },
  },
  plugins: [],
}
export default config
