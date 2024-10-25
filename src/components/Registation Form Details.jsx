import React from "react";
import Regstation from "./Registion Form";

function Regstation_Details(){
    let [reg,setReg]=React.useState([]);
    React.useEffect(()=>{
        fetch("http://localhost:3000/Registation").then((res)=>{
             return res.json()
        }).then((data)=>{
          setReg([...data])
        })
    },[])
    return(
        <div className="container">
        <h1 className="text-center p-2">Your Details</h1>
          <table className="table">
            <thead>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Email Address</th>
             <th>Phone Number</th>
             <th>City</th>
             <th>Country</th>
             <th >Gender</th>
             <th>Action</th>
            </thead>
            <tbody>
            </tbody>
            {
                reg?.map((re)=>{
                    return(
                        <tr style={re.gender==='male'?{background:'#98DED9',opacity:'0.9'}:{background:'#F9DBBA',opacity:'0.9'}}>
                            <td>{re.firstname}</td>
                            <td>{re.lastname}</td>
                            <td>{re.EmailAddress}</td>
                            <td>{re.phone}</td>
                            <td>{re.city}</td>
                            <td>{re.Country}</td>
                            <td>{re.gender}</td> 
                           <td >
                            <button style={re.gender==='male'?{background:'#98DED9',border:'none'}:{background:'#F9DBBA', border:'none'}}><i class="bi bi-trash3-fill " ></i></button>
                           </td>
                        </tr>
                    )
                })
            }
            </table>       
        </div>
    )
}
export default Regstation_Details;