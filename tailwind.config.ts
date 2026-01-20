import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/shared/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '360px',
  		md: '600px',
  		lg: '1280px'
  	},
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-open-sans)',
  				'system-ui',
  				'sans-serif'
  			],
  			heading: [
  				'var(--font-montserrat)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		colors: {
  			brand: {
  				primary: {
  					DEFAULT: '#007BFF',
  					foreground: '#FFFFFF'
  				},
  				success: {
  					DEFAULT: '#28A745',
  					foreground: '#FFFFFF'
  				},
  				danger: {
  					DEFAULT: '#DC3545',
  					foreground: '#FFFFFF'
  				}
  			},
  			secondary: {
  				light: '#F1F1F1',
  				dark: '#333333',
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			neutral: {
  				'0': '#000000',
  				'50': '#FFFFFF',
  				'100': '#F8F9FA',
  				'200': '#E9ECEF',
  				'300': '#DEE2E6',
  				'400': '#CED4DA',
  				'500': '#ADB5BD',
  				'600': '#6C757D',
  				'700': '#495057',
  				'800': '#343A40',
  				'900': '#212529'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			card: '12px',
  			buttonLg: '12px',
  			buttonMd: '10px',
  			buttonSm: '8px',
  			input: '8px',
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			level1: '0px 2px 8px rgba(0,0,0,0.06)',
  			level2: '0px 4px 12px rgba(0,0,0,0.08)',
  			level3: '0px 6px 20px rgba(0,0,0,0.12)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
