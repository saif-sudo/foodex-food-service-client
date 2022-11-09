import React from 'react';
import { Link } from 'react-router-dom';
import About from './About/About';
import Services from './Services/Services';
import Slider from './Slider/Slider';


const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <About></About>
           <Services></Services>
           <Link to={`/services`}>See All</Link>
        </div>
    );
};

export default Home;