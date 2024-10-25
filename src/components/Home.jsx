import React, { useEffect ,useState} from "react";
import {Link, Outlet} from "react-router-dom";
function Home(){
   var[countries,setCountries]=useState([])
   useEffect(()=>{
          fetch('https://restcountries.com/v3/all')
          .then(res=>res.json())
          .then(data=>{
            setCountries([...data])
          })
   },[])
   return(
      <div className="container">
         <h1>Countries</h1>
         {
            countries?.map((cr)=>{
               return(
                  <div>
                    <Link to={`/countryDetails/${cr.name.common}`}> <li>{cr.name.common}</li></Link>
                  </div>
               )
            })
         }
                    <Outlet></Outlet>
      </div>
   )
}
export default Home;