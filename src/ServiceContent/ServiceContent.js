import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceContent = (props) => {
    const { key, image, name, price, description } = props.service || {}


const history= useHistory()

  const handleDetails=(key)=>{
      const uri= `/details/${key}`
      history.push(uri)
  }

    return (
        <div className="col-md-3">
            <div className="card" style={{"width": "18rem"}}>
                <img src={image} className="card-img-top" alt="..."/>
                <div className ="card-body">
                <h5 className ="card-title">{name}</h5>
                <p className ="card-text">{description}</p>
                {price}
                </div>
                <button onClick={()=>handleDetails(key)} className ="btn btn-primary">See Details</button>
            </div>
        </div>
    );
};

export default ServiceContent;