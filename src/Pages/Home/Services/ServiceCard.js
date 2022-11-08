import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
        const {title,image_url,details,_id} = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}
     
    </h2>
    <p>
    {
               
               details.length > 100 ?
               <p>{details.slice(0,100) + '...'}<Link to={`/services/${_id}`}>Read More</Link></p>
               :
               <p>{details}</p>
             }
    </p>
    <div className="card-actions justify-end">
    <button className="btn btn-primary">Add to Service</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;