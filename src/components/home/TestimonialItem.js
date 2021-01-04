import React from 'react';
import './css/TestimonialItem.css';

export default function TestimonialItem(props) {

    return (
        <div className="TestimonialItem">
            <img src={props.img} alt=""/>
            <p>{props.comment}</p>
            <h3 className={"author"}>{props.author}</h3>
        </div>
    )
}