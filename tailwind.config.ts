import type { Config } from 'tailwindcss'

// Font size clamp generator: https://clamp.font-size.app/
// Min viewport: 500px; Max viewport: 2500px

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
        'primary-light': '#11367E',
        'primary-dark': '#DBE1FF',
        'secondary-light': '#3A5DA1',
        'secondary-dark': '#B3C5FF',
        'surface-low-light': '#B0C6F0',
        'surface-low-dark': '#001849',
        'surface-high-light': '#91B0EB',
        'surface-high-dark': '#002B75',
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
        'body': ['clamp(1.125rem, 1.0313rem + 0.3vw, 1.5rem)', {
          lineHeight: '1.6em',
        }]
      },
      gridTemplateColumns: {
        'hero-subtitle': '1fr min(65ch, 100%) 1fr'
      },
    },
  },
  plugins: [],
}
export default config
