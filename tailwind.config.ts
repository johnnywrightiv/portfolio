import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const hoverCapabilityVariants = plugin(({ addVariant, e }) => {
	addVariant('hover', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.can-hover .${e(
				`hover${separator}${className}`
			)}:hover`;
		});
	});

	addVariant('group-hover', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.can-hover .group:hover .${e(
				`group-hover${separator}${className}`
			)}`;
		});
	});

	addVariant('peer-hover', ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.can-hover .peer:hover ~ .${e(
				`peer-hover${separator}${className}`
			)}`;
		});
	});
});

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			screens: {
				lg: '901px',
			},
			fontFamily: {
				body: ['var(--font-body)'],
				heading: ['var(--font-heading)'],
			},
			colors: {
				background: 'hsl(var(--background))',
				surface: 'hsl(var(--surface))',
				border: 'hsl(var(--border))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					accent: 'hsl(var(--text-accent))',
				},
				accent: 'hsl(var(--accent))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
				},
				'accent-warm': 'hsl(var(--accent-warm))',
				'accent-cool': 'hsl(var(--accent-cool))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))',
				},
			},
			borderRadius: {
				DEFAULT: 'var(--radius)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0',
					},
					to: {
						height: 'var(--radix-accordion-content-height)',
					},
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)',
					},
					to: {
						height: '0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [hoverCapabilityVariants],
};
export default config;
