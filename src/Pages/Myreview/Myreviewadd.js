import React from 'react';
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const Myreviewadd = ({ rev, handlDelete, handlUpdate }) => {
    console.log(rev)
    const { user } = useContext(AuthContext)

    const { categori, name, food_name, username, RevieW, _id, status } = rev;
    return (


        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>

                        </th>
                        <th>userprofile</th>
                        <th>food name</th>
                        <th>Review</th>

                    </tr>
                </thead>
                <tbody>




                    <tr>
                        <th>
                            <label>
                                <button onClick={() => handlDelete(_id)} className="btn btn-square btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </label>
                        </th>
                        <th>
                            <button onClick={() => handlUpdate(_id)} className='btn-ghost'>{status ? status : 'pending'}</button>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user?.photoURL} alt='' />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold"> {username}</div>
                                    <div className="text-sm opacity-50">Brazil</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            {food_name}
                            <br />

                        </td>
                        <td> {RevieW}</td>

                    </tr>
                </tbody>


            </table>
        </div>



    );
};

export default Myreviewadd;