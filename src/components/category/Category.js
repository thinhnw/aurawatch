import React from 'react';
import ProductsListing from "./ProductsListing";
import PageTitleBanner from "../partials/PageTitleBanner";

export default function Category() {
    return (
        <div>
            <PageTitleBanner title={"Collection"}/>
            <ProductsListing />
        </div>
    )
}