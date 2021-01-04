import React, { useState } from 'react';
import './css/SubBannerItem.css';

export default function SubBannerItem(props) {

    const [ hover, setHover ] = useState(false);

    function handleMouseOver() {
        setHover(true);
    }

    function handleMouseOut() {
        setHover(false);
    }

    return (
        <div className="SubBannerItem">
            <a className="image-wrapper" href="/#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={props.img} alt="" />
                <div className={"dsc " + (hover && "onMouseOver")}>
                    <button className="dsc-tag">{props.tag}</button>
                    <h2>{props.title}</h2>
                    <div className="linebreak"></div>
                    <p>{props.desc}</p>
                </div>
            </a>

        </div>

)
}