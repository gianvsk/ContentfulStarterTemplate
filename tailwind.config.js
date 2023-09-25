/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        'light-blue-custom': 'blue',
        'yellow-custom': '#FFDA00',
        'blue-custom': '#0033A3'
      },
      fontFamily: {
        'urbanist': 'Urbanist'
      },
      width: {
        '864px': '864px',
        '97vw': '97vw'
      },
      height: {
        '560px': '560px'
      },
      maxWidth: {
        '864px': '864px',
        '1440px': '1440px'
      }
    }
  },
  plugins: [],


}

