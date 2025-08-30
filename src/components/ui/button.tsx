import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors transform transition-transform duration-300 hover:scale-105 focus:scale-105 hover:shadow-xl focus:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default:
					'bg-gradient-primary text-primary-foreground hover:bg-accent/10',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-accent/10',
				outline:
					'border border-primary bg-background hover:bg-accent/10 hover:text-accent-foreground',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-accent/10',
				ghost: 'hover:bg-accent/10 hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				social: 'bg-background text-white hover:bg-accent/10 hover:text-accent',
			},
			size: {
				default: 'h-12 px-6 py-3 text-lg',
				sm: 'h-10 rounded-md px-4 text-base',
				lg: 'h-14 rounded-xl px-10 py-5 text-xl',
				icon: 'h-14 w-14 text-2xl',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'button';
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	}
);
Button.displayName = 'Button';

export { Button, buttonVariants };
