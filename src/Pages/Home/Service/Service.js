import React from 'react';

const Service = (props) => {
    const {service} = props;
    // const {name,price,description,img}=servic;
    return (
        <div className='service'>
            <h2>This is service</h2>
            <img src={service.img} alt="" />
            <h3>{service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p>{service.description}</p>
            
        </div>
        // <div>
        //     <h2>Name: {service.name}</h2>
        // </div>
    );
};

export default Service;