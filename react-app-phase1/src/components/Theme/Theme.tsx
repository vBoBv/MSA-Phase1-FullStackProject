import { createMuiTheme } from '@material-ui/core/styles';

const lightGrey = '#eef2f3';
const softOrange = '#4ca2cd';

export default createMuiTheme({
	palette: {
		primary: {
			main: lightGrey
		},
		secondary: {
			main: softOrange
		}
	}
});
