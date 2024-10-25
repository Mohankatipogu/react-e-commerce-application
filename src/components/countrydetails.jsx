import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';

function CountryDetails(){
    var x=useParams();
    console.log(x);  
    var [details,setDetails]=useState({});
    useEffect(()=>{
      fetch(`https://restcountries.com/v3/name/${x.cname}`)
      .then(res=>{return(res.json())})
      .then(data=>{
        setDetails((pre)=>{
          return ({...data[0]})
        })
      })
    },[]) 
    return(  
      <div className='container p-5'>

      <div class="card" style={{width: "18rem"}}>
       <img src='' class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{x.cname}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
      </div>
    )
}
export default CountryDetails;