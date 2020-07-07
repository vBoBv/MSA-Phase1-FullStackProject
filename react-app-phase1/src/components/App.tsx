import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './Header/Header';
import theme from './Theme/Theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
};

export default App;
