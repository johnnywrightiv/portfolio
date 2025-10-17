// NOTE: not using this section, just keeping as a reference for how blogs could possibly look in the future
// TODO: update this file to handle blogs not MediumPosts etc.

// 'use client';

// import { useState, useEffect } from 'react';
// import { ExternalLink, Calendar, Search, Grid, List } from 'lucide-react';

// interface MediumPost {
// 	title: string;
// 	link: string;
// 	pubDate: string;
// 	description: string;
// 	image?: string;
// }

// export default function Blogs() {
// 	const [posts, setPosts] = useState<MediumPost[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const [activeTab, setActiveTab] = useState<'featured' | 'all'>('featured');
// 	const [searchQuery, setSearchQuery] = useState('');

// 	useEffect(() => {
// 		fetchPosts();
// 	}, []);

// 	const fetchPosts = async () => {
// 		try {
// 			const response = await fetch('/api/medium-posts');
// 			const data = await response.json();
// 			setPosts(data.posts || []);
// 		} catch (error) {
// 			console.error('Error fetching posts:', error);
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	const formatDate = (dateString: string) => {
// 		try {
// 			if (!dateString) return 'Recent';
// 			return new Date(dateString).toLocaleDateString('en-US', {
// 				year: 'numeric',
// 				month: 'short',
// 				day: 'numeric',
// 			});
// 		} catch {
// 			return 'Recent';
// 		}
// 	};

// 	const cleanText = (text: string | undefined, fallback = '') => {
// 		if (!text || text === 'undefined' || text.trim() === '') {
// 			return fallback;
// 		}
// 		return text.trim();
// 	};

// 	const filteredPosts = posts.filter(
// 		(post) =>
// 			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
// 			post.description.toLowerCase().includes(searchQuery.toLowerCase())
// 	);

// 	const featuredPosts = posts.slice(0, 6);

// 	return (
// 		<section id="blog" className="relative overflow-hidden px-4 py-20">
// 			<div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />

// 			<div className="relative z-10 mx-auto max-w-6xl">
// 				{/* Section Header */}
// 				<div className="mb-16 text-center">
// 					<h2 className="mb-4 font-sans text-4xl font-bold text-white md:text-5xl">
// 						Articles – Web3, AI & UX Insights
// 					</h2>
// 					<p className="mx-auto max-w-2xl text-lg text-white/75">
// 						{t('blog.subtitle')}
// 					</p>
// 				</div>

// 				{/* Tab Navigation */}
// 				<div className="mb-8">
// 					<div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
// 						<div className="flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
// 							<button
// 								onClick={() => setActiveTab('featured')}
// 								className={`flex items-center rounded-full px-6 py-2 transition-all duration-300 ${
// 									activeTab === 'featured'
// 										? 'bg-white/20 text-white'
// 										: 'text-white/70 hover:bg-white/10 hover:text-white'
// 								}`}
// 							>
// 								<Grid className="mr-2 h-4 w-4" />
// 								Featured
// 							</button>
// 							<button
// 								onClick={() => setActiveTab('all')}
// 								className={`flex items-center rounded-full px-6 py-2 transition-all duration-300 ${
// 									activeTab === 'all'
// 										? 'bg-white/20 text-white'
// 										: 'text-white/70 hover:bg-white/10 hover:text-white'
// 								}`}
// 							>
// 								<List className="mr-2 h-4 w-4" />
// 								Last Articles ({posts.length})
// 							</button>
// 						</div>

// 						{/* Search Bar - only show in 'all' tab */}
// 						{activeTab === 'all' && (
// 							<div className="relative">
// 								<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-white/50" />
// 								<input
// 									type="text"
// 									placeholder="Search articles..."
// 									value={searchQuery}
// 									onChange={(e) => setSearchQuery(e.target.value)}
// 									className="w-64 rounded-full border border-white/10 bg-white/5 py-2 pl-10 pr-4 text-white placeholder-white/50 backdrop-blur-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50"
// 								/>
// 							</div>
// 						)}
// 					</div>
// 				</div>

// 				{/* Content based on active tab */}
// 				{loading ? (
// 					<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
// 						{[...Array(6)].map((_, i) => (
// 							<div
// 								key={i}
// 								className="animate-pulse rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
// 							>
// 								<div className="mb-4 h-40 rounded-lg bg-white/10"></div>
// 								<div className="mb-4 h-4 rounded bg-white/20"></div>
// 								<div className="mb-2 h-3 rounded bg-white/20"></div>
// 								<div className="mb-4 h-3 rounded bg-white/20"></div>
// 								<div className="h-8 rounded bg-white/20"></div>
// 							</div>
// 						))}
// 					</div>
// 				) : posts.length > 0 ? (
// 					<>
// 						{/* Featured Tab - Cards View */}
// 						{activeTab === 'featured' && (
// 							<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
// 								{featuredPosts.map((post, index) => (
// 									<a
// 										key={index}
// 										href={post.link}
// 										target="_blank"
// 										rel="noopener noreferrer"
// 										className="group block cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl"
// 									>
// 										<div className="relative h-48 overflow-hidden">
// 											<img
// 												src={
// 													post.image ||
// 													'/placeholder.svg?height=200&width=400&query=article cover'
// 												}
// 												alt={post.title}
// 												className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
// 												onError={(e) => {
// 													const target = e.target as HTMLImageElement;
// 													target.src = '/placeholder.svg?height=200&width=400';
// 												}}
// 											/>
// 											<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
// 										</div>

// 										<div className="p-6">
// 											<div className="mb-3 flex items-center text-sm text-white/60">
// 												<Calendar className="mr-2 h-4 w-4" />
// 												{formatDate(post.pubDate)}
// 											</div>

// 											<h3 className="mb-3 line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
// 												{cleanText(post.title, 'Untitled Article')}
// 											</h3>

// 											<p className="mb-4 line-clamp-3 text-sm text-white/75">
// 												{cleanText(
// 													post.description,
// 													'No description available.'
// 												)}
// 											</p>

// 											<div className="inline-flex transform items-center text-sm font-medium text-blue-400 transition-colors duration-200 group-hover:translate-x-1 group-hover:text-blue-300">
// 												{t('blog.readMore')}
// 												<ExternalLink className="ml-2 h-4 w-4" />
// 											</div>
// 										</div>
// 									</a>
// 								))}
// 							</div>
// 						)}

// 						{activeTab === 'all' && (
// 							<div className="space-y-4">
// 								{filteredPosts.length > 0 ? (
// 									filteredPosts.map((post, index) => (
// 										<a
// 											key={index}
// 											href={post.link}
// 											target="_blank"
// 											rel="noopener noreferrer"
// 											className="group block cursor-pointer rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
// 										>
// 											<div className="flex flex-col gap-4 sm:flex-row">
// 												{/* Article Image */}
// 												<div className="flex-shrink-0">
// 													<img
// 														src={
// 															post.image ||
// 															'/placeholder.svg?height=80&width=120&query=article thumbnail'
// 														}
// 														alt={post.title}
// 														className="h-20 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105 sm:w-24"
// 														onError={(e) => {
// 															const target = e.target as HTMLImageElement;
// 															target.src =
// 																'/placeholder.svg?height=80&width=120';
// 														}}
// 													/>
// 												</div>

// 												{/* Article Content */}
// 												<div className="min-w-0 flex-1">
// 													<div className="mb-2 flex items-center text-sm text-white/60">
// 														<Calendar className="mr-1 h-3 w-3" />
// 														{formatDate(post.pubDate)}
// 													</div>

// 													<h3 className="mb-2 line-clamp-2 text-lg font-semibold text-white transition-colors group-hover:text-blue-300">
// 														{cleanText(post.title, 'Untitled Article')}
// 													</h3>

// 													<p className="mb-3 line-clamp-2 text-sm text-white/75">
// 														{cleanText(
// 															post.description,
// 															'No description available.'
// 														)}
// 													</p>

// 													<div className="inline-flex items-center text-sm font-medium text-blue-400 transition-colors group-hover:text-blue-300">
// 														{t('blog.readMore')}
// 														<ExternalLink className="ml-1 h-3 w-3" />
// 													</div>
// 												</div>
// 											</div>
// 										</a>
// 									))
// 								) : (
// 									<div className="py-12 text-center">
// 										<p className="text-lg text-white/75">
// 											No articles found matching "{searchQuery}"
// 										</p>
// 									</div>
// 								)}
// 							</div>
// 						)}
// 					</>
// 				) : (
// 					<div className="py-12 text-center">
// 						<p className="text-lg text-white/75">{t('blog.noArticles')}</p>
// 					</div>
// 				)}

// 				{/* View All Link - only show in featured tab */}
// 				{posts.length > 0 && activeTab === 'featured' && (
// 					<div className="mt-12 text-center">
// 						<button
// 							onClick={() => setActiveTab('all')}
// 							className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/15"
// 						>
// 							View Last {posts.length} Articles
// 							<List className="ml-2 h-5 w-5" />
// 						</button>
// 					</div>
// 				)}
// 			</div>
// 		</section>
// 	);
// }
