import { React, useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Myreviewadd from './Myreviewadd';


const Myreview = () => {

    const { user } = useContext(AuthContext)

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [user?.email])


    const handlDelete = categori => {
        const procees = window.confirm('are you sure to delete')

        if (procees) {

            fetch(`http://localhost:5000/users/${categori}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => console.log(data))

        }


    }

    return (
        <div>
            {

                review.map(rev => <Myreviewadd key={rev._id}
                    rev={rev}
                    handlDelete={handlDelete}
                >

                </Myreviewadd>)


            }
        </div>
    );
};

export default Myreview;