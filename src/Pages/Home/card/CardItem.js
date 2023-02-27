import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const CardItem = ({ serv }) => {
    console.log(serv)
    const { img, name, price, description, _id } = serv

    function openFullscreen() {
        document.getElementById('image')?.requestFullscreen()
    }
    openFullscreen()

    return (
        <div className='m-4'>

            <div className="card  bg-base-100 shadow-xl border-x-2">
                <figure>
                    <PhotoProvider>
                        <PhotoView src="/1.jpg">
                            <img id='image' className='h-96' src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>

                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl font-semibold text-orange-600'>price: ${price}</p>
                    <p>{description.length > 100 ? description.slice(0, 100) + '...see more' : description}</p>
                    <div className="card-actions justify-end">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><Link to={`/service/${serv._id}`}>Details</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;