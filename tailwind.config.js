import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", flowbite.content(), "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        symbioteWave: 'symbioteWave 2s infinite',
      },
      keyframes: {
        symbioteWave: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [flowbite.plugin()],
};

