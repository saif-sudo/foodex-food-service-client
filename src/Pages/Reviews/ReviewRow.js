import React from 'react';

const ReviewRow = ({review , handleDelete}) => {
    const{_id, serviceName , email} =  review;
    
    return (
        <tr>
        
        <td>{serviceName}</td>
        <td>{email}</td>
        <td><button onClick={() => handleDelete(_id)} className='bg-error btn btn-ghost'>Delete</button></td>
        
      </tr>
    );
};

export default ReviewRow;