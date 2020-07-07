import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	useScrollTrigger,
	TextField,
	Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import FilterListIcon from '@material-ui/icons/FilterList';
import './Header.css';

interface ElevationScrollProps {
	children: React.ReactElement;
}

const ElevationScroll = ({ children }: ElevationScrollProps): JSX.Element => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0
	});

	return React.cloneElement(children, {
		elevation: trigger ? 4 : 0
	});
};

const useStyles = makeStyles((theme) => ({
	logo: {
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			marginLeft: '1rem'
		}
	},
	searchBar: {
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			margin: 'auto'
		}
	},
	filter: {
		margin: 'auto',
		[theme.breakpoints.down('xs')]: {
			marginRight: '1rem'
		}
	}
}));

const Header = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('xs'));

	const searchBar = (
		<TextField
			id='standard-secondary'
			label='Restaurant Name'
			color='secondary'
			className={classes.searchBar}
		/>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar>
					<Toolbar disableGutters>
						<Typography className={classes.logo}>foodJunkie</Typography>
						{isScreenSmall ? null : searchBar}
						<Button startIcon={<FilterListIcon />} className={classes.filter}>
							Filter
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
		</React.Fragment>
	);
};

export default Header;
