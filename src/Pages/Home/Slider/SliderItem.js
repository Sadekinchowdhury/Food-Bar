import React from 'react';
import './Slider.css'

const SliderItem = ({ slide }) => {
    const { image, id, prev, next } = slide

    return (
        <div className="carousel-item relative w-full  mx-20">
            <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carosel-img'>
                    < img src={image} alt='' className="w-full h-full absolute" />
                </div>

                <div className="absolute flex  transform -translate-y-1/2 top-1/3 w-1/3 left-24 ">
                    <h1 className='text-4xl  text-white font-bold' >Food Bar</h1>
                </div>

                <div className="absolute flex  transform -translate-y-1/2  mb-6  top-1/2 w-1/3 left-24 ">

                </div>


                <div className="absolute flex  transform -translate-y-1/2 bottom-1/4  w-1/3 left-24 ">
                    <button className="btn btn-outline btn-success mr-10  px-7">Success</button>
                    <button className="btn btn-outline btn-warning px-7">Warning</button>

                </div>
                <div className="absolute flex  transform -translate-y-1/2   right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-2 ">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div >

        </div >
    );
};

export default SliderItem;