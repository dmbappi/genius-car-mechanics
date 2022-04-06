import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {service} = props;
    // const {name,price,description,img}=servic;
    return (
        <div className='service pb-3 '>
            <img src={service.img} alt="" />
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p className='px-3'>{service.description}</p>
            <Link to={`/booking/${service.id}`}>
            <button className='btn btn-warning'>Book {service.name.toLowerCase()}</button>
            </Link>
            
        </div>
        // <div>
        //     <h2>Name: {service.name}</h2>
        // </div>
    );
};

export default Service;