import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkprimary: '#2A254B',
        primary: '#4E4D93',
        lightgrey: '#F9F9F9',
        bordergrey: '#EBE8F4',
        borderdark: '#CAC6DA',
      },
      fontSize:{
        h1: ['36px', { lineHeight: '150%'}],
        h2: ['32px', { lineHeight: '150%'}],
        h3: ['24px', { lineHeight: '150%'}],
        h4: ['20px', { lineHeight: '150%'}],
        h5: ['16px', { lineHeight: '150%'}],
        h6: ['14px', { lineHeight: '150%'}],
        p: ['18px', { lineHeight: '150%'}],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
} satisfies Config;
