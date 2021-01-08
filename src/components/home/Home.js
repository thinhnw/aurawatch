import React from 'react';
import Banner from "./Banner";
import SubBanner from "./SubBanner";
import BestSellers from "./BestSellers";
import Parallax from "./Parallax";
import ShopBySize from "./ShopBySize";
import Testimonial from "./Testimonial";
import LatestNews from "./LastestNews";

export default function Home() {
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