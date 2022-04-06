import React from 'react';
import Banner from '../Bannner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Experts/>
            
        </div>
    );
};

export default Home;