import React from "react";
import { connect } from "react-redux";
function Cart({productReducer:{cartItems},dispatch}){
    return(
        <div className="container">
            <table className="table table-striped p-2">
                <thead>
                  <th className="p-2">Title</th>
                  <th className="p-2">price</th>
                  <th className="p-2">volume</th>
                 <th className="p-2"> Total Price</th>
                </thead>
                <tbody>
                   {
                   
                    cartItems.map((ci)=>{
                        return(
                            <tr> 
                            <td>
                                <img src={ci.image} alt="" width='50px' />
                                {ci.title}
                                </td>
                            <td style={{paddingTop:'20px'}}>{ci.price}</td>
                            <td style={{paddingTop:'20px'}}>
                            <button className="btn btn-secondary" onClick={()=>{dispatch({type:"DEC",payload:ci.id})}} >-</button>
                            <b className="p-2 ">{ci.count}</b>
                            <button  className="btn btn-success" onClick={()=>{dispatch({type:'INC',payload:ci.id})}}>+</button>
                            </td>
                            <td style={{paddingTop:'20px'}}>{ci.price*ci.count}</td>
                            <td>
                                <button className="btn btn-danger m-2" onClick={()=>{dispatch({type:'Del',payload:ci.id})}}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                   }
                </tbody>
                <tfoot >
                    <tr>
                    <th colspan={5} className="bg-success text-end" style={{color:'white'}} >Total:{cartItems.reduce((a,b)=>{return a+(b.price*b.count)},0)}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default connect(store=>store) (Cart)