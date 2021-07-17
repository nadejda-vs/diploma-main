import React, { useState } from 'react';
import { photos } from '../photos';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import './main.css';

const ImageSlider = ({ slides, findId }) => {
	const [current, setCurrent] = useState(+findId);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
			{photos.map((slide, index, item) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={index}
					>
						{index === current && (
							<img src={slide.src} alt="photos" className="image" />
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
