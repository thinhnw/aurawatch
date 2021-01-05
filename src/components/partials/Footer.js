import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import "./css/Footer.css";

const useStyles = makeStyles(() => ({

	root: {
		flexGrow: 1,
	},
}));

export default function Footer() {

	const classes = useStyles();

	return (
		<footer id="footer" className="Footer">
			<div className="Footer_container">
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={3}>
							<div className="Footer_item Footer_info">
								<h3>INFORMATION</h3>
								<ul>
									<li>About Us</li>
									<li>Delivery Information</li>
									<li>Privacy Policy</li>
									<li>Terms & Conditions</li>
								</ul>
							</div>
						</Grid>
						<Grid item xs={6} style={{ paddingBottom: "0px"}}>
							<div className="Footer_item Footer_item-middle Footer_subscription">
								<h1>AURA WATCH</h1>
								<p>
									New collections are coming out every month. Sign up for exclusive email offers & more
								</p>
								<form action="/#">
									<input type="email" name="email" id="email" placeholder={"Enter your email address"}/>
								</form>
							</div>
						</Grid>
						<Grid item xs={3}>
							<div className="Footer_item Footer_contact">
								<h3>CONTACTS</h3>
								<p>Honour custom Site Designs
									600, Boltacusta avenue apt.
									Mesa,California</p>
								<p>info@customdesign.com</p>
								<p>(+91) 90-3399-1938</p>
							</div>
						</Grid>
						<div className="Footer_container-break"> </div>
						<Grid item xs={3}>
							<div className="Footer_item Footer_payment">
								<ul className="Footer_payment-icon">
									<li className="visa"><a href="/#"> </a></li>
									<li className="master"><a href="/#"> </a></li>
									<li className="discover"><a href="/#"> </a></li>
									<li className="paypal"><a href="/#"> </a></li>
								</ul>
							</div>
						</Grid>
						<Grid item xs={6}>
							<div className="Footer_item Footer_item-middle Footer_copyright">
								Copyright © 2020. All rights reserved.
							</div>
						</Grid>
						<Grid item xs={3}>
							<div className="Footer_item Footer_social">
								<ul className="Footer_social-icon">
									<li className="google"><a href="/#"> </a></li>
									<li className="facebook"><a href="/#"> </a></li>
									<li className="twitter"><a href="/#"> </a></li>
									<li className="linkedin"><a href="/#"> </a></li>
									<li className="rss"><a href="/#"> </a></li>
								</ul>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>

		</footer>
	);
}
