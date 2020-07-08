import React from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	useScrollTrigger,
	TextField,
	Button,
	FormControl,
	MenuItem,
	Select,
	Dialog,
	DialogTitle,
	DialogContent,
	Grid,
	Theme,
	Divider
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FilterListIcon from '@material-ui/icons/FilterList';
import LocationOnIcon from '@material-ui/icons/LocationOn';

interface ElevationScrollProps {
	children: React.ReactElement;
}

interface HeaderProps {
	onSearchSubmit: Function;
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

const useStyles = makeStyles((theme: Theme) => ({
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
	},
	dialogContentContainer: {
		marginBottom: '1.5rem'
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	headerMargin: {
		...theme.mixins.toolbar,
		marginBottom: '1em'
		// [theme.breakpoints.down('md')]: {
		// 	marginBottom: '0.5em'
		// }
	}
}));

const Header = (): JSX.Element => {
	const [restaurant, setRestaurant] = React.useState<string | null>('');
	const [city, setCity] = React.useState<string>('');
	const [open, setOpen] = React.useState<boolean>(false);

	const classes = useStyles();
	const theme = useTheme();
	const isScreenSmall = useMediaQuery(theme.breakpoints.down('xs'));

	const handleTextChange = (
		event: React.ChangeEvent<{ value: unknown }>
	): void => {
		console.log(restaurant);
		setRestaurant(event.target.value as string);
	};

	const handleSelectChange = (
		event: React.ChangeEvent<{ value: unknown }>
	): void => {
		console.log(city);
		setCity(event.target.value as string);
	};

	const handleClose = (): void => {
		setOpen(false);
	};

	const handleOpen = (): void => {
		setOpen(true);
	};

	const searchBar = (
		<TextField
			id='standard-secondary'
			label='Restaurant Name'
			color='secondary'
			className={classes.searchBar}
			onChange={handleTextChange}
		/>
	);

	return (
		<React.Fragment>
			<ElevationScroll>
				<AppBar>
					<Toolbar disableGutters>
						<Typography className={classes.logo}>foodJunkie</Typography>
						{isScreenSmall ? null : searchBar}
						<Button
							startIcon={<FilterListIcon />}
							className={classes.filter}
							onClick={handleOpen}>
							Filter
						</Button>
						<Dialog open={open} onClose={handleClose}>
							<DialogTitle>Search Filter</DialogTitle>
							<Divider />
							<DialogContent>
								<Grid
									container
									className={classes.dialogContentContainer}
									spacing={2}
									justify='center'>
									<Grid item>{isScreenSmall ? searchBar : null}</Grid>
									<Grid item style={{ margin: 'left' }}>
										<Grid container alignItems='center'>
											<LocationOnIcon />
											<FormControl className={classes.formControl}>
												<Select
													value={city}
													onChange={handleSelectChange}
													displayEmpty
													className={classes.selectEmpty}
													inputProps={{ 'aria-label': 'Without label' }}>
													<MenuItem value='' disabled>
														Location
													</MenuItem>
													<MenuItem value='Auckland'>Auckland</MenuItem>
													<MenuItem value='Wellington'>Wellington</MenuItem>
													<MenuItem value='Christchurch'>Christchurch</MenuItem>
												</Select>
											</FormControl>
										</Grid>
									</Grid>
								</Grid>
							</DialogContent>
						</Dialog>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.headerMargin} />
		</React.Fragment>
	);
};

export default Header;
