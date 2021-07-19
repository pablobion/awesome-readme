module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "primary-color": "var(--primary-color)",
                "secondary-color": "var(--secondary-color)",
                "tertiary-color": "var(--tertiary-color)",
                "quaternary-color": "var(--quaternary-color)",
            },
            backgroundImage: (theme) => ({
                "hero-pattern": "url('./assets/background3.jpg')",
            }),
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
    plugins: [],
};
