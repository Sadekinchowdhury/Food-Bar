import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Laout/Main';
import Blog from '../Pages/Blog/Blog';


import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Myreview from '../Pages/Myreview/Myreview';
import Service from '../Pages/Service/Service';
import Details from '../Pages/Services/Services/Details';
import Services from '../Pages/Services/Services/Services';
import SignUp from '../Pages/SignUp/SignUp';
import PrivetRout from './PrivetRoutes';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/service',
                element: <Services></Services>,
                loader: () => fetch('https://food-bars-sadekinchowdhury.vercel.app/service')
            }, {
                path: '/service/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://food-bars-sadekinchowdhury.vercel.app/service/${params.id}`)

            }, {
                path: '/serviceAdd',
                element: <PrivetRout><Service></Service></PrivetRout>
            }, {
                path: '/review',
                element: <PrivetRout><Myreview></Myreview></PrivetRout>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }


        ]
    }
])
export default routes;