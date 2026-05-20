import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
	{
		ignores: [
			'.next/**',
			'node_modules/**',
			'out/**',
			'dist/**',
			'public/**',
			'.claude/**',
			'.cursor/**',
			'.git/**',
			'next-env.d.ts',
		],
	},
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	eslintPluginPrettierRecommended,
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'no-unused-vars': 'warn',
			'prefer-const': 'error',
		},
	},
];

export default eslintConfig;
