'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LoadingContextType {
	hasSplashRun: boolean;
	setHasSplashRun: (value: boolean) => void;
	isInitialLoad: boolean;
	setIsInitialLoad: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
	const [hasSplashRun, setHasSplashRun] = useState(false);
	const [isInitialLoad, setIsInitialLoad] = useState(true);

	// Check if splash has run before (stored in sessionStorage)
	useEffect(() => {
		const hasRun = sessionStorage.getItem('splash-has-run') === 'true';
		setHasSplashRun(hasRun);
		setIsInitialLoad(!hasRun);
	}, []);

	// Update sessionStorage when splash runs
	const handleSetHasSplashRun = (value: boolean) => {
		setHasSplashRun(value);
		if (value) {
			sessionStorage.setItem('splash-has-run', 'true');
		}
	};

	return (
		<LoadingContext.Provider
			value={{
				hasSplashRun,
				setHasSplashRun: handleSetHasSplashRun,
				isInitialLoad,
				setIsInitialLoad,
			}}
		>
			{children}
		</LoadingContext.Provider>
	);
}

export function useLoading() {
	const context = useContext(LoadingContext);
	if (context === undefined) {
		throw new Error('useLoading must be used within a LoadingProvider');
	}
	return context;
}
