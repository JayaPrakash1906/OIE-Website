/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
      },
      fontFamily: {
        dmsans: ['"DM Sans"', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"]
    }
  }
}

