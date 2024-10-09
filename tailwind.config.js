/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      './src/app/**/*.{js,ts,jsx,tsx,html}',
      './src/app/pages/**/*.{js,ts,jsx,tsx,html}',
      './src/app/components/**/*.{js,ts,jsx,tsx,html}',
    ],
  },  
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)', 
      },
    },
  },
  
  plugins: [],
};