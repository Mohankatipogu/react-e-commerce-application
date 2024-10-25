var intialState={
    todos:['bmw','tata','maruthi','mahendra','ford','kia']
}
function todoReducer(state=intialState,action){
    if(action.type==='ADD_TODO'){
        return({...state,todos:[state.todos,action.payload]})
    }
    return state
}
export default todoReducer;