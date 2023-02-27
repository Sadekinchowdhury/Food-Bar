import React from 'react';

const Hommid = () => {
    return (
        <div className='lg:p-10'>
            <h1 className="text-3xl text-center font-bold">Choose Your best Quality Food</h1>
            <div className='m-4 mt-4 mb-10 lg:p-10 '>
                {/* <h1 className='mb-4 text-4xl text-orange-700 font-bold text-center'>Do you like fast food</h1> */}

                <div className="grid grid-cols-1 lg:grid-cols-2">



                    <div className="">
                        <img className='w-full' src="https://i.ibb.co/3RFVFjT/download-5-removebg-preview.png" alt='' />

                    </div>
                    <div className=' text-center'>
                        <div>
                            <img className='w-full' src="https://i.ibb.co/zFBmrBq/images-4-removebg-preview-1.png" alt="" />
                        </div>


                    </div>
                </div>
                <div className='items-center mt-4 justify-center text-center'>

                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Hommid;