const svgToDataUri = require("mini-svg-data-uri");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		colors: {
    			'light-first': 'var(--light-first)',
    			'light-second': 'var(--light-second)',
    			'light-third': 'var(--light-third)',
    			'light-fourth': 'var(--light-fourth)',
    			'light-fifth': 'var(--light-fifth)',
    			'light-sixth': 'var(--light-sixth)',
    			'dark-first': 'var(--dark-first)',
    			'dark-second': 'var(--dark-second)',
    			'dark-third': 'var(--dark-third)',
    			'dark-fourth': 'var(--dark-fourth)',
    			'dark-fifth': 'var(--dark-fifth)',
    			'dark-sixth': 'var(--dark-sixth)'
    		},
    		animation: {
    			spotlight: 'spotlight 2s ease .75s 1 forwards',
    			shine: 'shine var(--duration) infinite linear'
    		},
    		keyframes: {
    			spotlight: {
    				'0%': {
    					opacity: 0,
    					transform: 'translate(-72%, -62%) scale(0.5)'
    				},
    				'100%': {
    					opacity: 1,
    					transform: 'translate(-50%,-40%) scale(1)'
    				}
    			},
    			shine: {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			}
    		}
    	}
    },
    plugins: [require("tailwindcss-animate"),
        addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
        matchUtilities(
            {
                "bg-dot-thick": (value: any) => ({
                    backgroundImage: `url("${svgToDataUri(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="17" height="17" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
                    )}")`,
                }),
            },
            { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
        );
    },
    ],
}

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
