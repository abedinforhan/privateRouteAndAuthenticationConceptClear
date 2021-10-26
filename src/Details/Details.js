import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Details = () => {
    
    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
   
   
 useEffect(() =>
      fetch("/productServices.json")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail.key==id)
        setSpecificDetail(matchedData);
    }

}

,[details])
    return (
        
    <div >
           <h2> This is dynamic page and id is:{id}</h2>
           <p>Name: {specificDetail?.name}</p>
           <p>price: {specificDetail?.price}</p>
    </div>
           
     
   
  
    );
};

export default Details;