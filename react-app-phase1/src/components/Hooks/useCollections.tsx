import { useState, useEffect } from 'react';
import zomato from '../api/zomato';
import _ from 'lodash';
import { LocationProps } from '../../common/Interfaces';
import { CollectionProps } from '../../common/Interfaces';

const useCollections = (locationData: LocationProps): [CollectionProps[], (input: LocationProps) => void] => {
	const [collections, setCollections] = useState<CollectionProps[]>([]);

	useEffect(() => {
		searchCollections(locationData);
	}, [locationData]);

	const searchCollections = async (location: LocationProps) => {
		if (!_.isEmpty(location)) {
			const { data } = await zomato.get('/collections', {
				params: {
					city_id: location.city_id,
					count: 5
				}
			});
			setCollections(data.collections);
		}
	};

	return [collections, searchCollections];
};

export default useCollections;
