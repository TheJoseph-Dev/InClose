/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts,txt}'],
  theme: {
    extend: {
      colors: {
        mygreen: {
          400: "#00D1AC",
          500: "#00A368"
        },

        myblue: {
          450: "#075195",
          500: "#00488A",
          600: "#1F4690",
          800: "#003F79"
        },

        myyellow: {
          500: "#FFD725"
        }
      },

      fontFamily: {
        ubuntu: ['Ubuntu']
      },
      
      screens: {
        'xs': '440px',
        'svg-sm': {'raw': '(min-height: 320px)'},
        'svg-md': {'raw': '(min-height: 480px)'}
      },

      animation: {
        'pulsing-wave': 'pulse-wave 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },

    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
