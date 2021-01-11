import React from 'react';
import './css/AboutUs.css';
import PageTitleBanner from "../partials/PageTitleBanner";

export default function AboutUs() {

    return (
        <div className="AboutUs">
            <PageTitleBanner title="ABOUT US"/>
            <div className="AboutUs_container">
                <h1>
                    ABOUT AURA WATCH
                </h1>
                <p>
                    An uncompromising effort to exceed expectations. An incredible focus on the customers needs. The most competitive pricing you can find online.
                </p>
                <p>
                    Aura Watch is a leading fashion retailer in watches, handbags, and sunglasses. We also sell jewelry, crystal, fine writing instruments, apparel, and shoes.
                </p>
                <p>
                    Aura Watch believes that everyone should be able to wear what they love, and do so at the right price. Our incredible platform allows shoppers to quickly and easily find exactly what they want from over 650 world renowned brands and 75,000 unique items.
                </p>
                <p>
                    We pride ourselves on our ability to deliver the best prices, most varied selection, and finest customer service. Throughout the past three decades we’ve committed to innovation in both the fashion and technological landscape.
                </p>
                <p>
                    Our goal has and always will be to earn the trust and satisfaction of our customers. Our customer service specialists are always ready to assist, and our state of the art New York City fulfillment center is always capable of swiftly delivering products to over 150 countries.
                </p>
                <p>
                    Should you have any comments or questions, we are available to assist via phone, live chat or email!
                </p>
                <p>
                    Remember, all transactions are digitally encrypted using the latest technologies and we never share your information.
                </p>
            </div>
        </div>
    )
}