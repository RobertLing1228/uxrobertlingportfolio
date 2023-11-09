module.exports = {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				hanson: ["Hanson"],
				bebasNeue: ["BebasNeue"],
			},
			colors: {
				"brand-blue-1": "#0db7ff",
				"brand-blue-2": "#007bff",
				"brand-purple": "#4e00ff",
				"hq-red": "#F5254A",
				"hq-orange": "#F17027",
				"hq-yellow": "#EACA22",
				"hq-green": "#26D958",
				"hq-light-blue": "#0DB7FF",
				"hq-dark-blue": "#072DF6",
				"hq-purple-blue": "#4E00FF",
				"hq-purple": "#A012F6",
				"hq-pink": "#E020E4",
			},
			animation: {
				"spin-slow": "spin 10s linear infinite",
				"pulse-slow": "pulse 5s linear infinite",
				"ping-slow": "ping 2s linear infinite",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography")
	],
};
