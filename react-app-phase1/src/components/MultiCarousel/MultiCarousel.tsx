import React from 'react';
import Carousel from 'react-multi-carousel';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	IconButton,
	Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { Share as ShareIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import 'react-multi-carousel/lib/styles.css';
import { inherits } from 'util';

interface MultiCarouselProps {
	label: string;
	data: any[];
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: 370
			// maxWidth: 'inherit'
		},
		media: {
			height: 0,
			paddingTop: '56.25%' // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		avatar: {
			backgroundColor: red[500]
		},
		carouselContainer: {
			width: '80%',
			margin: 'auto'
		},
		carouselItem: {
			display: 'flex',
			justifyContent: 'center'
			// flex: '0 0 100%',
			// margin: 'auto'
		}
	})
);

const MutliCarousel = ({ label, data }: MultiCarouselProps) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	console.log(data);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	const renderCard = data.map((item) => {
		return (
			<div key={item.restaurant.name} className={classes.carouselItem}>
				{/* <div key={item.restaurant.name}> */}
				<Card className={classes.root}>
					<CardHeader
						title={item.restaurant.name}
						subheader={`Rating: ${item.restaurant.user_rating.aggregate_rating}`}
					/>
					<CardMedia className={classes.media} image={item.restaurant.featured_image} title={item.restaurant.name} />
					<CardActions disableSpacing>
						<IconButton aria-label='share'>
							<ShareIcon />
						</IconButton>
						<IconButton
							className={clsx(classes.expand, {
								[classes.expandOpen]: expanded
							})}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label='show more'>
							<ExpandMoreIcon />
						</IconButton>
					</CardActions>
					<Collapse in={expanded} timeout='auto' unmountOnExit>
						<CardContent>
							<Typography paragraph>
								Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring,
								until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp
								and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened
								and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
							</Typography>
							<Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		);
	});

	return (
		<div className={classes.carouselContainer}>
			{/* <div> */}
			<Typography variant='h4' gutterBottom>
				{label}
			</Typography>
			<Carousel responsive={responsive}>{renderCard}</Carousel>
		</div>
	);
};

export default MutliCarousel;
