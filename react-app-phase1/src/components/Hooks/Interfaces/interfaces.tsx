export interface LocationProps {
	entity_type: string;
	entity_id: string;
	city_id?: string;
	city_name?: string;
	country_id?: string;
	country_name?: string;
	latitude?: string;
	longitude?: string;
}

export interface RestaurantProps {
	// restaurant: object;
	// restaurant: { id: string };

	restaurant: { id: string; name: string; location: { address: string }; featured_image: string };
}
