import { useState, useEffect, useCallback } from 'react';
import useLocation from './useLocation';
import zomato from '../api/zomato';
import { RestaurantProps } from './Interfaces/interfaces';
import _ from 'lodash';

const useRestaurant = (
	defaultRestaurantName: string | null,
	defaultLocationName: string | null
): [RestaurantProps[], (input: string) => void] => {
	const [restaurant, setRestaurant] = useState<RestaurantProps[]>([]);
	const [location] = useLocation(defaultLocationName);

	const searchRestaurant = useCallback(
		async (restaurantName: string | null) => {
			if (!_.isEmpty(location)) {
				const { data } = await zomato.get('/search', {
					params: {
						entity_id: location.entity_id,
						entity_type: location.entity_type,
						order: 'asc',
						q: restaurantName
					}
				});
				setRestaurant(data.restaurants);
			}
		},
		[location]
	);

	useEffect(() => {
		searchRestaurant(defaultRestaurantName);
	}, [defaultRestaurantName, location, searchRestaurant]);

	return [restaurant, searchRestaurant];
};

export default useRestaurant;
