import React, { useState, useEffect } from 'react';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import useLocation from '../Hooks/useLocation';
import useLocationDetails from '../Hooks/useLocationDetails';
import useCollections from '../Hooks/useCollections';
import { LocationProps } from '../Hooks/Interfaces/interfaces';

// interface LandingPageProps {
// 	SearchQuery: string | null;
// 	SelectQuery: string | null;
// }

const LandingPage = () => {
	const [location] = useLocation('Aukland');
	const [locationDetails] = useLocationDetails(location);
	const [collections] = useCollections(location);
	console.log(collections);

	return (
		<div>{locationDetails.length === 0 ? 'Fetching' : <MutliCarousel label='Best Rated' data={locationDetails} />}</div>
	);
};

export default LandingPage;
