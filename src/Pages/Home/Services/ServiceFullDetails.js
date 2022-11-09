import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceFullDetails = () => {
    const {title,image_url,details,category_id}= useLoaderData();
    return (
        <div>
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}<br/>
            Price:${category_id}
           
          </h2>
          <p>
          {
                     
                    
                     <p>{details}</p>
                }
          </p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Service</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceFullDetails;