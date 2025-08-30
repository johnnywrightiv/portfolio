import React from 'react';

const SplashScreen = () => {
	return (
		<div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-700">
			{/* Sleeping Cat SVG Animation */}
			<div className="flex flex-col items-center">
				<svg
					width="160"
					height="120"
					viewBox="0 0 160 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* Cat body */}
					<ellipse cx="80" cy="80" rx="60" ry="30" fill="#22223b" />
					{/* Cat head */}
					<ellipse cx="120" cy="65" rx="22" ry="18" fill="#22223b" />
					{/* Cat ear left */}
					<polygon points="105,55 110,35 115,55" fill="#22223b" />
					{/* Cat ear right */}
					<polygon points="125,55 130,35 135,55" fill="#22223b" />
					{/* Cat face */}
					<ellipse cx="120" cy="70" rx="10" ry="8" fill="#fff" opacity="0.1" />
					{/* Zzz animation */}
					<text x="40" y="40" fontSize="24" fill="#bcbcbc">
						<animate
							attributeName="opacity"
							values="0;1;0"
							dur="2s"
							repeatCount="indefinite"
						/>
						Z
					</text>
					<text x="30" y="25" fontSize="18" fill="#bcbcbc">
						<animate
							attributeName="opacity"
							values="0;0;1;0"
							dur="2s"
							repeatCount="indefinite"
						/>
						z
					</text>
					<text x="20" y="15" fontSize="14" fill="#bcbcbc">
						<animate
							attributeName="opacity"
							values="0;0;0;1;0"
							dur="2s"
							repeatCount="indefinite"
						/>
						z
					</text>
				</svg>
				<span className="mt-6 animate-pulse text-lg text-text-secondary">
					Waking up the portfolio...
				</span>
			</div>
		</div>
	);
};

export default SplashScreen;
