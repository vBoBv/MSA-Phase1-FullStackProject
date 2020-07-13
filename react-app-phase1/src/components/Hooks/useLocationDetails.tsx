import { useState, useEffect } from 'react';
import zomato from '../api/zomato';
import _ from 'lodash';
import { LocationProps } from '../../common/Interfaces';

interface LocationDetailsProps {
	restaurants: object;
}

const useLocationDetails = (locationData: LocationProps): [LocationDetailsProps[], (input: LocationProps) => void] => {
	const [locationDetails, setLocationDetails] = useState<LocationDetailsProps[]>([]);

	useEffect(() => {
		searchLocationDetails(locationData);
	}, [locationData]);

	const searchLocationDetails = async (location: LocationProps) => {
		if (!_.isEmpty(location)) {
			const { data } = await zomato.get('/location_details', {
				params: {
					entity_id: location.entity_id,
					entity_type: location.entity_type
				}
			});
			setLocationDetails(data.best_rated_restaurant);
		}
	};

	return [locationDetails, searchLocationDetails];
};

export default useLocationDetails;
