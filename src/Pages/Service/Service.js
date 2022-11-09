import React from 'react';

const Service = () => {

    const handlerivi = event => {

        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;



        const users = {
            name: name,
            img: img,
            price: price,
            description: description


        }
        console.log(users)
        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (

        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlerivi}>
                        <div className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text"
                                    name='name'
                                    required
                                    placeholder="name" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="ling" name='img'
                                    required
                                    placeholder="photoURL" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" name='price'
                                    required
                                    placeholder="price" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <textarea className='border-4' name="description" placeholder='description' id="" cols="30" rows="10"></textarea>
                            </div>

                            <button className="btn btn-accent">Button</button>

                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Service;