import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';
import LandingPage from './LandingPage/LandingPage';
import RestaurantList from './RestaurantList/RestaurantList';
import useRestaurant from './Hooks/useRestaurant';
import useLocation from './Hooks/useLocation';

interface UserInput {
	SearchQuery: string | null;
	SelectQuery: string | null;
}

const App = () => {
	// const [UserInput, setUserInput] = useState<UserInput>({
	// 	SearchQuery: null,
	// 	SelectQuery: 'Auckland'
	// });

	// const SetUserInput = (input: UserInput) => {
	// 	setUserInput(input);
	// };

	// const SetUserInput = useCallback(
	// 	(input: UserInput) => {
	// 		setUserInput(input);
	// 		console.log(input);
	// 	},
	// 	[UserInput]
	// );

	const [location] = useLocation('Aukland');
	const [restaurant, searchRestaurant] = useRestaurant(null, location, null);

	// useEffect(() => {
	// 	setSelectedCollection(collections[Math.floor(Math.random() * 5)]);
	// }, [collections]);

	console.log(restaurant);

	return (
		<ThemeProvider theme={theme}>
			{/* <Header SetUserInput={(input: UserInput) => SetUserInput(input)} /> */}
			{/* <LandingPage /> */}
			{/* <RestaurantList /> */}
			<Header setUserInput={searchRestaurant} />
		</ThemeProvider>
	);
};

export default App;
