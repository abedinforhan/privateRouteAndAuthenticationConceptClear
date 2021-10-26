import React, { useEffect, useState } from 'react';
import ServiceContent from '../ServiceContent/ServiceContent';
const Services = () => {

    const [services,setServices]=useState([])

useEffect(() => 
    fetch('/productServices.json')
    .then(res=> res.json())
    .then(data=>setServices(data))
, [])

    return (
        <div className="container">
           <div className="row g-5">
                {
                   services.map((service=> <ServiceContent    service={service}>
                     
                   </ServiceContent>))
                }
           </div>
        </div>
    );
};

export default Services;