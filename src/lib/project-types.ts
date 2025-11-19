/**
 * Project Type Color Configuration
 *
 * Type tags use colored styling for visual grouping (Web App, Mobile App, AI Integration, etc.).
 * Centralized mapping for consistent colors across all components.
 */
export const PROJECT_TYPE_COLORS: Record<string, string> = {
	'Web Application': 'text-blue-400',
	Website: 'text-cyan-400',
	'Mobile First App': 'text-purple-400',
	'Ecommerce Platform': 'text-orange-400',
	'Embedded Web App': 'text-green-300',
	'AI Integration': 'text-yellow-400',
	Automation: 'text-indigo-400',
};

/**
 * Get the Tailwind CSS class for a project type tag (colored for visual grouping)
 */
export function getProjectTypeClass(type: string | undefined): string {
	if (!type) return 'text-primary';
	return PROJECT_TYPE_COLORS[type] || 'text-primary';
}

/**
 * Get neutral styling for project origin tag (muted, categorical)
 */
export function getProjectOriginClass(): string {
	return 'text-white/60';
}

/**
 * Project Section Configuration
 *
 * Flexible section structure that supports customizable titles.
 * Projects can have any number of highlight sections with custom titles.
 */

export interface ProjectSection {
	title: string;
	items: string[];
}
