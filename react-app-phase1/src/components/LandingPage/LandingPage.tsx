import React, { useState, useEffect } from 'react';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import useLocation from '../Hooks/useLocation';
import useLocationDetails from '../Hooks/useLocationDetails';
import useCollections from '../Hooks/useCollections';
import useRestaurant from '../Hooks/useRestaurant';

interface CollectionProps {
	collection: {
		collection_id: string;
		title: string;
	};
}

const LandingPage = () => {
	const [selectedCollection, setSelectedCollection] = useState<CollectionProps>({} as CollectionProps);
	const [location] = useLocation('Aukland');
	const [locationDetails] = useLocationDetails(location);
	const [collections] = useCollections(location);
	const [restaurant] = useRestaurant(null, location, selectedCollection);

	useEffect(() => {
		setSelectedCollection(collections[Math.floor(Math.random() * 5)]);
	}, [collections]);

	console.log(restaurant);

	const renderScreen = () => {
		return (
			<React.Fragment>
				<MutliCarousel label='Best Rated' data={locationDetails} />
				<MutliCarousel label={selectedCollection.collection.title} data={restaurant} />
			</React.Fragment>
		);
	};

	return <div>{locationDetails.length === 0 && restaurant.length === 0 ? 'Fetching' : renderScreen()}</div>;
};

export default LandingPage;
