import React from 'react';
import SliderItem from './SliderItem';
import img1 from '../../../assets/slider/img1.webp'
import img2 from '../../../assets/slider/img2.webp'
import img3 from '../../../assets/slider/img3.webp'
import img4 from '../../../assets/slider/img4.webp'

const Slider = () => {

    const slider = [
        {
            image: img1,
            id: 1,
            prev: 4,
            next: 2
        },
        {
            image: img2,
            id: 2,
            prev: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            prev: 2,
            next: 4
        },
        {
            image: img4,
            id: 4,
            prev: 3,
            next: 1
        }
    ]
    return (
        <div className="carousel  py-10">
            {
                slider.map(slide => <SliderItem
                    key={slide.id}
                    slide={slide}
                >

                </SliderItem>)
            }

        </div>
    );
};

export default Slider;