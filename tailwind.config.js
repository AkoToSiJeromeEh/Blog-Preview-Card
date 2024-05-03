export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        Mobile: "375px",
        Desktop: "1440px",
      },
      
      colors: {
        "primary-yellow": "hsl(47, 88%, 63%)",
        "neutral-gray": "hsl(0, 0%, 50%)",
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-black": "hsl(0, 0%, 7%)",
      },
      fontSize: {
        'paragraph': '16px',
      }
    },
  },
  plugins: [],
};
