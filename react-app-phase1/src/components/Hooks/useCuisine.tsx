import { useState, useEffect } from 'react';
import zomato from '../api/zomato';
import _ from 'lodash';
import { LocationProps, CuisineProps } from '../../common/Interfaces';

// const useCuisine = (locationData: LocationProps): [RestaurantProps[], (input: LocationProps) => void] => {
// 	const [cuisine, setCuisine] = useState<CuisineProps[]>([]);
// 	const [cuisineRestaurant, setCuisineRestaurant] = useState<RestaurantProps[]>([]);

// 	const searchCuisine = useCallback(async (location: LocationProps) => {
// 		if (!_.isEmpty(location)) {
// 			const { data } = await zomato.get('/cuisines', {
// 				params: {
// 					city_id: location.city_id,
// 					lat: location.latitude,
// 					lon: location.longitude
// 				}
// 			});
// 			setCuisine(data.cuisines);
// 		}
// 		const topCuisines = cuisine.filter(
// 			({ cuisine }) =>
// 				cuisine.cuisine_name === 'Asian' ||
// 				cuisine.cuisine_name === 'American' ||
// 				cuisine.cuisine_name === 'European' ||
// 				cuisine.cuisine_name === 'Japanese' ||
// 				cuisine.cuisine_name === 'Indian'
// 		);

// 		// if (topCuisines.length !== 0 || topCuisines !== null) {
// 		// 	for (let i = 0; i < cuisine.length; i++) {
// 		// 		const { cuisineRestaurant } = await zomato.get('/search', {
// 		// 			params: {
// 		// 				entity_id: location.entity_id,
// 		// 				entity_type: location.entity_type,
// 		// 				cuisines: topCuisines[i].cuisine.cusine_id
// 		// 			}
// 		// 		});
// 		// 		setCuisineRestaurant(cuisineRestaurant);
// 		// 		// console.log(cuisineRestaurant);
// 		// 	}
// 		// }
// 	}, []);

// 	useEffect(() => {
// 		searchCuisine(locationData);
// 	}, [locationData, searchCuisine]);

// 	return [cuisineRestaurant, searchCuisine];
// };

// export default useCuisine;

const useCuisine = (locationData: LocationProps): [CuisineProps[], (input: LocationProps) => void] => {
	const [cuisine, setCuisine] = useState<CuisineProps[]>([]);

	const searchCuisine = async (location: LocationProps) => {
		if (!_.isEmpty(location)) {
			const { data } = await zomato.get('/cuisines', {
				params: {
					city_id: location.city_id,
					lat: location.latitude,
					lon: location.longitude
				}
			});

			setCuisine(data.cuisines);
		}
	};
	useEffect(() => {
		searchCuisine(locationData);
	}, [locationData]);

	return [cuisine, searchCuisine];
};

export default useCuisine;
