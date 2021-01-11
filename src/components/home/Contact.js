import React from 'react';
import './css/Contact.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageTitleBanner from "../partials/PageTitleBanner";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));
export default function Contact() {

    const classes = useStyles();
    return (
        <div className="Contact">
            <PageTitleBanner title="Contact Us"/>
            <div className="Contact_container">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div className="Contact_Info">
                                <h1>CONTACT US</h1>
                                <a href="mailto:aurawatch@aurawatch.org">Mail: aurawatch@aurawatch.org</a>
                                <p>Phone: +84 24 7300 8855 </p>
                                <p>Address: 8A Ton That Thuyet, My Dinh, Nam Tu Liem, Hanoi 100000, Vietnam</p>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="Contact_map">
                                <iframe title={"StoreLocator"}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.397056385248!2d105.7800937146539!3d21.028816893152936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455f9bdf0e1c7%3A0x26caee8e7662dd9b!2zRlBUIEFwdGVjaCBIw6AgTuG7mWk!5e1!3m2!1svi!2s!4v1610336523006!5m2!1svi!2s"
                                    width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""
                                    aria-hidden="false" tabIndex="0">
                                </iframe>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}