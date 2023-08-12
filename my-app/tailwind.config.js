/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{ts,tsx}',
        './src//components/**/*.{ts,tsx}',
        './src/app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: '#07889B',
                secondary: '#E37222',
                tertiary: '#66B9BF',
                highlight: '#EEAA7B',
                alert: '#D93B3B',
                success: '#3BD967',
                current: 'currentColor',
                'primary-10': 'rgba(7, 136, 155, 0.1)',
                'primary-20': 'rgba(7, 136, 155, 0.2)',
                'primary-30': 'rgba(7, 136, 155, 0.3)',
                'secondary-10': 'rgba(227, 114, 34, 0.1)',
                'secondary-20': 'rgba(227, 114, 34, 0.2)',
                'secondary-30': 'rgba(227, 114, 34, 0.3)',
                'tertiary-10': 'rgba(102, 185, 191, 0.1)',
                'tertiary-20': 'rgba(102, 185, 191, 0.2)',
                'tertiary-30': 'rgba(102, 185, 191, 0.3)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
};
