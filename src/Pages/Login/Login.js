import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { GoogleAuthProvider } from 'firebase/auth'
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';

const Login = () => {
    const Gprovider = new GoogleAuthProvider()


    UseTitle('login')

    const { LogInuser, Loading, googleSignin } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'


    const handlLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        LogInuser(email, password)
            .then(result => {
                const user = result.user;

                const cureentuser = {
                    email: user.email
                }
                // form.reset()
                fetch('https://food-bars-sadekinchowdhury.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cureentuser)


                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('food-token', data.token)

                        navigate(from, { from: true })
                        Loading(false)
                    })

            })
            .catch(error => console.error('error', error))

    }

    // google
    const handlGoogle = () => {

        googleSignin(Gprovider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error('error', error))
    }
    return (

        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlLogin}>
                        <div className="card-body">
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
                                <p>already have an acount plz <Link to='/signup'><span className='text-xl text-orange-500'>SignUp</span></Link> </p>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handlGoogle} className="btn btn-active ">Google</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;