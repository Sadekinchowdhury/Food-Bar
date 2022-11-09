import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const RevieItem = ({ rivew }) => {
    console.log(rivew)
    const { user } = useContext(AuthContext)
    const { RevieW, food_name, username } = rivew;
    return (
        <div className="card border-4 mt-4 w-full grid sm:grid-cols-1 lg:grid-cols-2 position bg-base-100 shadow-xl">
            <div className='top-1/3 flex py-5'>
                <div className='flex'>
                    <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="Shoes" /> <p className='ml-3'>{username}</p>
                    <br />

                </div>



            </div>
            <div className="">
                <p className='font-bold text-orange-600'>food name: {food_name}</p>
                <p> {RevieW}</p>

            </div>

        </div>
    );
};

export default RevieItem;