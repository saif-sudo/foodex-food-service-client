import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceFullDetails = () => {
    const {_id,title,image,price,details}= useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregisterd';
        const review = form.review.value;
   

    const reviewitem = {
        service: _id,
        serviceName: title,
        email ,
        review
    }

    fetch('http://localhost:5000/reviews' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewitem)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('review added successfully');
                form.reset();
               
            }
        })
        .error(er => console.error(er))

    }


    return (
        <div>
          <PhotoProvider>
        <figure><img src={image} alt="Images" /></figure>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">
            {title}<br/>
            Price:${price}
           
          </h2>
          <p>
          {
                     
                    
                     <p>{details}</p>
                }
          </p>
          <div className="card-actions justify-end">
          
          </div>
        </div>
        <div>
            <h1 className='text-center font-bold'>Write A Review</h1>
        <form  onSubmit={handleReview} className="card-body">
            
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Email:</span>
                </label>
                <input type="text" placeholder="email" name='email' defaultValue={user?.email} className="input input-bordered" readOnly/>
               
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review:</span>
                </label>
                
                <textarea placeholder="write your review" name='review' className="textarea textarea-bordered h-50 w-full"></textarea>
               
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" value="Add Review" type="submit"/>
                
              </div>
            </form>
        </div>
      </div>
     
    );
}

export default ServiceFullDetails;