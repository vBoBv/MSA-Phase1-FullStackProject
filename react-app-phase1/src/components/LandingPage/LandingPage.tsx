import React, { useState, useEffect } from 'react';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import useLocationDetails from '../Hooks/useLocationDetails';
import useCollections from '../Hooks/useCollections';
import useRestaurant from '../Hooks/useRestaurant';

interface LandingPageProps {
	location: LocationProps;
}

interface CollectionProps {
	collection: {
		collection_id: string;
		title: string;
	};
}

interface LocationProps {
	entity_type: string;
	entity_id: string;
	city_id?: string;
	city_name?: string;
	country_id?: string;
	country_name?: string;
	latitude?: string;
	longitude?: string;
}

const LandingPage = ({ location }: LandingPageProps) => {
	const [selectedCollection, setSelectedCollection] = useState<CollectionProps>({} as CollectionProps);
	const [locationDetails] = useLocationDetails(location);
	const [collections] = useCollections(location);
	const [restaurant] = useRestaurant(null, location, selectedCollection);

	useEffect(() => {
		setSelectedCollection(collections[Math.floor(Math.random() * 5)]);
	}, [collections]);

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
