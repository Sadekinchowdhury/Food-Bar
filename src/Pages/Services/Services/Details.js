import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Review from "../../reveiw/Review";

const Details = () => {
    const { user } = useContext(AuthContext)

    const details = useLoaderData()
    console.log(details)
    const { category, name, description, price, ratings, seller, shiping, stock, img } = details


    const handleriview = event => {

        event.preventDefault()
        const form = event.target;
        const text = form.text.value;
        console.log(text)

        const Users = {

            email: user?.email,
            user_pic: user?.photoURL,
            username: user?.name,
            food_name: name,
            img: img,
            RevieW: text
        }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })




    }

    return (
        <div>
            <div className="card  bg-base-100 shadow-xl border-x-2">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl font-semibold text-orange-600'>price: ${price}</p>
                    <p>{description}</p>
                    <p className=' font-semibold text-orange-600'>seller: {seller}</p>
                    <p className=' font-semibold text-orange-600'>stock: {stock}</p>
                    <p className=' font-semibold text-orange-600'>Retings: {ratings}</p>

                </div>
                <div>
                    <h1 className="text-center">add a review</h1>

                    <form onSubmit={handleriview}>
                        <div className="align-middle py-6 ">
                            <textarea className="textarea w-full textarea-info" type="text" name="text" placeholder="Bio"></textarea>
                            <button className="btn btn-primary">Add review</button>
                        </div>

                    </form>

                </div>


            </div>

            <div>

                <Review></Review>
            </div>
        </div>
    );
};

export default Details;