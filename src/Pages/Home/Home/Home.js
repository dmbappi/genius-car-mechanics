import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Bannner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div id='home'>
            <Header></Header>
            <Banner/>
            <Services/>
            <Experts/>
            
        </div>
    );
};

export default Home;