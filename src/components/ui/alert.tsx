'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface AlertProps {
	message: string;
	linkText?: string;
	linkHref?: string;
	className?: string;
}

export function Alert({
	message,
	linkText = 'contact me',
	linkHref = '#contact',
	className = '',
}: AlertProps) {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: -10, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				exit={{ opacity: 0, y: -10, scale: 0.95 }}
				transition={{ duration: 0.2 }}
				className={`glass rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/80 ${className}`}
			>
				<div className="flex items-center justify-between gap-2">
					<div className="flex items-center gap-2">
						<div className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
						<span>{message}</span>
						{linkHref && (
							<>
								<span className="text-white/40">•</span>
								<Link
									href={linkHref}
									className="text-primary underline decoration-dotted underline-offset-2 transition-colors hover:text-primary/80"
								>
									{linkText}
								</Link>
							</>
						)}
					</div>
					<button
						onClick={() => setIsVisible(false)}
						className="rounded p-1 text-white/40 transition-colors hover:bg-white/5 hover:text-white/60"
						aria-label="Dismiss alert"
					>
						<X className="h-3 w-3" />
					</button>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}
