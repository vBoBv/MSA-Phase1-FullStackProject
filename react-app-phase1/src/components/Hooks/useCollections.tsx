import { useState, useEffect, useCallback } from 'react';
import zomato from '../api/zomato';
import _ from 'lodash';
import { LocationProps } from './Interfaces/interfaces';

interface CollectionProps {
	collections: object;
}

const useCollections = (locationData: LocationProps): [CollectionProps[], (input: LocationProps) => void] => {
	const [collections, setCollections] = useState<CollectionProps[]>([]);

	useEffect(() => {
		searchCollections(locationData);
	}, [locationData]);

	const searchCollections = async (locationData: LocationProps) => {
		if (!_.isEmpty(locationData)) {
			const { data } = await zomato.get('/collections', {
				params: {
					city_id: locationData.city_id,
					count: 5
				}
			});
			setCollections(data.collections);
		}
	};

	return [collections, searchCollections];
};

// const useCollections = (defaultLocationName: string | null): [CollectionProps[], () => void] => {
// 	const [collections, setCollections] = useState<CollectionProps[]>([]);
// 	const [location] = useLocation(defaultLocationName);

// 	const searchCollections = useCallback(async () => {
// 		if (!_.isEmpty(location)) {
// 			const { data } = await zomato.get('/collections', {
// 				params: {
// 					city_id: location.city_id,
// 					count: 5
// 				}
// 			});
// 			setCollections(data.collections);
// 		}
// 	}, [location]);

// 	useEffect(() => {
// 		searchCollections();
// 	}, [location, searchCollections]);

// 	return [collections, searchCollections];
// };

export default useCollections;
