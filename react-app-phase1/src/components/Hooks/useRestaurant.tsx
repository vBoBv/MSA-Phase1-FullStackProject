import { useState, useEffect, useCallback } from 'react';
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

	const searchRestaurant = useCallback(
		async (restaurantName: string | null, location: LocationProps, collection: CollectionProps | null) => {
			if (!_.isEmpty(location) && !_.isEmpty(collection) && collection !== null) {
				const { data } = await zomato.get('/search', {
					params: {
						entity_id: location.entity_id,
						entity_type: location.entity_type,
						q: restaurantName,
						collection_id: collection.collection.collection_id
					}
				});
				setRestaurant(data.restaurants);
			} else if (!_.isEmpty(location) && restaurantName !== null && collection === null) {
				const { data } = await zomato.get('/search', {
					params: {
						entity_id: location.entity_id,
						entity_type: location.entity_type,
						q: restaurantName
					}
				});
				setRestaurant(data.restaurants);
			}
		},
		[]
	);

	useEffect(() => {
		searchRestaurant(defaultRestaurantName, locationData, collectionData);
	}, [defaultRestaurantName, locationData, collectionData, searchRestaurant]);

	return [restaurant, searchRestaurant];
};

export default useRestaurant;
