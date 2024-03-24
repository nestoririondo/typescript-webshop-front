module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
