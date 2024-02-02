/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'infinite-scroll': 'infinite-scroll 30s linear infinite',
            },
            keyframes: {
                'infinite-scroll': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            screens: {
                xs: '320px',
            },
            width: {
                95: '95%',
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans],
                lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('tailwindcss-animated')],
};
