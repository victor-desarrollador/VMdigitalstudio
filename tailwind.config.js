/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    dark: '#1E1E1E',
                    DEFAULT: '#1E1E1E',
                },
                accent: {
                    red: '#B11226',
                    'red-hover': '#8F0E1E',
                },
                success: {
                    green: '#10B981',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
