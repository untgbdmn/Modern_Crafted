/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		colors: {
                'light-first': 'var(--light-first)',
                'light-second': 'var(--light-second)',
                'light-third': 'var(--light-third)',
                'light-fourth': 'var(--light-fourth)',
                'light-fifth': 'var(--light-fifth)',
                'light-sixth': 'var(--light-sixth)',

                'dark-first': 'var(--dark-first)',
                'dark-second': 'var(--dark-second)',
                'dark-third': 'var(--dark-third)',
                'dark-fourth': 'var(--dark-fourth)',
                'dark-fifth': 'var(--dark-fifth)',
                'dark-sixth': 'var(--dark-sixth)',
              }
    	}
    },
    plugins: [require("tailwindcss-animate")],
  }
