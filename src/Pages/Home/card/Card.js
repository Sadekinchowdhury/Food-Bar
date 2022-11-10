import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardItem from './CardItem';

const Card = () => {
    const [servic, setServic] = useState([])
    useEffect(() => {

        fetch('https://food-bars-sadekinchowdhury.vercel.app/home')
            .then(res => res.json())
            .then(data => setServic(data))

    }, [])
    return (
        <div>
            <div className='text-center mb-6'>
                <h1 className='text-5xl text-orange-500 font-bold'>Welcome to the FoodBar</h1>
                <p className='mt-3'>You can choose your best food.Click any food what you want to buy </p>

            </div>
            <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    servic.map(serv =>
                        <CardItem
                            key={serv._id}
                            serv={serv}
                        >


                        </CardItem>

                    )


                }
            </div>

            <div className='text-center
            py-6'>
                <Link to="/service"> <button className="btn btn-outline btn-info px-5"><p className='text-black'>see more</p></button></Link>
            </div>
        </div>
    );
};

export default Card;