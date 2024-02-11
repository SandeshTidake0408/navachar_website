/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                t_gray: "#303030 ",
                m_green: "#34C06E ",
                t_white: "#ffffff",
                b_green: "#F0FFF0",
            },
            fontFamily: {
                barlow: ["Barlow"],
                wendy: ["Wendy One", "sans-serif"],
                sans: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
