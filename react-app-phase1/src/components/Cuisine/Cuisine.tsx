import React, { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Collapse, Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CuisineProps, RestaurantProps } from '../../common/Interfaces';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import american from '../../img/american.jpg';
import asian from '../../img/asian.jpg';
import european from '../../img/european.jpg';
import indian from '../../img/indian.jpg';
import japanese from '../../img/japanese.jpg';
import comingSoonImage from '../../img/comingSoon.png';
import MutliCarousel from '../MultiCarousel/MultiCarousel';
import bgImg from '../../img/bgImg2.jpg';

interface CuisinePageProps {
	cuisines: RestaurantProps[][];
	categories: CuisineProps[];
}

const useStyles = makeStyles((theme: Theme) => ({
	cardContainer: {
		maxWidth: 400,
		[theme.breakpoints.down('sm')]: {
			minWidth: 280
		}
	},
	cuisineContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '85%',
		marginBottom: '1rem',
		gridGap: '1rem'
	},
	collapseContainer: {
		backgroundColor: theme.palette.primary.main,
		borderRadius: '1rem',
		margin: '1rem'
	},
	cuisineRootContainer: {
		backgroundImage: `url(${bgImg})`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundAttachment: 'fixed',
		backgroundRepeat: 'no-repeat',
		minHeight: '40vh',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '1rem'
	},
	cuisineSubHeading: {
		fontFamily: 'Changa, sans-serif',
		fontSize: '3rem',
		color: 'white',
		[theme.breakpoints.down('md')]: {
			marginTop: '1rem',
			fontSize: '2.6rem'
		},
		[theme.breakpoints.down('sm')]: {
			marginTop: '1rem',
			fontSize: '2.3rem'
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '1rem',
			fontSize: '1.3rem'
		}
	},
	cardContent: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
}));

const Cuisine = ({ cuisines, categories }: CuisinePageProps) => {
	const classes = useStyles();
	const [checked, setChecked] = useState(false);
	const [selectedCuisineName, setSelectedCuisineName] = useState(
		'American' || 'Asian' || 'European' || 'Indian' || 'Japan'
	);
	const [selectedCuisine, setSelectedCuisine] = useState<RestaurantProps[]>([]);

	const handleCheck = (cuisineName: string) => {
		if (cuisines.length > 0) {
			for (let i = 0; i < cuisines.length; i++) {
				if (cuisines[i][0].restaurant.cuisines?.includes(cuisineName)) {
					setSelectedCuisine(cuisines[i]);
				}
			}

			if (cuisineName === selectedCuisineName) {
				setTimeout(() => {
					setChecked((prev) => !prev);
				}, 600);
			} else if (cuisineName !== selectedCuisineName && !checked) {
				setTimeout(() => {
					setChecked((prev) => !prev);
					setSelectedCuisineName(cuisineName);
				}, 600);
			} else {
				setSelectedCuisineName(cuisineName);
			}
		}
	};

	const renderDefaultPicture = (num: number) => {
		switch (num) {
			case 0:
				return american;
			case 1:
				return asian;
			case 2:
				return european;
			case 3:
				return indian;
			case 4:
				return japanese;
			default:
				return comingSoonImage;
		}
	};

	const renderCuisineCategory = categories.map((category, index) => {
		return (
			<Grid item md key={category.cuisine.cuisine_id}>
				<Card className={classes.cardContainer} onClick={() => handleCheck(category.cuisine.cuisine_name)}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image={renderDefaultPicture(index)}
							title='Contemplative Reptile'
						/>
						<CardContent className={classes.cardContent}>
							<Typography variant='h5' component='h2' align='center'>
								{category.cuisine.cuisine_name}
							</Typography>
							<ArrowDropDownCircleIcon />
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		);
	});

	const renderSelectedCuisine = () => {
		return (
			<Collapse in={checked} timeout={500}>
				<MutliCarousel
					label='Here is our recommendations...'
					data={selectedCuisine}
					style={classes.collapseContainer}
				/>
			</Collapse>
		);
	};

	return (
		<React.Fragment>
			<div className={classes.cuisineRootContainer}>
				<Typography variant='h5' className={classes.cuisineSubHeading} gutterBottom>
					Choose your favourite cuisine
				</Typography>

				<Grid container className={classes.cuisineContainer}>
					{renderCuisineCategory}
				</Grid>
			</div>
			{renderSelectedCuisine()}
		</React.Fragment>
	);
};

export default Cuisine;
