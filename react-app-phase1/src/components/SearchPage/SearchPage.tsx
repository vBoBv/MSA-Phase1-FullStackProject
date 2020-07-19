import React, { useState, useEffect } from 'react';
import RestaurantList from '../RestaurantList/RestaurantList';
import { RestaurantProps } from '../../common/Interfaces';
import ProgressBar from '../ProgressBar/ProgressBar';
import { Typography, Paper } from '@material-ui/core';
import { Theme, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

interface SearchPageProps {
	restaurantData: RestaurantProps[];
}

const useStyles = makeStyles((theme: Theme) => ({
	resultFound: {
		textAlign: 'center',
		marginBottom: '1rem'
	},
	resultNotFound: {
		minHeight: '75vh',
		padding: '1rem',
		margin: '3rem',
		backgroundColor: '#D3D3D3',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchIcon: {
		fontSize: '5rem',
		fill: '#A9A9A9'
	},
	dataLength: {
		fontFamily: 'Changa, sans-serif',
		fontSize: '1rem',
		color: theme.palette.secondary.main
	}
}));

const SearchPage = ({ restaurantData }: SearchPageProps) => {
	const classes = useStyles();
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setHidden(false);
		}, 3500);
	}, []);

	const renderDataLength = () => {
		if (restaurantData.length > 0) {
			return (
				<div className={classes.resultFound}>
					<Typography variant='caption'>
						There are <span className={classes.dataLength}>{restaurantData.length}</span> results match your search
						term.
					</Typography>
				</div>
			);
		} else {
			return (
				<Paper className={classes.resultNotFound} elevation={3}>
					<SearchIcon className={classes.searchIcon} />
					<Typography>Sorry, No Result Found</Typography>
				</Paper>
			);
		}
	};

	const renderRestaurantList = restaurantData.map((item) => {
		return (
			<React.Fragment key={item.restaurant.id}>
				<RestaurantList data={item} />
			</React.Fragment>
		);
	});

	return (
		<div>
			{hidden ? (
				<ProgressBar />
			) : (
				<React.Fragment>
					{renderDataLength()}
					{renderRestaurantList}
				</React.Fragment>
			)}
		</div>
	);
};

export default SearchPage;
