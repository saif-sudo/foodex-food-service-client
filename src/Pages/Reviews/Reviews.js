import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewRow from './ReviewRow';

const Reviews = () => {
    
    const { user } = useContext(AuthContext);
    const [reviews, setreview] = useState([])

    useEffect(() => {

        fetch(`https://foodex-cloud-kitchen-server.vercel.app/reviews?email:${user?.email}`)

            .then(res => res.json())
            .then(data => setreview(data))
            
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure , you want to delete this review?');
        if(proceed){
            fetch(`https://foodex-cloud-kitchen-server.vercel.app/reviews/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                if(data.deletedCount > 0){
                    alert('Deleted Successfully');
                    const remaining = reviews.filter(rev => rev._id !== id);
                    setreview(remaining);

                }
            
            
            });

            
            }
        }
    
    return (
        <div>
            <h2>You have {reviews.length} Reviews</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            
                            <th>Service Name</th>
                            <th>Reviewer</th>
                            <th>Delete Review</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete ={handleDelete}
                            ></ReviewRow> )
                           

                        }
                            
                           
                        


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reviews;