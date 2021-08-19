module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 375px) { ... }

      md: "650px",
      // => @media (min-width: 650px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        8: "repeat(auto-fit, minmax(96px, 1fr))",

        // Complex site-specific row configuration
        layout: " repeat(minmax(200px, 1fr)) ",
      },
      gridAutoRows: {
        /* '2fr': 'minmax(96px, 1fr)', */
        "3fr": "minmax(135.2px, 1fr)",
      },
    },
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")],
};
