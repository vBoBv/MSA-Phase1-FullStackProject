import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';
import LandingPage from './LandingPage/LandingPage';
import useRestaurant from './Hooks/useRestaurant';
import { UserInput } from '../Common/Interfaces';

const App = () => {
	const [UserInput, setUserInput] = useState<UserInput>({
		SearchQuery: null,
		SelectQuery: 'Auckland'
	});

	const SetUserInput = (input: UserInput) => {
		setUserInput(input);
	};

	// console.log(UserInput.SearchQuery);
	// console.log(UserInput.SelectQuery);

	const [restaurant] = useRestaurant(UserInput.SearchQuery, UserInput.SelectQuery);
	console.log(restaurant);

	return (
		<ThemeProvider theme={theme}>
			<Header SetUserInput={(input: UserInput) => SetUserInput(input)} />
			<LandingPage />
		</ThemeProvider>
	);
};

export default App;
