import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';
import LandingPage from './LandingPage/LandingPage';
import SearchPage from './SearchPage/SearchPage';
import useRestaurant from './Hooks/useRestaurant';
import useLocation from './Hooks/useLocation';

const App = () => {
	const [searchQuery, setSearchQuery] = useState<string | null>('');
	const [location, searchLocation] = useLocation('Auckland');
	const [restaurant, searchRestaurant] = useRestaurant(null, location, null);

	const renderScreen = () => {
		if (searchQuery === '' || searchQuery === null) {
			return <LandingPage location={location} />;
		} else {
			return <SearchPage restaurantData={restaurant} />;
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Header
				setUserInput={searchRestaurant}
				setLocation={searchLocation}
				setSearchQuery={setSearchQuery}
				location={location}
			/>
			{/* <LandingPage location={location} />
			<SearchPage restaurantData={restaurant} /> */}
			{renderScreen()}
		</ThemeProvider>
	);
};

export default App;
