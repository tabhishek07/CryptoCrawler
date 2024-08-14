/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'custom-black': '#3f418c',  // Add a custom name for your color
        'custom-white' : '#ffffff',
        'custom-purple' : '#f9eded',
        'custom-pastel' : '#f9eded',
        'custom-pure-black': '#000000',
        'custom-charcoal':'#1f2937',
        'custom-blue':'#111827',
      },
    },
  },
  plugins: [],
}

