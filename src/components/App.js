import React from 'react';
import Menu from './partials/Menu';
import Footer from './partials/Footer';
import LogIn from "./users/LogIn";
import SignUp from "./users/SignUp";
import Blog from "./blog/Blog";
import ProductDetail from "./products/ProductDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./home/Home";
import Category from "./category/Category";
import AboutUs from "./home/AboutUs";
import Contact from "./home/Contact";
import BackToTopButton from "./partials/BackToTopButton";
import CheckOut from "./checkout/CheckOut";

export default function App() {

    return (
        <Router>
            <Menu />
            <Switch>
                <Route path="/category" component={Category} />
                <Route path='/watches' component={ProductDetail}/>
                <Route exact path="/login" component={LogIn}/>
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/about' component={AboutUs}/>
                <Route exact path='/contact' component={Contact}/>
                <Route path='/checkout' component={CheckOut}/>
                <Route exact path="/" component={Home}/>
                <Route component={Home}/>
            </Switch>
            <BackToTopButton />
            <Footer />
        </Router>
    );
}
