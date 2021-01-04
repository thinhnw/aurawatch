import React from 'react';

export default function BannerSlide(props) {

    return (
        <div className="banner__slide fade" style={{ display: "block"}}>
            <a href="/#">
                <img src={props.img} style={{width: "100%"}} alt="" />
            </a>
        </div>
    )
}