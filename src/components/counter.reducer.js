var intialState={
    count:0,
}
function counterReducer(state=intialState,action){
    if(action.type==='INC'){
             return(
                  {...state,count:state.count+1}
            )
         }
         if(action.type==='DEC'){
            return{...state,count:state.count-1}
         }
         if(action.type==='RES'){
            return {...state,count:state.count=0}
         }
         return state
}
export default counterReducer;