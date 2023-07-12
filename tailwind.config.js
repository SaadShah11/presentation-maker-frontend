/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "blue-primary": "#2e63ae",
                "purple-primary": "#6f3393",
                "gray-primary": "#333333",
                "orange-primary": "#f36e32",
                "green-primary": "#82c341",
                "indigo-secondary": "#595397",
                "purple-secondary": "#7d00ba",
            },
            fontFamily: {
                primary: "ComingSoon",
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
};
