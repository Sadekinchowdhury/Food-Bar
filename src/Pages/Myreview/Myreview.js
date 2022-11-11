import { React, useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Myreviewadd from './Myreviewadd';


const Myreview = () => {

    const { user, LogOut } = useContext(AuthContext)

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`https://food-bars-sadekinchowdhury.vercel.app/users?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('food-token')}`
            }

        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    LogOut()
                }

                return res.json()
            })
            .then(data => {
                setReview(data)
            })
    }, [user?.email])


    const handlDelete = id => {
        const procees = window.confirm('are you sure to delete')

        if (procees) {

            fetch(`https://food-bars-sadekinchowdhury.vercel.app/users/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted succesfully')

                        const remainng = review.filter(rev => rev._id !== id);
                        setReview(remainng)
                    }

                })

        }


    }
    const handlUpdate = id => {
        fetch(`https://food-bars-sadekinchowdhury.vercel.app/users/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Approved' })


        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    const remainng = review.filter(rev => rev._id !== id);
                    const approving = review.find(rev => rev._id === id)
                    approving.status = 'Approved';
                    const newRevew = [approving, ...remainng];
                    setReview(newRevew);
                }

                console.log(data)
            })
    }

    return (
        <div>
            {

                review.map(rev => <Myreviewadd key={rev._id}
                    rev={rev}
                    handlDelete={handlDelete}
                    handlUpdate={handlUpdate}
                >

                </Myreviewadd>)


            }
        </div>
    );
};

export default Myreview;