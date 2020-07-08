import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';
import LandingPage from './LandingPage/LandingPage';
import useRestaurant from './Hooks/useRestaurant';

const App = () => {
	// useRestaurant('', 'Auckland');
	//const [location, searchLocation] = useLocation('Auckland');
	//console.log(location);

	// useRestaurant('fast horse', 'Auckland');

	const [restaurant] = useRestaurant('fast horse', 'Auckland');

	console.log(restaurant);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<LandingPage />
		</ThemeProvider>
	);
};

export default App;
