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
                <Route exact path="/" component={Home}/>
                <Route component={Home}/>
            </Switch>
            <Footer />
        </Router>
    );
}
