/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        milk: "#F4F5F7",
        "gray-dark": "#101828",
        gray: "#667085",
        "hover-gray": "#D0D5DD",
        "gray-light": "#EAECF0",
        "purple-btn": "#6938EF",
        "purple-text": "#5925DC",
        "trans-dark": "#3d3d4c",
      },
      backgroundImage: {
        camera: "url('../')",
        "camera-pattern": "url('./static/camera.svg')",
      },
    },
  },
  plugins: [],
};
