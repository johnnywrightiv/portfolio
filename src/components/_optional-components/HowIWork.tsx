// NOTE: no longer as cool without old theme styling. not worth updating this to incorporate, but keeping on hand for reference

import { Lightbulb, Code2, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
	{
		icon: <Lightbulb className="h-8 w-8 text-text-primary" />,
		title: 'Strategy & Discovery',
		description:
			'Understanding your business goals and user needs to define the right product strategy and technical approach.',
	},
	{
		icon: <Code2 className="h-8 w-8 text-text-primary" />,
		title: 'Design & Development',
		description:
			'Building scalable, performant solutions with thoughtful design and clean, maintainable code.',
	},
	{
		icon: <Rocket className="h-8 w-8 text-text-primary" />,
		title: 'Launch & Growth',
		description:
			'Ensuring successful launches with ongoing optimization, performance monitoring, and strategic improvements.',
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 50,
		scale: 0.9,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: 'easeOut',
		},
	},
} as const;

export default function HowIWork() {
	return (
		<section
			id="how-i-work"
			className="bg-gradient-how-i-work relative flex min-h-screen w-full items-center py-12"
		>
			{/* Subtle accent gradient overlay */}
			<div className="bg-accent-gradient-1 absolute inset-0" />

			<div
				className="container relative z-10 mx-auto px-4 text-center lg:px-8 xl:px-12 2xl:px-16"
				style={{ maxWidth: '1400px' }}
			>
				<motion.h2
					className="mb-4 font-heading text-4xl font-semibold text-text-primary lg:text-5xl"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					How I Work
				</motion.h2>
				<motion.p
					className="mx-auto mb-16 max-w-2xl text-lg text-text-secondary"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
				>
					From strategy to execution, I help you navigate the complete product
					journey
				</motion.p>
				<motion.div
					className="grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.2 }}
					variants={containerVariants}
				>
					{steps.map((step) => (
						<motion.div
							key={step.title}
							className="justify-centerlg:hover:scale-105 group relative flex w-full max-w-md"
							variants={cardVariants}
						>
							<div className="flex-1 transition-transform duration-500 ease-in-out lg:group-hover:-translate-y-8">
								<div className="hover:shadow-gradient-primary-hover focus-within:shadow-gradient-primary-hover focus-within:scale-105lg:hover:border-primary/30lg:hover:bg-surface relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-primary/20 bg-surface/80 p-10 transition-all duration-500 ease-in-out">
									{/* Light overlay onlg:hover */}
									<div className="absolute inset-0 bg-accent/5 opacity-0 transition-opacity duration-500 ease-in-out lg:group-hover:opacity-100" />
									{/* Top gradient bar onlg:hover */}
									<div className="bg-gradient-primary pointer-events-none absolute left-0 top-0 h-2 w-full scale-x-0 rounded-t-2xl opacity-0 transition-all duration-500 ease-in-out lg:group-hover:scale-x-100 lg:group-hover:opacity-100" />
									<div className="bg-gradient-primary-to-br mb-6 flex h-16 w-16 items-center justify-center rounded-xl shadow-md">
										{step.icon}
									</div>
									<h3 className="mb-4 font-heading text-2xl font-semibold text-text-primary">
										{step.title}
									</h3>
									<p className="text-base text-text-secondary">
										{step.description}
									</p>
								</div>
								{/* Bottom gradient bar onlg:hover (now sibling, not child, and inset) */}
								<div className="bg-gradient-primary inset- pointer-events-none absolute left-3.5 right-3 z-10 h-px scale-x-0 rounded-b-2xl opacity-0 transition-all duration-500 ease-in-out lg:group-hover:scale-x-100 lg:group-hover:opacity-100" />
								{/* Bottom-left SVG arc overlay */}
								<div
									className="absolute bottom-0 left-[2px] z-20 h-[20px] w-[16px] overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out group-focus-within:opacity-100 lg:group-hover:opacity-100 lg:group-hover:delay-300"
									style={{ bottom: '-5px', left: '2px' }}
								>
									<svg
										className="h-full w-full"
										viewBox="0 0 20 20"
										fill="none"
										style={{
											transform: 'rotate(-90deg)',
											transformOrigin: '7px 9px',
										}}
										aria-hidden="true"
									>
										<path
											d="M1,18 A26,20 0 0,1 14,0"
											stroke="hsl(var(--primary))"
											strokeWidth="1.5"
											fill="none"
											strokeLinecap="round"
										/>
									</svg>
								</div>
								{/* Bottom-right SVG arc overlay */}
								<div
									className="absolute bottom-0 right-[-2px] z-20 h-[20px] w-[16px] overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out group-focus-within:opacity-100 lg:group-hover:opacity-100 lg:group-hover:delay-300"
									style={{ bottom: '-5px', right: '-2px' }}
								>
									<svg
										className="h-full w-full"
										viewBox="0 0 20 20"
										fill="none"
										style={{
											transform: 'rotate(-180deg)',
											transformOrigin: '7px 9px',
										}}
										aria-hidden="true"
									>
										<path
											d="M1,16 A18,20 0 0,1 20,1"
											stroke="hsl(var(--secondary))"
											strokeWidth="1.5"
											fill="none"
											strokeLinecap="round"
										/>
									</svg>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
