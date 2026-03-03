/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'xiri-navy': '#1B2B44',
                'xiri-gold': '#C5A059',
                'xiri-bg': '#F0F7FA',
            },
            fontFamily: {
                serif: ['Libre Baskerville', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
