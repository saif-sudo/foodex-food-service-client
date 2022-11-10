import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setreview] = useState({})
   
    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res => res.json())
        .then(data => setreview(data))
    },[user?.email])
    return (
        <div>
            <h2>You have {reviews.length} Reviews</h2>
        </div>
    );
};

export default Reviews;