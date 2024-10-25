import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { connect } from "react-redux";
function Product({productReducer:{allproducts,cartItems},dispatch}){
    return(
        <div className="container">
            <h1>Products</h1>
              <div className="d-flex flex-wrap">
                {
                    allproducts.map((p)=>{
                        return (
                            <div className="m-2 p-2">
                                <div className="card h-100" style={{width: "12rem"}}>
                               <img src={p.image} class="card-img-top" style={{height:'100px'}} alt="..."/>
                              <div className="card-body">
                                <h5 class="card-title">{p.title.slice(0,20)}</h5>
                              <p class="card-text">{p.description.slice(0,15)}</p>
                             {
                                cartItems.some(function(citem){
                                    if(citem.id===p.id)
                                      {return true}    
                                }) ?<button class="btn btn-warning">GO To Cart</button>:<button class="btn btn-primary" onClick={()=>{dispatch({type:'ADD_TO_CART',payload:p})}}>Add To Cart</button>
                             }
                            </div>
                            </div>
                            </div>
                        )
                    })
                }
              </div>
        </div>
    )
}
export default connect(store=>store) (Product);