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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#22577a', // Dark Blue
				secondary: '#38a3a5', // Aqua
				accent: '#57cc99', // Soft Green
				light: '#80ed99', // Light Green
				lighter: '#c7f9cc', // Pale Green
				black: '#000000',
				white: '#ffffff',
      },
      fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			fontWeight: {
				light: "300",
				regular: "400",
				medium: "500",
				bold: "700",
			},
    },
  },
  plugins: [],
} satisfies Config;
