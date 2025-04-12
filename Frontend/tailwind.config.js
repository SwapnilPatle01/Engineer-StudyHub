/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This ensures Tailwind scans all your components
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], // Include DaisyUI
}


