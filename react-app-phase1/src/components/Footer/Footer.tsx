import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
	footer: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'center',
		marginTop: '2rem',
		paddingBottom: '1rem'
	},
	footerHeading: {
		fontSize: '0.8rem'
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.footer}>
			<Typography className={classes.footerHeading}>Microsoft Student Accelarator 2020 / Phase 1</Typography>
			<Typography className={classes.footerHeading}>&copy; All Rights Reserved By Ponhvath Vann</Typography>
		</div>
	);
};

export default Footer;
