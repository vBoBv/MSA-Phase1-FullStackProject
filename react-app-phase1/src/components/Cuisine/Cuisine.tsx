import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Collapse, Paper } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CuisineProps, RestaurantProps } from '../../common/Interfaces';
import american from '../../img/american.jpg';
import asian from '../../img/asian.jpg';
import european from '../../img/european.jpg';
import indian from '../../img/indian.jpg';
import japanese from '../../img/japanese.jpg';
import comingSoonImage from '../../img/comingSoon.png';

interface CuisinePageProps {
	cuisines: RestaurantProps[][];
	categories: CuisineProps[];
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		maxWidth: 345
	},
	container: {
		display: 'flex'
	},
	paper: {
		margin: theme.spacing(1)
	},
	svg: {
		width: 100,
		height: 100
	},
	polygon: {
		fill: theme.palette.common.white,
		stroke: theme.palette.divider,
		strokeWidth: 1
	},
	cuisineContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '85%',
		margin: 'auto',
		marginBottom: '1rem',
		gridGap: '1rem'
	}
}));

const Cuisine = ({ cuisines, categories }: CuisinePageProps) => {
	const classes = useStyles();
	const [checked, setChecked] = React.useState(false);
	cuisines.map((item) => console.log(item[0].restaurant.name));

	const handleCheck = () => {
		setChecked((prev) => !prev);
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
			<React.Fragment key={category.cuisine.cuisine_id}>
				<Card className={classes.root} onClick={handleCheck}>
					<CardActionArea>
						<CardMedia
							component='img'
							alt='Contemplative Reptile'
							height='140'
							image={renderDefaultPicture(index)}
							title='Contemplative Reptile'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{category.cuisine.cuisine_name}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</React.Fragment>
		);
	});

	return (
		<div>
			<div className={classes.cuisineContainer}>{renderCuisineCategory}</div>
			<div className={classes.container}>
				<Collapse in={checked}>
					<Paper elevation={4} className={classes.paper}>
						<svg className={classes.svg}>
							<polygon points='0,100 50,00, 100,100' className={classes.polygon} />
						</svg>
					</Paper>
				</Collapse>
			</div>
		</div>
	);
};

export default Cuisine;
