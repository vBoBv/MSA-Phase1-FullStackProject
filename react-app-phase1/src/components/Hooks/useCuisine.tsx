import { useState, useEffect } from 'react';
import zomato from '../api/zomato';
import _ from 'lodash';
import { LocationProps, CuisineProps } from '../../common/Interfaces';

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
