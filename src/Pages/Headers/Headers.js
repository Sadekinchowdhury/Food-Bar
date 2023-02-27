import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthProvider';


const Headers = () => {
    const { user, LogOut } = useContext(AuthContext)

    const handLogout = () => {
        LogOut()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const menubar = <>
        <li>

            <Link className='font-semibold' to={'/'}>Home</Link>
            <Link className='font-semibold' to={'/service'}>Services</Link>


        </li></>



    return (
        <div className='bg-red-600'>
            <div className='align-middle'>
                <div className="h-20 pt-11 mb-12 navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-48">
                                {menubar}

                                <li>



                                    {
                                        user?.uid ? <>


                                            <Link className='font-semibold' to={'/serviceAdd'}>Add Services</Link>
                                            <Link className='font-semibold' to={'/review'}>My review</Link>
                                            <Link className=''>
                                                <button onClick={handLogout} className="btn btn-outline">LogOut</button>
                                            </Link>
                                            {

                                                <Link className=''>

                                                    <Image
                                                        title={user?.displayName}
                                                        src={user?.photoURL
                                                        }
                                                        className='w-10 border-2 ml-4 rounded-full'


                                                    ></Image>

                                                </Link>
                                            }

                                        </>
                                            :
                                            <>
                                                <Link className='font-semibold' to={'/login'}>Login</Link>

                                                <Link className='font-semibold' to={'/signup'}>SignUp</Link>

                                            </>
                                    }


                                </li>

                            </ul>
                        </div>
                        <div className='lg:flex'>
                            <div>
                                <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img className='lg:h-6 lg:w-6' src='https://pic.onlinewebfonts.com/svg/img_415179.png' alt='' /></Link>
                            </div>

                        </div>
                        <div>
                            <Link className='btn-ghost inline-block text-block lg:text-3xl text-orange-600 font-bold'>Food-Bar</Link>
                        </div>
                        {/* <div>
                            <input className='border-2 px-0 lg:px-16 ml-20'></input>
                        </div> */}
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="menu items-center menu-horizontal p-0">
                            {menubar}


                            <li>


                                <Link className='font-semibold ' to={'/blog'}>Blog</Link>

                                {
                                    user?.uid ? <>

                                        <Link className='font-semibold' to={'/serviceAdd'}>Add Services</Link>
                                        <Link className='font-semibold' to={'/review'}>My review</Link>
                                        <Link>


                                            <button onClick={handLogout} className="font-semibold">LogOut</button>
                                        </Link>
                                        {

                                            <Link className='dropdown menu  '>
                                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                    <ul>
                                                        <li>

                                                            <a href="">name</a>
                                                        </li>
                                                    </ul>
                                                </label>
                                                <Image
                                                    title={user?.displayName}
                                                    src={user?.photoURL
                                                    }
                                                    className='h-10 w-10 ml-4 rounded-full'


                                                ></Image>

                                            </Link>
                                        }

                                    </>
                                        :
                                        <>
                                            <Link className='font-semibold ml-8' to={'/login'}>Login</Link>

                                            <Link className='font-semibold' to={'/signup'}>SignUp</Link>
                                        </>
                                }


                            </li>
                        </ul>
                    </div>
                    {/* <div className="navbar-end">
                        <h1>amra</h1>
                    </div>
                    <div className="navbar-end">


                    </div> */}
                </div>
            </div>
        </div >
    );
};

export default Headers;