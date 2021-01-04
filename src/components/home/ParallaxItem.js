import React from 'react';
import './css/ParallaxItem.css';

export default function ParallaxItem(props) {

    return (
        <div className="ParallaxItem">
            <div className={"shipping-inner " + props.pos}>
                <div className="subtitle">
                    <h2>{props.title}</h2>
                    <p>{props.dsc}</p>
                </div>
            </div>
        </div>
    )
}