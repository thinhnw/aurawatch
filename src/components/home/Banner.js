import React, { useState, useEffect } from 'react';
import './css/Banner.css';
import mainBannerA from './images/main-banner1.jpeg';
import mainBannerB from './images/main-banner2.jpeg';
import mainBannerC from './images/main-banner3.jpeg';
import BannerSlide from './BannerSlide';

export default function Banner() {

	let slides = [ mainBannerA, mainBannerB, mainBannerC ];
	const [ currentSlide, setCurrentSlide ] = useState(0);
	let auto;

	function handleNext() {
		setCurrentSlide( currentSlide + 1 >= slides.length ? 0 : currentSlide + 1);
		clearTimeout(auto);
	}

	function handlePrev() {
		clearTimeout(auto);
		setCurrentSlide( currentSlide === 0 ? slides.length-1 : currentSlide - 1);
	}

	useEffect(() => {
		auto = setTimeout(() => setCurrentSlide(currentSlide === slides.length-1 ? 0 : currentSlide+1), 5000)
	});

	return (
		<div className="banner">
			<div className="banner__slideshow">
				<BannerSlide img={slides[currentSlide]}/>
			</div>
			<button className="Banner-prev" onClick={handlePrev}>

			</button>
			<button className="Banner-next" onClick={handleNext}>

			</button>

		</div>
	);
}
