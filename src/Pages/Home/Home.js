import React from 'react';
import { Link } from 'react-router-dom';
import Branch from '../Branch/Branch';
import ServiceTime from '../ServiceTime/ServiceTime';
import About from './About/About';
import Services from './Services/Services';
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <About></About>
           <Services></Services>
            <div className="card-actions justify-end m-5">
           <Link to={`/services`}><button className="btn btn-primary">See All</button></Link>
           </div>
           <Branch></Branch>
           <ServiceTime></ServiceTime>
        </div>
    );
};

export default Home;