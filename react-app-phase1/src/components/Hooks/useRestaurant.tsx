import { useState, useEffect, useCallback } from 'react';
import useLocation from './useLocation';
import zomato from '../api/zomato';

const useRestaurant = (
	defaultRestaurantName: string | null,
	defaultLocationName: string
) => {
	const [restaurant, setRestaurant] = useState([]);
	const [location] = useLocation(defaultLocationName);

	// const searchRestaurant = async (restaurantName: string | null) => {
	// 	const { data } = await zomato.get('/search', {
	// 		params: {
	// 			entity_id: `${location.entity_id}`,
	// 			entity_type: `${location.entity_type}`,
	// 			order: 'asc',
	// 			q: restaurantName
	// 		}
	// 	});
	// 	setRestaurant(data.restaurants);
	// };

	const searchRestaurant = useCallback(
		async (restaurantName: string | null) => {
			const { data } = await zomato.get('/search', {
				params: {
					entity_id: location.entity_id,
					entity_type: location.entity_type,
					order: 'asc',
					q: restaurantName
				}
			});
			setRestaurant(data.restaurants);
		},
		[location.entity_id, location.entity_type]
	);

	useEffect(() => {
		searchRestaurant(defaultRestaurantName);
	}, [defaultRestaurantName, location, searchRestaurant]);

	return [restaurant, searchRestaurant];

	// useEffect(() => {
	// 	async function searchRestaurant() {
	// 		const { data } = await zomato.get('/search', {
	// 			params: {
	// 				entity_id: `${location.entity_id}`,
	// 				entity_type: `${location.entity_type}`,
	// 				order: 'asc',
	// 				q: defaultRestaurantName
	// 			}
	// 		});
	// 		setRestaurant(data.restaurants);
	// 	}
	// 	searchRestaurant();
	// }, [defaultRestaurantName, location]);

	// return [restaurant];
};

export default useRestaurant;
