import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
        const {title,image,details,_id,price} = service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {title}<br/>
      Price:${price}
     
    </h2>
    <p>
    {
               
               details.length > 100 ?
               <p>{details.slice(0,100) + '...'}</p>
               :
               <p>{details}</p>
             }
    </p>
    <div className="card-actions justify-end">
    <Link className="font-bold text-orange-600" to={`/services/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;