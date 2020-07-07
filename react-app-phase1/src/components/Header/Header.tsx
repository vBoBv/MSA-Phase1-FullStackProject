import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	useScrollTrigger,
	TextField,
	Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
	headerItem: {
		margin: 'auto'
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar>
					<Toolbar disableGutters>
						<Typography className={classes.headerItem}>foodJunkie</Typography>
						<TextField
							id='standard-secondary'
							label='Restaurant Name'
							color='secondary'
							className={classes.headerItem}
						/>
						<Button
							startIcon={<FilterListIcon />}
							className={classes.headerItem}>
							Filter
						</Button>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Toolbar />
		</React.Fragment>
	);
};

export default Header;
