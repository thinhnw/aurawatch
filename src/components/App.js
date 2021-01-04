import React from 'react';
import Menu from './partials/Menu';
import Footer from './partials/Footer';
import Banner from './home/Banner';
import SubBanner from './home/SubBanner';
import Parallax from './home/Parallax';
import BestSellers from "./home/BestSellers";
import Testimonial from "./home/Testimonial";
import LatestNews from './home/LastestNews';
import ShopBySize from "./home/ShopBySize";
import PageTitleBanner from "./partials/PageTitleBanner";
import LogIn from "./users/LogIn";
import SignUp from "./users/SignUp";
import ProductDetail from "./products/ProductDetail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ProductsListing from "./category/ProductsListing";

export default function App() {

    return (
    <Router>
        <Menu />
        <div>
            <Switch>
                <Route path="/category">
                    <Category />
                </Route>
                <Route path='/detail'>
                    <Product />
                </Route>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path='/signup'>
                    <SignUpPage />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
        <Footer />
    </Router>
    );
}
function Home() {
    return (
        <div>
            <Banner />
            <SubBanner />
            <BestSellers />
            <Parallax />
            <ShopBySize />
            <Testimonial />
            <LatestNews />
        </div>
    )
}
function Category() {
    return (
        <div>
            <PageTitleBanner title="Collections"/>
            <ProductsListing />
        </div>
    )
}
function LogInPage() {
    return (
        <div>
            <PageTitleBanner title="Customer Login" />
            <LogIn/>
        </div>
    )
}
function SignUpPage() {
    return (
        <div>
            <PageTitleBanner title="CREATE NEW ACCOUNT"/>
            <SignUp />
        </div>
    )
}
function Product() {
    return (
        <div>
            <PageTitleBanner title="Tizzy watch ipsum"/>
            <ProductDetail />
        </div>
    )
}
