import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServiceItem = ({ fod }) => {
    const { img, name, price, description, _id } = fod


    return (
        <div className='py-5'>

            <div className="card  bg-base-100 shadow-xl border-x-2">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='h-96' src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>




                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl font-semibold text-orange-600'>price: ${price}</p>
                    <p>{description.length > 100 ? description.slice(0, 100) + '...see more' : description}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/service/${_id}`}>Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;