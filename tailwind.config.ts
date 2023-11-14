import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        formal: ['"Noto Sans SC"', "sans-serif"],
      },
      backgroundImage: {
        "user-bg": "url(/images/user_bg.jpg)",
        "aboutus-title": "url(/images/aboutus_title.png)",
        "news-bg": "url(/images/map.png)",
        "moblie-nav-bg": "url(/images/moblie_nav_bg.png)",
        "header-bg": "url(/images/header_bg.jpg)",
        "nav-bg": "url(/images/nav_bg.jpg)",
        "main-bg": "url(/images/main_bg.jpg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wrongInput: {
          "25%": { left: "-10px" },
          "40%": { borderColor: "red" },
          "50%": { left: "10px" },
          "60%": { borderColor: "red" },
          "75%": { left: "-10px" },
          "90%": { borderColor: "red" },
          "100%": { left: "0px" },
        },
        glowing: {
          "0%": {
            textShadow:
              "0 0 10px #FFF, 0 0 20px #FFF, 0 0 30px #FF00FF, 0 0 40px #FF00FF, 0 0 50px #FF00FF, 0 0 60px #FF00FF, 0 0 70px #FF00FF",
          },
          "50%": {
            textShadow:
              "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FF00FF, 0 0 20px #FF00FF, 0 0 25px #FF00FF, 0 0 30px #FF00FF, 0 0 35px #FF00FF",
          },
          "100%": {
            textShadow:
              "0 0 10px #FFF, 0 0 20px #FFF, 0 0 30px #FF00FF, 0 0 40px #FF00FF, 0 0 50px #FF00FF, 0 0 60px #FF00FF, 0 0 70px #FF00FF",
          },
        },
      },
      animation: {
        swiper: "swiper 20s ease-in-out infinite alternate", // 2s duration and ease-in-out timing function as an example
        wrongInput: "wrongInput 0.5s ease-in-out 1",
        glowing: "glowing 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
