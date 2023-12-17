
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens:{
				'other' : {'max' : '640px' , 'max' : '1200px'}
			}
		},
		// colors:{
		// 	darkbg : "#1e1b4b"
		// }
	},
	plugins: [],
};
