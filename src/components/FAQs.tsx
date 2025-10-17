'use client';

import { motion } from 'framer-motion';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import faqData from '@/data/faq.json';

export default function FAQSection() {
	return (
		<section id="faq" className="py-section">
			<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
				<motion.div
					className="mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mx-auto max-w-2xl text-white/75">
						Common questions about my services and process
					</p>
				</motion.div>

				<motion.div
					className="mx-auto max-w-4xl"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true, amount: 0.2 }}
				>
					<Accordion type="single" collapsible className="space-y-4">
						{faqData.map((item, index) => (
							<AccordionItem
								key={index}
								value={`item-${index}`}
								className="glass rounded-lg border border-white/20 px-6"
							>
								<AccordionTrigger className="text-left text-white hover:text-white/80">
									{item.question}
								</AccordionTrigger>
								<AccordionContent className="text-white/75">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</motion.div>
			</div>
		</section>
	);
}
