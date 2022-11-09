import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Laout/Main';


import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
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
                loader: () => fetch('http://localhost:5000/service')
            }, {
                path: '/service/:id',
                element: <PrivetRout><Details></Details></PrivetRout>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)

            }, {
                path: '/serviceAdd',
                element: <Service></Service>
            }

        ]
    }
])
export default routes;