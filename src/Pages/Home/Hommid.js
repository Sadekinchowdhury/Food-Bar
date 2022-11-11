import React from 'react';

const Hommid = () => {
    return (
        <div>
            <h1 className='  text-4xl text-orange-700 font-bold text-center'>Do you like fast food</h1>
            <div className="hero   bg-base-200">



                <div className=" hero-content flex-col lg:flex-row-reverse">
                    <img className='w-1/2' src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">This is food bar </h1>
                        <p className="py-6">You can chose your favourite food and buy less money.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hommid;