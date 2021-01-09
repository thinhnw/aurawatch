import React from "react";
import './css/Users.css';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PageTitleBanner from "../partials/PageTitleBanner";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function LogIn() {
    const classes = useStyles();
    return (
        <div className="Users">
            <PageTitleBanner title={"Log In"}/>
            <div className="Users_inner">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <div className="Users_left-container">
                                <form action="/">
                                    <h2 className="Users_title">Registered Customers</h2>
                                    <p className="Users_dsc">If you have an account, sign in with your email address</p>
                                    <div className="Users_form-control">
                                        <label htmlFor="email" className="Users_email-label">
                                            <span>Email</span>
                                        </label>
                                        <br/>
                                        <input type="mail" name="email" className="Users_email" required/>
                                    </div>
                                    <div className="Users_form-control">
                                        <label htmlFor="password" className="Users_password-label">
                                            <span>Password</span>
                                        </label>
                                        <br/>
                                        <input type="password" name="password" className="Users_password" required minLength={6}/>
                                    </div>
                                    <div className="Users_form-control">
                                        <button className="Users_primary-button">Sign In</button>
                                        <Link to="/passwordreset" className="Users_secondary-button">Forget your password?</Link>
                                    </div>
                                </form>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="Users_right-container">
                                <h2 className="Users_title">New Customers</h2>
                                <p className="Users_dsc">Creating an account has many benefits: check out faster, keep more than one address, track orders and more</p>
                                <Link to='/signup' className="Users_primary-button">Create An Account</Link>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
