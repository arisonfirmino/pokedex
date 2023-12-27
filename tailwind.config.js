/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      boxShadow: {
        "input-shadow": "-2px 3px 0 #96989b, -4px 5.5px 0 #000606",
        "button-shadow": "-2px 3px 0 #222, -4px 6px 0 #000606",
        "buttonActive-shadow": "inset -4px 4px 0 #222",
      },
    },
  },
  plugins: [],
};
