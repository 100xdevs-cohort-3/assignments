/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "progressColor":"#049727",
      "primaryColor": "#333333",
      "primaryActiveColor" : "#434343",
      "secondaryColor" : "#262626",
      "black": "#1a1a1a",
      "hoverColor": "#4b4b4b",
      "easyTextColor": "#299493",
      "mediumTextColor" : "#f3af0a",
      "hardTextColor" : "#ce3736",
      "secondaryButtonActiveColor" : "#727272",
      "tirtiaryButtonActiveColor" : "#383838",
    },
    },
  },
  plugins: [
    scrollbar
  ],
}