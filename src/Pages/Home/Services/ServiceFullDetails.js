import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceFullDetails = () => {
    const {title,image,details,price}= useLoaderData();
    return (
        <div>
        <figure><img src={image} alt="Shoes" /></figure>
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
      </div>
    );
};

export default ServiceFullDetails;