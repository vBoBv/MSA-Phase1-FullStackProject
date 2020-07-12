import React from 'react';
import { Theme, makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery, Divider } from '@material-ui/core';
import PinDropIcon from '@material-ui/icons/PinDrop';
import StarsIcon from '@material-ui/icons/Stars';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme: Theme) => ({
	gridContainer: {
		alignItems: 'start',
		width: '60%',
		margin: 'auto',
		backgroundColor: 'silver'
	},
	gridItem: {
		height: '14rem',
		[theme.breakpoints.down('md')]: {
			height: '10rem'
		},
		[theme.breakpoints.down('sm')]: {
			// width: 'inherit'
		},
		[theme.breakpoints.down('xs')]: {
			// width: 'inherit'
		}
	},
	imgContainer: {
		height: 'inherit'
	},
	infoContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	iconContainer: {
		marginRight: '0.5rem'
	},
	gridInfo: {
		marginLeft: '1rem',
		width: 'inherit',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '0rem',

			width: '10rem'
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: '0rem',

			width: '10rem'
		}
	}
}));

const RestaurantList = () => {
	const classes = useStyles();
	const theme = useTheme();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Grid container direction='row' className={classes.gridContainer}>
			<Grid item className={classes.gridItem}>
				<img
					alt='custom software icon'
					src='https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
					className={classes.imgContainer}
				/>
			</Grid>
			<Grid item className={classes.gridInfo}>
				<Typography variant='h5' gutterBottom component='h2'>
					Fast Horse
				</Typography>
				<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={classes.infoContainer}>
					<StarsIcon className={classes.iconContainer} />
					4.5
				</Typography>
				<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={classes.infoContainer}>
					<PinDropIcon className={classes.iconContainer} />
					Federal, Auckland
				</Typography>
				<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={classes.infoContainer}>
					<PhoneIcon className={classes.iconContainer} />
					021 3432456
				</Typography>
			</Grid>
			<Divider />
			<Grid item className={classes.gridItem}>
				<img
					alt='custom software icon'
					src='https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'
					className={classes.imgContainer}
				/>
			</Grid>
			<Grid item className={classes.gridInfo}>
				<Typography variant='h5' gutterBottom component='h2'>
					Fast Horse
				</Typography>
				<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={classes.infoContainer}>
					<StarsIcon className={classes.iconContainer} />
					4.5
				</Typography>
				<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={classes.infoContainer}>
					<PinDropIcon className={classes.iconContainer} />
					Federal, Auckland
				</Typography>
				<Typography gutterBottom variant='body2' color='textSecondary' component='p' className={classes.infoContainer}>
					<PhoneIcon className={classes.iconContainer} />
					021 3432456
				</Typography>
			</Grid>
			<Divider />
		</Grid>
	);
};

export default RestaurantList;
