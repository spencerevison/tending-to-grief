/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,svelte,html,css}'],
	theme: {
		fontFamily: {
			sans: ['"DM Sans"', 'sans-serif'],
			serif: ['Lora', 'serif'],
			title: ['"Alex Brush"', 'cursive']
		},
		extend: {
			colors: {
				chocolate: {
					50: '#F4ECE7',
					100: '#EADCD2',
					200: '#D5B9A5',
					300: '#BF9678',
					400: '#A6734E',
					500: '#795439',
					600: '#61432E',
					700: '#493222',
					800: '#312217',
					900: '#18110B',
					950: '#0A0705'
				},
				pumpkin: {
					50: '#FEFAF6',
					100: '#FDF4EC',
					200: '#FCE9D9',
					300: '#FADFC6',
					400: '#F9D4B4',
					500: '#F7C79E',
					600: '#F19E55',
					700: '#E27313',
					800: '#974D0C',
					900: '#4B2606',
					950: '#261303'
				},
				rose: {
					50: '#FDF5F2',
					100: '#FAECE5',
					200: '#F6DBD0',
					300: '#F1C8B6',
					400: '#EDB8A1',
					500: '#E8A487',
					600: '#DD774B',
					700: '#B85023',
					800: '#7C3618',
					900: '#3C1A0B',
					950: '#1E0D06'
				}
			}
		}
	},
	plugins: []
};
