import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import RevieItem from './RevieItem';

const Review = () => {

    const review = useLoaderData()

    const [UserRivew, setuserrivew] = useState([])


    useEffect(() => {

        fetch(`https://food-bars-sadekinchowdhury.vercel.app/users/${review._id}`)
            .then(res => res.json())
            .then(data => {

                setuserrivew(data)
                console.log(data)


            })


    }, [UserRivew])


    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">


                <tbody>

                    {

                        UserRivew.map(rivew => <RevieItem

                            key={rivew._key}
                            rivew={rivew}

                        >

                        </RevieItem>)
                    }

                </tbody>
            </table>
        </div>


    );
};

export default Review;