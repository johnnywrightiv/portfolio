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
	'Ecommerce App': 'text-orange-400',
	'Embedded Web App': 'text-green-300',
	'AI Integration': 'text-yellow-400',
	Automation: 'text-indigo-400',
	'3D Animation': 'text-pink-400',
};

/**
 * Get the Tailwind CSS class for a project type tag (colored for visual grouping)
 */
export function getProjectTypeClass(type: string | undefined): string {
	if (!type) return 'text-primary';
	return PROJECT_TYPE_COLORS[type] || 'text-primary';
}

/**
 * Project Origin Color Configuration
 *
 * Most origins use a neutral muted style; specific origins can opt into a color
 * to call them out (e.g., "Internal Tools" for tools built in-house).
 */
export const PROJECT_ORIGIN_COLORS: Record<string, string> = {
	'Internal Tools': 'text-teal-400',
};

/**
 * Get styling for project origin tag. Defaults to neutral muted styling,
 * with specific origins opting into a color via PROJECT_ORIGIN_COLORS.
 */
export function getProjectOriginClass(origin?: string): string {
	if (origin && PROJECT_ORIGIN_COLORS[origin]) {
		return PROJECT_ORIGIN_COLORS[origin];
	}
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
