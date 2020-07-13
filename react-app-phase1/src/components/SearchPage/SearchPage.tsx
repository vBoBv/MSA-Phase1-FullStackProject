import React from 'react';
import RestaurantList from '../RestaurantList/RestaurantList';

interface SearchPageProps {
	restaurantData: RestaurantProps[];
}

interface RestaurantProps {
	restaurant: { id: string; name: string; location: { address: string }; featured_image: string };
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
