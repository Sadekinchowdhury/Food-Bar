import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { creatUser, userUpdate } = useContext(AuthContext)

    const handlRegister = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const name = form.name.value;
        console.log(email, password, name, photoURL)
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                UpdatProfile(name, photoURL)
                console.log(user)
            })
            .catch(error => console.error('error', error))
    }
    const UpdatProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        userUpdate(profile)
            .then(() => {

            })
            .catch(error => {
                console.error(error)

            })

    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1></h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlRegister}>
                        <div className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">UserName</span>
                                </label>
                                <input type="text" name='name'
                                    required
                                    placeholder="UserName" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photoURL</span>
                                </label>
                                <input type="text" name='photoURL'
                                    required
                                    placeholder="photoURL" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'
                                    required
                                    placeholder="email" className="input input-bordered" />
                            </div>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text"
                                    name='password'
                                    required
                                    placeholder="password" className="input input-bordered" />

                            </div>

                            <div>
                                <p>already have an acount plz <Link to='/login'><span className='text-xl text-orange-500'>login</span></Link> </p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">SignUp</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;