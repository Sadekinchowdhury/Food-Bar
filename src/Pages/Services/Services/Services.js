import React from 'react';
import { useLoaderData } from 'react-router';
import ServiceItem from './ServiceItem';

const Services = () => {
    const food = useLoaderData()
    console.log(food)
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                food.map(fod => <ServiceItem
                    key={fod._id}
                    fod={fod}

                >


                </ServiceItem>)
            }
        </div>
    );
};

export default Services;