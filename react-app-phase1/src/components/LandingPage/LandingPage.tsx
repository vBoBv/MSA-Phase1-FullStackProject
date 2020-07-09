import React, { useState } from 'react';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import useLocationDetails from '../Hooks/useLocationDetails';

interface LandingPageProps {
	SearchQuery: string | null;
	SelectQuery: string | null;
}

const LandingPage = ({ SearchQuery, SelectQuery }: LandingPageProps) => {
	const [locationDetails] = useLocationDetails(SelectQuery);

	return (
		<div>{locationDetails.length === 0 ? 'Fetching' : <MutliCarousel label='Best Rated' data={locationDetails} />}</div>
	);
};

export default LandingPage;
