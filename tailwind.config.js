/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'Secondary': 'rgb(255,214,247)',
        'primary': 'rgb(245,104,179)',
        'darkest': 'rgb(250,25,197)',
        // 'Secondary': 'rgb(153 246 228)',//200
        // 'primary': 'rgb(20 184 166)',//500
        // 'darkest': 'rgb(17 94 89)',//800
        // 'Secondary': 'rgb(251 207 232)',//200
        // 'primary': 'rgb(236 72 153)',//500
        // 'darkest': 'rgb(157 23 77)',//800
        // 'Secondary': 'rgb(221 214 254)',//200
        // 'primary': 'rgb(139 92 246)',//500
        // 'darkest': 'rgb(91 33 182)',//800
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
