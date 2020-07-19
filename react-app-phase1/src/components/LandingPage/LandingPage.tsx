import React, { useState, useEffect } from 'react';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import useLocationDetails from '../Hooks/useLocationDetails';
import useCollections from '../Hooks/useCollections';
import useRestaurant from '../Hooks/useRestaurant';
import { LocationProps, CollectionProps } from '../../common/Interfaces';
import ProgressBar from '../ProgressBar/ProgressBar';
import _ from 'lodash';
import Cuisine from '../Cuisine/Cuisine';

interface LandingPageProps {
	location: LocationProps;
}

const LandingPage = ({ location }: LandingPageProps) => {
	const [selectedCollection, setSelectedCollection] = useState<CollectionProps>({} as CollectionProps);
	const [locationDetails] = useLocationDetails(location);
	const [collections] = useCollections(location);
	const [restaurant] = useRestaurant(null, location, selectedCollection);

	useEffect(() => {
		setSelectedCollection(collections[Math.floor(Math.random() * 5)]);
	}, [collections]);

	const renderScreen = (): JSX.Element => {
		return (
			<React.Fragment>
				<Cuisine />
				<MutliCarousel label='Best Rated' data={locationDetails} />
				{_.isEmpty(selectedCollection) ? null : (
					<MutliCarousel label={selectedCollection.collection.title} data={restaurant} />
				)}
			</React.Fragment>
		);
	};

	return <div>{locationDetails.length === 0 && restaurant.length === 0 ? <ProgressBar /> : renderScreen()}</div>;
};

export default LandingPage;
