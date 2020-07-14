import React, { useState, useEffect } from 'react';
import RestaurantList from '../RestaurantList/RestaurantList';
import { RestaurantProps } from '../../common/Interfaces';
import ProgressBar from '../ProgressBar/ProgressBar';

interface SearchPageProps {
	restaurantData: RestaurantProps[];
}

const SearchPage = ({ restaurantData }: SearchPageProps) => {
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setHidden(false);
		}, 3500);
	}, []);

	const renderRestaurantList = restaurantData.map((item) => {
		return (
			<React.Fragment key={item.restaurant.id}>
				<RestaurantList data={item} />
			</React.Fragment>
		);
	});

	return <div>{hidden ? <ProgressBar /> : renderRestaurantList}</div>;
};

export default SearchPage;
