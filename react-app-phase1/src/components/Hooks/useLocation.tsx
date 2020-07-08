import { useState, useEffect } from 'react';
import zomato from '../api/zomato';
import { LocationProps } from './Interfaces/interfaces';

const useLocation = (defaultLocation: string): [LocationProps, (input: string) => void] => {
	const [location, setLocation] = useState<LocationProps>({} as LocationProps);

	useEffect(() => {
		searchLocation(defaultLocation);
	}, [defaultLocation]);

	const searchLocation = async (cityName: string) => {
		const { data } = await zomato.get('/locations', {
			params: {
				query: cityName
			}
		});
		setLocation(data.location_suggestions[0]);
	};
	return [location, searchLocation];
};

export default useLocation;
