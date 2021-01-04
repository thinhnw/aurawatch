import React, { useState } from 'react';
import './css/Testimonial.css';
import TestimonialItem from './TestimonialItem';
import img1 from './images/testimonial_img1.jpeg';
import img2 from './images/testimonial_img2.jpeg';
import img3 from './images/testimonial_img3.jpeg';

export default function Testimonial() {

    const [ index, setIndex ] = useState(0);

    const testimonial = [
        {
            img: img1,
            author: "Chuck Norris - Wrestler",
            comment:"Majority have suffered alteration in aome from, by injected believable.There varation words able s, but also the leap into electronic typesetting, 1960s with the release of Letraset sheetpassage."
        },
        {
            img: img2,
            author: "Taylor Swift - Singer",
            comment: "LLorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet aut cum, exercitationem illum minima suscipit temporibus? Consequatur eaque expedita harum illum nisi nulla omnis, quas, quia recusandae, repudiandae undeorem"
        },
        {
            img: img3,
            author: "Josh Dun - Artist",
            comment: " Aliquam amet aut cum, exercitationem illum minima suscipit temporibus? Consequatur eaque expedita harum illum nisi nulla omnis, quas, quia recusandae, repudiandae undeorem. LLorem ipsum dolor sit amet, consectetur adipisicing elit."
        }
    ];

    function handleNext() {
        setIndex( index + 1 >= testimonial.length ? 0 : index + 1);
    }

    function handlePrev() {
        setIndex( index === 0 ? testimonial.length-1 : index - 1);
    }

    return (
        <div className="Testimonial">
            <div className="Testimonial_container">
                <TestimonialItem
                    img={testimonial[index].img}
                    author={testimonial[index].author}
                    comment={testimonial[index].comment}
                />
                <button className="Testimonial-prev" onClick={handlePrev}>

                </button>
                <button className="Testimonial-next" onClick={handleNext}>

                </button>
            </div>
        </div>
    );
}