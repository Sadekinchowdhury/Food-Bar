import React from 'react';

const CardItem = ({ serv }) => {
    console.log(serv)
    const { img, name, price, description } = serv

    return (
        <div className=''>

            <div className="card  bg-base-100 shadow-xl border-x-2">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardItem;