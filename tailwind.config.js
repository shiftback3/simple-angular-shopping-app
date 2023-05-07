/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      display: ["group-hover"],
    },
    borderRadius: {
      'full': '50px',
    }
  },
  plugins: [],
}

