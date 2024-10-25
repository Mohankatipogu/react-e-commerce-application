import { connect } from "react-redux";
import React from "react";

function Counter(props){
    console.log(props)
    return(
        <div style={{marginLeft:'40%',marginTop:'10%' }}>
            <h1 sstyle={{marginBottom:'40%'}}>Counter : {props.counterReducer.count}</h1>
            <button className="rounded" onClick={()=>{props.dispatch({type:'INC'})}}>Increment</button> &nbsp;
            <button className="rounded" onClick={()=>{props.dispatch({type:'DEC'})}}>Decrement</button> &nbsp;
            <button className="rounded" onClick={()=>{props.dispatch({type:'RES'})}}>Reset</button> &nbsp;
        </div>
    )
}
export default connect((store)=>{return store}) (Counter);