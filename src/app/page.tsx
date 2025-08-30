'use client';

import Hero from '@/components/hero';
import HowIWork from '@/components/how-i-work';
import FeaturedWork from '@/components/featured-work';
import AboutContact from '@/components/about-contact';
import SplashScreen from '@/components/SplashScreen';
import { useState } from 'react';

const Page = () => {
	const [showSplash, setShowSplash] = useState(true);

	// Callback to hide splash when tech icons are ready
	const handleTechIconsReady = () => setShowSplash(false);

	return (
		<div className="relative">
			{showSplash && <SplashScreen />}
			<Hero onTechIconsReady={handleTechIconsReady} />
			<HowIWork />
			<FeaturedWork />
			<AboutContact />
		</div>
	);
};

export default Page;
