import React from 'react';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import useLocation from '../Hooks/useLocation';
import useLocationDetails from '../Hooks/useLocationDetails';
import useCollections from '../Hooks/useCollections';

const LandingPage = () => {
	const [location] = useLocation('Aukland');
	const [locationDetails] = useLocationDetails(location);
	const [collections] = useCollections(location);

	return (
		<div>{locationDetails.length === 0 ? 'Fetching' : <MutliCarousel label='Best Rated' data={locationDetails} />}</div>
	);
};

export default LandingPage;
