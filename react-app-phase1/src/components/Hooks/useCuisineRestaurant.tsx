import { useState, useEffect, useCallback } from 'react';
import zomato from '../api/zomato';
import _ from 'lodash';
import { CuisineProps, RestaurantProps, LocationProps } from '../../common/Interfaces';

const CuisineRestaurant = (
	cuisinesData: CuisineProps[],
	locationData: LocationProps
): [RestaurantProps[][], (cuisine: CuisineProps[], location: LocationProps) => void] => {
	const [cuisineRestaurant, setCuisineRestaurant] = useState<RestaurantProps[][]>([]);

	const searchCuisineRestaurant = useCallback(async (cuisine: CuisineProps[], location: LocationProps) => {
		if (!_.isEmpty(location) && cuisine.length !== 0 && cuisine.length !== null) {
			for (let i = 0; i < cuisine.length; i++) {
				const { data } = await zomato.get('/search', {
					params: {
						entity_id: location.entity_id,
						entity_type: location.entity_type,
						count: 10,
						cuisines: cuisine[i].cuisine.cuisine_id
					}
				});
				setCuisineRestaurant((prevCuisineRestaurant) => [...prevCuisineRestaurant, data.restaurants]);
			}
		}
	}, []);

	useEffect(() => {
		searchCuisineRestaurant(cuisinesData, locationData);
	}, [cuisinesData, locationData, searchCuisineRestaurant]);

	return [cuisineRestaurant, searchCuisineRestaurant];
};

export default CuisineRestaurant;
