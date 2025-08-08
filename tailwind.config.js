/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,svelte}"],
  theme: {
    extend: {
      colors: {
        "ward-black-20": "var(--ward-black-20)",
        "ward-black": "var(--ward-black)",
        "ward-black-50": "var(--ward-black-50)",
        "ward-blue": "var(--ward-blue)",
        "ward-blue-50": "var(--ward-blue-50)",
        "ward-pink": "var(--ward-pink)",
        "ward-pink-30": "var(--ward-pink-30)",
        "ward-red": "var(--ward-red)",
        "ward-red-20": "var(--ward-red-20)",
        "ward-white": "var(--ward-white)",
        "ward-white-60": "var(--ward-white-60)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
