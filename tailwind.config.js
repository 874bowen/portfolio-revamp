/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
	extend: {
		pallete: {
			dark: {
				blue: "#1E213A",
				"light-blue": "#100E1D",
				gray: "#6E707A",
				white: "#E7E7EB",
			},
			light: {
				blue: "#E7E7EB",
				"light-blue": "#F4F5F7",
				gray: "#A09FB1",
				white: "#6E707A",
			},
		},
	},
  },
  plugins: [],
}