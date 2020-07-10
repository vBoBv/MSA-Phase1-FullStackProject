import { useState, useEffect } from 'react';
import zomato from '../api/zomato';
import { RestaurantProps } from './Interfaces/interfaces';
import { LocationProps } from './Interfaces/interfaces';
import _ from 'lodash';

interface CollectionProps {
	collection: {
		collection_id: string;
		title?: string;
	};
}

const useRestaurant = (
	defaultRestaurantName: string | null,
	locationData: LocationProps,
	collectionData: CollectionProps | null
): [
	RestaurantProps[],
	(restaurantName: string | null, location: LocationProps, collection: CollectionProps | null) => void
] => {
	const [restaurant, setRestaurant] = useState<RestaurantProps[]>([]);

	useEffect(() => {
		searchRestaurant(defaultRestaurantName, locationData, collectionData);
	}, [defaultRestaurantName, locationData, collectionData]);

	const searchRestaurant = async (
		restaurantName: string | null,
		location: LocationProps,
		collection: CollectionProps | null
	) => {
		if (!_.isEmpty(location) && !_.isEmpty(collection)) {
			const { data } = await zomato.get('/search', {
				params: {
					entity_id: location.entity_id,
					entity_type: location.entity_type,
					q: restaurantName,
					collection_id: collection?.collection.collection_id
				}
			});
			setRestaurant(data.restaurants);
		}
	};

	return [restaurant, searchRestaurant];
};

// const useRestaurant = (
// 	defaultRestaurantName: string | null,
// 	defaultLocationName: string | null
// ): [RestaurantProps[], (input: string) => void] => {
// 	const [restaurant, setRestaurant] = useState<RestaurantProps[]>([]);
// 	const [location] = useLocation(defaultLocationName);

// 	const searchRestaurant = useCallback(
// 		async (restaurantName: string | null) => {
// 			if (!_.isEmpty(location)) {
// 				const { data } = await zomato.get('/search', {
// 					params: {
// 						entity_id: location.entity_id,
// 						entity_type: location.entity_type,
// 						order: 'asc',
// 						q: restaurantName
// 					}
// 				});
// 				setRestaurant(data.restaurants);
// 			}
// 		},
// 		[location]
// 	);

// 	useEffect(() => {
// 		searchRestaurant(defaultRestaurantName);
// 	}, [defaultRestaurantName, location, searchRestaurant]);

// 	return [restaurant, searchRestaurant];
// };

export default useRestaurant;
