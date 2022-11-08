import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(() => {
            fetch('services.json')
            .then(res=>res.json())
            .then(data=>setServices(data))

    } ,[])
    return (
        <div>
            <div className='text-center '>
                <h2 className='text-5xl font-bold m-auto text-orange-600'> Our Services : {services.length}</h2><br/>
                <p>This is Our Populer Services. We Try to make sure Good Services All Time</p>
                
            </div>
            <div>
            {
                    services.map(service => <ServiceCard
                        key={service._id}
                    ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;