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
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
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

