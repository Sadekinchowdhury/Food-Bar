import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../Context/AuthProvider';
import RevieItem from './RevieItem';

const Review = () => {
    const { user } = useContext(AuthContext)
    const review = useLoaderData()
    const [userrivew, setuserrivew] = useState([review])
    useEffect(() => {

        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setuserrivew(data))
        console.log(userrivew)

    }, [])
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