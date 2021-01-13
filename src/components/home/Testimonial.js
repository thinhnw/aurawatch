import React, {useEffect, useState} from 'react';
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
            comment:"I would like to personally thank you for your outstanding product. Thank you for making it painless, pleasant and most of all hassle free! I will recommend you to my colleagues."
        },
        {
            img: img2,
            author: "Taylor Swift - Singer",
            comment: "It's exactly what I've been looking for. I couldn't have asked for more than this. The watches here are both attractive and highly adaptable."
        },
        {
            img: img3,
            author: "Josh Dun - Artist",
            comment: "Colosseum Sterling watch is awesome! I would gladly pay over 600 dollars for this watch. I could probably go into sales for you. I don't know what else to say."
        }
    ];

    function handleNext() {
        setIndex( index + 1 >= testimonial.length ? 0 : index + 1);
    }

    function handlePrev() {
        setIndex( index === 0 ? testimonial.length-1 : index - 1);
    }

    useEffect(() => {
        setTimeout(handleNext, 5000);
    } )

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