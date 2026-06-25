/** @type {import('tailwindcss').Config} */
// ---------------------------------------------------------------------------
// ICAACON Indore 2026 — Tailwind theme
// Palette is derived directly from the Save-the-Date poster:
//   • teal  — the ICAAICON wordmark + section accents
//   • maroon — the "60th" and "INDORE 2026" crimson
//   • gold  — flourishes / dividers
//   • ivory — poster paper background
//   • ink   — temple line-art + body copy
// ---------------------------------------------------------------------------
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0F6B6B',
          deep: '#0B5050',
          soft: '#1A8A8A',
          tint: '#E6F0EF',
        },
        maroon: {
          DEFAULT: '#A41E34',
          deep: '#7E1626',
          soft: '#C4344A',
        },
        gold: {
          DEFAULT: '#C2A14D',
          deep: '#A6863A',
          soft: '#DCC487',
        },
        ivory: {
          DEFAULT: '#F7F4ED',
          deep: '#EFEADD',
        },
        ink: {
          DEFAULT: '#1E2A3A',
          soft: '#3C4658',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        // Trajan-style caps for the wordmark / logo lockups
        wordmark: ['Cinzel', 'serif'],
        // Characterful display serif for headings
        display: ['Fraunces', 'Georgia', 'serif'],
        // Clean sans for body + UI
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(30, 42, 58, 0.18)',
        lift: '0 24px 60px -20px rgba(15, 107, 107, 0.35)',
      },
      backgroundImage: {
        'ivory-grain':
          'radial-gradient(circle at 1px 1px, rgba(30,42,58,0.05) 1px, transparent 0)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'draw-line': 'draw-line 3s ease-out forwards',
      },
    },
  },
  plugins: [],
}
