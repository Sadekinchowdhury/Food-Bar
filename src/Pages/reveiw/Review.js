import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import RevieItem from './RevieItem';

const Review = () => {
    const { user } = useContext(AuthContext)

    const review = useLoaderData()

    const [userrivew, setuserrivew] = useState([])


    useEffect(() => {

        fetch(`http://localhost:5000/users/${review._id}`)
            .then(res => res.json())
            .then(data => {
                setuserrivew(data)
                console.log(data)


            })


    }, [userrivew])


    return (

        <div className="overflow-x-auto w-full">
            <table className="table w-full">


                <tbody>

                    {

                        userrivew.map(rivew => <RevieItem

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