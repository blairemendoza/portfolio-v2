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
        'primary-light': 'rgb(var(--primary-light) / <alpha-value>)',
        'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',
        'secondary-light': 'rgb(var(--secondary-light) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--secondary-dark) / <alpha-value>)',
        'surface-low-light': 'rgb(var(--surface-low-light) / <alpha-value>)',
        'surface-low-dark': 'rgb(var(--surface-low-dark) / <alpha-value>)',
        'surface-high-light': 'rgb(var(--surface-high-light) / <alpha-value>)',
        'surface-high-dark': 'rgb(var(--surface-high-dark) / <alpha-value>)',
      },
      spacing: {
        'theme-button': 'calc(clamp(0.9375rem, 0.8906rem + 0.15vw, 1.125rem) + 0.125rem)'
      },
      fontFamily: {
        'body': 'var(--font-body)',
        'display': 'var(--font-display)',
      },
      fontSize: {
        'display-lg': ['clamp(2.625rem, 0.5313rem + 6.7vw, 11rem)', {
          lineHeight: '1.05em',
          letterSpacing: '-0.04ch',
          fontWeight: '700',
        }],
        'display-md': ['clamp(1.875rem, 1.375rem + 1.6vw, 3.875rem)', {
          lineHeight: '1.2em',
          letterSpacing: '-0.012ch',
          fontWeight: '700',
        }],
        'display-sm': ['clamp(1.5rem, 1.125rem + 1.2vw, 3rem)', {
          lineHeight: '1.3em',
          fontWeight: '700',
        }],
        base: ['clamp(1rem, 0.8906rem + 0.35vw, 1.4375rem)', {
          lineHeight: '1.6em',
          letterSpacing: '-0.025ch',
        }],
        'link': ['clamp(0.9375rem, 0.8906rem + 0.15vw, 1.125rem)', {
          letterSpacing: '0.04ch',
        }],
        'label': ['clamp(0.8125rem, 0.7656rem + 0.15vw, 1rem)', {
          letterSpacing: '0.2ch',
        }]
      },
      borderRadius: {
        '10xl': '2.5rem',
        '16xl': '4rem',
      },
      gridTemplateColumns: {
        'hero-subtitle': '1fr min(65ch, 100%) 1fr',
        '20': 'repeat(20, minmax(0, 1fr))'
      },
      transitionTimingFunction: {
        'back-out': 'cubic-bezier(.18,.89,.32,1.28)'
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
export default config
