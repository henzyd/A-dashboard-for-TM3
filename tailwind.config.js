/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        AppBackgroundColor: "#F7FAFC",
        NavBackgroundColor: "#1E1ADD",
        HomeReportColor_1: "#D8CAFC",
        HomeReportColor_2: "#9E7DF9",
        HomeReportColor_3: "#263238",
        HomeReportColor_4: "#DCDEDF",
        PathColor: "#718096",
        GridTableHeader: "rgba(0, 0, 0, 0.5)",
        GridTableTitle: "rgba(74, 85, 104, 1)",
        ActiveGreen: "#3CC13B",
        ActiveRed: "#F03738",
      },

      boxShadow: {
        GridShadow:
          "0px 10px 15px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.05)",
      },

      gridTemplateColumns: {
        // HomeGrid: "repeat(2, minmax(0, 1fr))",
        HomeGrid: "1fr, 2fr",
        TabletHomeGrid: "1fr",
      },

      screens: {
        SmallPhones: { min: " 220px", max: "380px" },
        // => @media (min-width: 320px) { ... }

        RangeForPhone: { min: "200px", max: "1023px" },
        // => @media (min-width: 200px) and (max-width:1023px) { ... }

        // MediumPhones: "375px",
        // // => @media (min-width: 375px) { ... }

        LargePhones: { min: "425px", max: "767px" },
        // => @media (min-width: 425px) { ... }

        TabletDashBoard: { max: "950px" },
        // Tablet: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px) { ... }

        Laptop: { min: "1024px", max: "1439px" },
        // => @media (min-width: 1024px) { ... }

        LargeLaptop: "1440px",
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
