import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';
import LandingPage from './LandingPage/LandingPage';
import SearchPage from './SearchPage/SearchPage';
import useRestaurant from './Hooks/useRestaurant';
import useLocation from './Hooks/useLocation';

const App = () => {
	const [location, setLocation] = useLocation('Auckland');
	const [restaurant, searchRestaurant] = useRestaurant(null, location, null);

	console.log(restaurant);

	return (
		<ThemeProvider theme={theme}>
			<Header setUserInput={searchRestaurant} setLocation={setLocation} location={location} />
			<LandingPage location={location} />
			<SearchPage restaurantData={restaurant} />
		</ThemeProvider>
	);
};

export default App;
