import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';
import zomato from './api/zomato';

const App = () => {
	const [term, setTerm] = useState('Auckland');

	useEffect(() => {
		const search = async () => {
			const { data } = await zomato.get('/locations', {
				params: {
					query: term
				}
			});
			console.log(data);
		};
		search();
	}, [term]);

	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
};

export default App;
