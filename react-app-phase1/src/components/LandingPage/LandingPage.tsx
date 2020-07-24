import React, { useState, useEffect } from 'react';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import useLocationDetails from '../Hooks/useLocationDetails';
import useCollections from '../Hooks/useCollections';
import useRestaurant from '../Hooks/useRestaurant';
import { LocationProps, CollectionProps, CuisineProps } from '../../common/Interfaces';
import ProgressBar from '../ProgressBar/ProgressBar';
import _ from 'lodash';
import Cuisine from '../Cuisine/Cuisine';

import useCuisine from '../Hooks/useCuisine';
import useCuisineRestaurant from '../Hooks/useCuisineRestaurant';

interface LandingPageProps {
	location: LocationProps;
}

const LandingPage = ({ location }: LandingPageProps) => {
	const [selectedCollection, setSelectedCollection] = useState<CollectionProps>({} as CollectionProps);
	const [topCuisine, setTopCuisine] = useState<CuisineProps[]>([]);

	const [locationDetails] = useLocationDetails(location);
	const [collections] = useCollections(location);
	const [restaurant] = useRestaurant(null, location, selectedCollection);
	const [cuisine] = useCuisine(location);
	const [cuisineRestaurant] = useCuisineRestaurant(topCuisine, location);

	useEffect(() => {
		setSelectedCollection(collections[Math.floor(Math.random() * 5)]);
	}, [collections]);

	useEffect(() => {
		setTopCuisine(
			cuisine.filter(
				({ cuisine }) =>
					cuisine.cuisine_name === 'Asian' ||
					cuisine.cuisine_name === 'American' ||
					cuisine.cuisine_name === 'European' ||
					cuisine.cuisine_name === 'Japanese' ||
					cuisine.cuisine_name === 'Indian'
			)
		);
	}, [cuisine]);

	const renderScreen = (): JSX.Element => {
		return (
			<React.Fragment>
				<Cuisine cuisines={cuisineRestaurant} categories={topCuisine} />
				<MutliCarousel label='Best Rated' data={locationDetails} />
				{_.isEmpty(selectedCollection) ? null : (
					<MutliCarousel label={selectedCollection.collection.title} data={restaurant} />
				)}
			</React.Fragment>
		);
	};

	return <div>{locationDetails.length === 0 && restaurant.length === 0 ? <ProgressBar /> : renderScreen()}</div>;
};

// const LandingPage = ({ location }: LandingPageProps) => {
// 	// const [topCuisine, setTopCuisine] = useState<CuisineProps[]>([]);
// 	// const [cuisine] = useCuisine(location);
// 	// const [cuisineRestaurant] = useCuisineRestaurant(topCuisine, location);

// 	// useEffect(() => {
// 	// 	setTopCuisine(
// 	// 		cuisine.filter(
// 	// 			({ cuisine }) =>
// 	// 				cuisine.cuisine_name === 'Asian' ||
// 	// 				cuisine.cuisine_name === 'American' ||
// 	// 				cuisine.cuisine_name === 'European' ||
// 	// 				cuisine.cuisine_name === 'Japanese' ||
// 	// 				cuisine.cuisine_name === 'Indian'
// 	// 		)
// 	// 	);
// 	// }, [cuisine]);

// 	const renderScreen = (): JSX.Element => {
// 		return (
// 			<React.Fragment>
// 				{/* <Cuisine cuisines={cuisineRestaurant} categories={topCuisine} /> */}
// 				<Cuisine cuisines={null} categories={null} />
// 			</React.Fragment>
// 		);
// 	};

// 	return <div>{renderScreen()}</div>;
// };

export default LandingPage;
