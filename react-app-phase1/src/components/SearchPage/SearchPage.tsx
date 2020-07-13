import React from 'react';
import RestaurantList from '../RestaurantList/RestaurantList';
import { RestaurantProps } from '../../common/Interfaces';

interface SearchPageProps {
	restaurantData: RestaurantProps[];
}

const SearchPage = ({ restaurantData }: SearchPageProps) => {
	const renderRestaurantList = restaurantData.map((item) => {
		return (
			<React.Fragment key={item.restaurant.id}>
				<RestaurantList data={item} />
			</React.Fragment>
		);
	});

	return <div>{renderRestaurantList}</div>;
};

export default SearchPage;
