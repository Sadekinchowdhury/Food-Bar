import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import RevieItem from './RevieItem';

const Review = () => {
    const { user } = useContext(AuthContext)
    const review = useLoaderData()
    const [loading, setloading] = useState(true)
    const [userrivew, setuserrivew] = useState([review])
    useEffect(() => {

        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setuserrivew(data)
                setloading(false)


            })


    }, [user?.email])
    return (
        <div>
            {
                userrivew.map(set => <RevieItem


                    key={set._id}
                    set={set}

                >

                </RevieItem>)

            }
        </div>
    );
};

export default Review;