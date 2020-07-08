import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';
import LandingPage from './LandingPage/LandingPage';
import useRestaurant from './Hooks/useRestaurant';

const App = () => {
	const [restaurant, searchRestaurant] = useRestaurant(
		'fast horse',
		'Auckland'
	);
	console.log(restaurant);

	return (
		<ThemeProvider theme={theme}>
			<Header />
			<LandingPage />
		</ThemeProvider>
	);
};

export default App;
